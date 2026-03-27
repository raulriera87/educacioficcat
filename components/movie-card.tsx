"use client"

import Image from "next/image"
import Link from "next/link"
import { Clock, GraduationCap } from "lucide-react"
import type { Curtmetratge } from "@/lib/movies-data"
import { getAgeColor } from "@/lib/movies-data"
import { cn } from "@/lib/utils"

interface MovieCardProps {
  movie: Curtmetratge
  size?: "small" | "medium" | "large"
}

const gradients = [
  "from-rose-400 to-orange-300",
  "from-sky-400 to-indigo-400",
  "from-emerald-400 to-teal-400",
  "from-amber-300 to-orange-400",
  "from-violet-400 to-purple-400",
  "from-pink-400 to-rose-400",
  "from-cyan-400 to-blue-400",
  "from-lime-400 to-emerald-400",
]

function getGradient(id: string) {
  let hash = 0
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash)
  }
  return gradients[Math.abs(hash) % gradients.length]
}

const sizeClasses = {
  small: "w-[160px] h-[250px] sm:w-[180px] sm:h-[250px]",
  medium: "w-[225px] h-[310px] sm:w-[245px] sm:h-[340px]",
  large: "w-[280px] h-[390px] sm:w-[300px] sm:h-[420px]"
}

export function MovieCard({ movie, size = "medium" }: MovieCardProps) {
  const gradient = getGradient(movie.id)

  return (
    <Link
      href={`/pelicula/${movie.id}`}
      className="flex-shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
    >
      <div
        className={cn(
          "relative rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-[1.03]",
          sizeClasses[size]
        )}
      >
        {movie.poster ? (
          <Image
            src={movie.poster}
            alt={movie.titol}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 200px, 220px"
          />
        ) : (
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br flex items-center justify-center p-3",
              gradient
            )}
          >
            <span className="text-card font-display font-bold text-center text-base leading-tight drop-shadow-md">
              {movie.titol}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="absolute top-2 right-2">
          <span
            className={cn(
              "text-[10px] font-bold px-2 py-1 rounded-full backdrop-blur-sm",
              getAgeColor(movie.qualificacio_edats)
            )}
          >
            {movie.qualificacio_edats.includes("Tots")
              ? "TP"
              : movie.qualificacio_edats.replace(
                  / anys/,
                  ""
                )}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="font-display font-bold text-white text-xl leading-tight mb-1.5 line-clamp-2 drop-shadow-md">
            {movie.titol}
          </h3>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-foreground/10 backdrop-blur-sm text-foreground text-sm font-semibold px-2.5 py-1 rounded-full">
              <Clock className="w-3 h-3" />
              {movie.durada}
            </span>
            {movie.nivell_educatiu[0] && (
              <span className="inline-flex items-center gap-1 bg-foreground/10 backdrop-blur-sm text-foreground text-sm font-semibold px-2.5 py-1 rounded-full">
                <GraduationCap className="w-3 h-3" />
                {movie.nivell_educatiu[0]}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

