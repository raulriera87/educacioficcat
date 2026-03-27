"use client"

import { useState } from "react"
import { CategoryPill } from "@/components/category-pill"
import { MovieCard } from "@/components/movie-card"
import { categories, getCurtmetratgesByGenre, curtmetratges } from "@/lib/movies-data"

export function CategoriesSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredMovies = activeCategory
    ? getCurtmetratgesByGenre(activeCategory)
    : curtmetratges

  return (
    <section className="py-4">
      <div className="px-4 lg:px-8 mb-3">
        <h2 className="font-display text-xl font-bold text-foreground">Generes</h2>
      </div>

      <div className="flex gap-2 overflow-x-auto scrollbar-hide px-4 lg:px-8 pb-3">
        <button
          onClick={() => setActiveCategory(null)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-base font-bold whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
            activeCategory === null
              ? "bg-primary text-primary-foreground shadow-lg scale-105"
              : "bg-card text-foreground border border-border hover:border-primary/30 hover:bg-muted"
          }`}
        >
          Tots
        </button>
        {categories.map((cat) => (
          <CategoryPill
            key={cat.id}
            category={cat}
            isActive={activeCategory === cat.id}
            onClick={() => setActiveCategory(cat.id)}
          />
        ))}
      </div>

      {activeCategory && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 lg:px-8 py-2">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} size="medium" />
          ))}
          {filteredMovies.length === 0 && (
            <p className="col-span-full text-center text-muted-foreground py-8 text-base">
              No hi ha curtmetratges en aquest genere.
            </p>
          )}
        </div>
      )}
    </section>
  )
}

