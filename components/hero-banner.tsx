"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play, Clock, ChevronLeft, ChevronRight, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Curtmetratge } from "@/lib/movies-data"
import { getAgeColor } from "@/lib/movies-data"
import { cn } from "@/lib/utils"

interface HeroBannerProps {
  movies: Curtmetratge[]
}

export function HeroBanner({ movies }: HeroBannerProps) {
  const [current, setCurrent] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [mouseStart, setMouseStart] = useState<number | null>(null)
  const [mouseEnd, setMouseEnd] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const movie = movies[current]

  const next = () => setCurrent((prev) => (prev + 1) % movies.length)
  const prev = () => setCurrent((prev) => (prev - 1 + movies.length) % movies.length)

  // Minimum swipe/drag distance (in px)
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) {
      next()
    }
    if (isRightSwipe) {
      prev()
    }
  }

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setMouseEnd(null)
    setMouseStart(e.clientX)
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    setMouseEnd(e.clientX)
  }

  const onMouseUp = () => {
    if (!isDragging || !mouseStart || !mouseEnd) {
      setIsDragging(false)
      return
    }

    const distance = mouseStart - mouseEnd
    const isLeftDrag = distance > minSwipeDistance
    const isRightDrag = distance < -minSwipeDistance

    if (isLeftDrag) {
      next()
    }
    if (isRightDrag) {
      prev()
    }

    setIsDragging(false)
    setMouseStart(null)
    setMouseEnd(null)
  }

  const onMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
      setMouseStart(null)
      setMouseEnd(null)
    }
  }

  if (!movie) return null

  return (
    <section className="relative w-full" suppressHydrationWarning>
      <div
        className="relative h-[320px] sm:h-[400px] lg:h-[480px] overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        {/* Background Image */}
        {movie.poster ? (
          <Image
            src={movie.poster}
            alt={movie.titol}
            fill
            className="object-cover transition-all duration-700"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-8">
          <div className="mx-auto w-full max-w-[1280px]">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className={cn("text-sm font-bold px-2.5 py-1 rounded-full", getAgeColor(movie.qualificacio_edats))}>
                  {movie.qualificacio_edats}
                </span>
              <span className="inline-flex items-center gap-1 bg-foreground/20 backdrop-blur-sm text-foreground text-sm font-semibold px-2.5 py-1 rounded-full">
                <Clock className="w-3 h-3" />
                {movie.durada}
              </span>
              <span className="inline-flex items-center gap-1 bg-foreground/10 backdrop-blur-sm text-foreground text-sm font-semibold px-2.5 py-1 rounded-full">
                <Users className="w-3 h-3" />
                {movie.nivell_educatiu.join(", ")}
              </span>
              {movie.any && (
                <span className="text-sm font-semibold text-foreground/80 bg-foreground/10 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {movie.any}
                </span>
              )}
            </div>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2 text-balance drop-shadow-md">
              {movie.titol}
            </h1>
            <p className="hidden lg:block text-base text-foreground/90 line-clamp-2 mb-3 max-w-md text-pretty leading-relaxed drop-shadow-sm">
              {movie.sinopsi}
            </p>

            <div className="flex items-center gap-2 flex-wrap mb-4">
              {movie.genere.map((g) => (
                <span key={g} className="text-sm bg-card/30 backdrop-blur-sm text-foreground font-semibold px-2.5 py-1 rounded-full">
                  {g}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link href={`/pelicula/${movie.id}`}>
                <Button className="rounded-full px-6 py-3 font-bold text-base bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                  <Play className="w-4 h-4 mr-2 fill-current" />
                  Veure ara
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 left-2 -translate-y-1/2 hidden sm:block">
          <button
            onClick={prev}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-colors text-foreground"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute top-1/2 right-2 -translate-y-1/2 hidden sm:block">
          <button
            onClick={next}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-colors text-foreground"
            aria-label="Seguent"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 py-3">
        {movies.map((_, index) => (
          <button
            key={movies[index].id}
            onClick={() => setCurrent(index)}
            className={cn(
              "rounded-full transition-all duration-300",
              index === current
                ? "w-6 h-2 bg-primary"
                : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
            aria-label={`Anar a ${movies[index].titol}`}
          />
        ))}
      </div>
    </section>
)
}

