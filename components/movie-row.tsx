import { ChevronRight } from "lucide-react"
import { MovieCard } from "@/components/movie-card"
import type { Curtmetratge } from "@/lib/movies-data"

interface MovieRowProps {
  title: string
  movies: Curtmetratge[]
  size?: "small" | "medium" | "large"
}

export function MovieRow({ title, movies, size = "medium" }: MovieRowProps) {
  if (movies.length === 0) return null

  return (
    <section className="py-4">
      <div className="flex items-center justify-between px-4 lg:px-8 mb-3">
        <h2 className="font-display text-xl font-bold text-foreground">{title}</h2>
        <button className="flex items-center gap-0.5 text-base font-semibold text-primary hover:text-primary/80 transition-colors">
          Veure tot
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 lg:px-8 pb-2">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} size={size} />
        ))}
      </div>
    </section>
  )
}

