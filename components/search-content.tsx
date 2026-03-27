"use client"

import { useState, useMemo, useRef } from "react"
import { Search, X, ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react"
import { MovieCard } from "@/components/movie-card"
import {
  searchCurtmetratges,
  filterCurtmetratges,
  curtmetratges,
  getUniqueNivells,
  getUniqueEdats,
  getUniqueGeneres,
  getUniqueOrigens,
  getUniqueAnys,
  getUniqueTemes,
  type Filters,
} from "@/lib/movies-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const cerquesPopulars = [
  "Salut mental",
  "Amistat",
  "Bullying",
  "Diversitat",
  "Cinema",
  "Feminisme",
]

type FilterSection = {
  key: keyof Filters
  label: string
  options: (string | number)[]
}

function FilterSwiper({
  section,
  selectedValues,
  onToggle,
}: {
  section: FilterSection
  selectedValues: (string | number)[]
  onToggle: (key: keyof Filters, value: string | number) => void
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="mb-4">
      <h3 className="font-display text-base font-bold text-foreground mb-2 px-4 lg:px-0">
        {section.label}
      </h3>
      <div className="relative group">
        {/* Left scroll button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-background/90 backdrop-blur-sm border border-border rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex"
          aria-label="Desplacar esquerra"
        >
          <ChevronLeft className="w-4 h-4 text-foreground" />
        </button>

        {/* Swiper container */}
        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide px-4 lg:px-0 py-1"
        >
          {section.options.map((option) => {
            const isSelected = selectedValues.includes(option)
            return (
              <button
                key={option}
                onClick={() => onToggle(section.key, option)}
                className={`flex-shrink-0 text-base px-4 py-2 rounded-full font-medium transition-all ${
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card border border-border text-foreground hover:bg-muted"
                }`}
              >
                {option}
              </button>
            )
          })}
        </div>

        {/* Right scroll button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-background/90 backdrop-blur-sm border border-border rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex"
          aria-label="Desplacar dreta"
        >
          <ChevronRight className="w-4 h-4 text-foreground" />
        </button>
      </div>
    </div>
  )
}

export function SearchContent() {
  const [query, setQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState<Filters>({
    nivellEducatiu: [],
    edat: [],
    genere: [],
    origen: [],
    any: [],
    temes: [],
  })

  const filterSections: FilterSection[] = useMemo(
    () => [
      { key: "nivellEducatiu", label: "Nivell Educatiu", options: getUniqueNivells() },
      { key: "edat", label: "Qualificacio d'Edat", options: getUniqueEdats() },
      { key: "genere", label: "Genere", options: getUniqueGeneres() },
      { key: "origen", label: "Origen", options: getUniqueOrigens() },
      { key: "any", label: "Any", options: getUniqueAnys() },
      { key: "temes", label: "Temes", options: getUniqueTemes() },
    ],
    []
  )

  const activeFilterCount = useMemo(() => {
    return Object.values(filters).reduce((acc, arr) => acc + arr.length, 0)
  }, [filters])

  const results = useMemo(() => {
    let filtered = curtmetratges

    // Apply text search
    if (query.trim()) {
      filtered = searchCurtmetratges(query)
    }

    // Apply filters
    if (activeFilterCount > 0) {
      const filteredByFilters = filterCurtmetratges(filters)
      if (query.trim()) {
        // Intersection of search results and filter results
        const filteredIds = new Set(filteredByFilters.map((c) => c.id))
        filtered = filtered.filter((c) => filteredIds.has(c.id))
      } else {
        filtered = filteredByFilters
      }
    }

    return filtered
  }, [query, filters, activeFilterCount])

  const showInitialState = !query.trim() && activeFilterCount === 0
  const hasActiveFilters = activeFilterCount > 0

  const toggleFilter = (key: keyof Filters, value: string | number) => {
    setFilters((prev) => {
      const current = prev[key] as (string | number)[]
      const exists = current.includes(value as never)
      return {
        ...prev,
        [key]: exists ? current.filter((v) => v !== value) : [...current, value],
      }
    })
  }

  const clearAllFilters = () => {
    setFilters({
      nivellEducatiu: [],
      edat: [],
      genere: [],
      origen: [],
      any: [],
      temes: [],
    })
  }

  return (
    <div className="py-6">
      {/* Search input and filter button */}
      <div className="flex items-center gap-3 mb-4 px-4 lg:px-8">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar curtmetratges, temes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-12 py-4 rounded-2xl bg-card border border-border text-foreground placeholder:text-muted-foreground text-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Esborrar cerca"
            >
              <X className="w-3.5 h-3.5 text-muted-foreground" />
            </button>
          )}
        </div>
        <Button
          variant={showFilters ? "default" : "outline"}
          size="lg"
          onClick={() => setShowFilters(!showFilters)}
          className="rounded-2xl gap-2 h-[56px] px-5"
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span className="hidden sm:inline">Filtres</span>
          {activeFilterCount > 0 && (
            <Badge variant="secondary" className="ml-1 bg-primary-foreground/20 text-primary-foreground">
              {activeFilterCount}
            </Badge>
          )}
        </Button>
      </div>

      {/* Filter swipers - only show when showFilters is true */}
      {showFilters && (
        <div className="mb-6 lg:px-8 animate-in slide-in-from-top-2 duration-200">
          {filterSections.map((section) => (
            <FilterSwiper
              key={section.key}
              section={section}
              selectedValues={filters[section.key] as (string | number)[]}
              onToggle={toggleFilter}
            />
          ))}
        </div>
      )}

      {/* Active filters summary & clear button */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2 mb-6 px-4 lg:px-8">
          <span className="text-base text-muted-foreground">Filtres actius:</span>
          {Object.entries(filters).map(([key, values]) =>
            (values as (string | number)[]).map((value) => (
              <Badge
                key={`${key}-${value}`}
                variant="secondary"
                className="gap-1 pr-1 cursor-pointer hover:bg-destructive/10"
                onClick={() => toggleFilter(key as keyof Filters, value)}
              >
                {value}
                <X className="w-3 h-3" />
              </Badge>
            ))
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-muted-foreground text-sm"
          >
            Esborrar tot
          </Button>
        </div>
      )}

      {/* Initial state */}
      {showInitialState && (
        <div className="px-4 lg:px-8">
          <h2 className="font-display text-lg font-bold text-foreground mb-3">Cerques populars</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {cerquesPopulars.map((term) => (
              <button
                key={term}
                onClick={() => setQuery(term)}
                className="bg-muted text-muted-foreground text-base font-semibold px-4 py-2 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {term}
              </button>
            ))}
          </div>

          <h2 className="font-display text-lg font-bold text-foreground mb-3">Recomanats per a tu</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {curtmetratges.slice(0, 6).map((movie) => (
              <MovieCard key={movie.id} movie={movie} size="medium" />
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      {!showInitialState && (
        <div className="px-4 lg:px-8">
          <p className="text-base text-muted-foreground mb-4">
            {results.length} {results.length === 1 ? "resultat" : "resultats"} trobats
          </p>
          {results.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {results.map((movie) => (
                <MovieCard key={movie.id} movie={movie} size="medium" />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <Search className="w-7 h-7 text-muted-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-1">
                No hem trobat resultats
              </h3>
              <p className="text-base text-muted-foreground max-w-xs">
                Prova amb altres paraules o ajusta els filtres.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

