"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Play,
  Bookmark,
  Share2,
  Clock,
  Calendar,
  GraduationCap,
  MapPin,
  Film,
  FileText,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MovieRow } from "@/components/movie-row"
import { getAgeColor, getNivellColor } from "@/lib/movies-data"
import type { Curtmetratge } from "@/lib/movies-data"
import { cn } from "@/lib/utils"

interface MovieDetailContentProps {
  movie: Curtmetratge
  relatedMovies: Curtmetratge[]
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

export function MovieDetailContent({ movie, relatedMovies }: MovieDetailContentProps) {
  const [isBookmarked, setIsBookmarked] = useState(false)

  const gradient = getGradient(movie.id)

  return (
    <>
      {/* Hero with poster image */}
      <div className="relative h-[360px] sm:h-[440px] lg:h-[520px]">
        {movie.poster ? (
          <Image
            src={movie.poster}
            alt={movie.titol}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className={cn("absolute inset-0 bg-gradient-to-br", gradient)} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 z-10">
          <Link
            href="/"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-colors text-foreground"
            aria-label="Tornar"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-2">
            <button
              className="flex items-center justify-center w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-colors text-foreground"
              aria-label="Compartir"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Play button overlay */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
          <button
            className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/90 hover:bg-primary transition-all hover:scale-110 shadow-2xl"
            aria-label="Reproduir"
          >
            <Play className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground fill-primary-foreground ml-1" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="relative -mt-16 z-10">
        <div className="px-4 lg:px-8 max-w-3xl mx-auto">
          {/* Title area */}
          <div className="mb-4">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 text-balance">
              {movie.titol}
            </h1>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className={cn("text-sm font-bold px-3 py-1.5 rounded-full", getAgeColor(movie.qualificacio_edats))}>
                {movie.qualificacio_edats}
              </span>

              {movie.nivell_educatiu.map((nivell) => (
                <span key={nivell} className={cn("inline-flex items-center gap-1 text-sm font-semibold px-3 py-1.5 rounded-full", getNivellColor(nivell))}>
                  <GraduationCap className="w-3.5 h-3.5" />
                  {nivell}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 mb-3">
              <span className="inline-flex items-center gap-1 bg-muted text-muted-foreground text-sm font-semibold px-3 py-1.5 rounded-full">
                <Clock className="w-3.5 h-3.5" />
                {movie.durada}
              </span>
              {movie.any && (
                <span className="inline-flex items-center gap-1 bg-muted text-muted-foreground text-sm font-semibold px-3 py-1.5 rounded-full">
                  <Calendar className="w-3.5 h-3.5" />
                  {movie.any}
                </span>
              )}
              {movie.genere.map((g) => (
                <Badge key={g} variant="outline" className="rounded-full font-bold text-sm">
                  {g}
                </Badge>
              ))}
            </div>
          </div>

          {/* Direccio i Origen */}
          <div className="flex flex-wrap items-center gap-4 mb-5 text-base text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Film className="w-4 h-4" />
              <span className="font-semibold">{movie.direccio.join(", ")}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>{movie.origen.join(", ")}</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 mb-6">
            <Button className="flex-1 rounded-full py-6 font-bold text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
              <Play className="w-5 h-5 mr-2 fill-current" />
              Veure ara
            </Button>
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`flex items-center justify-center w-14 h-14 rounded-full border-2 transition-all ${
                isBookmarked
                  ? "bg-primary/10 border-primary text-primary"
                  : "border-border text-muted-foreground hover:border-primary/30"
              }`}
              aria-label={isBookmarked ? "Treure de desats" : "Desar"}
            >
              <Bookmark className={`w-5 h-5 ${isBookmarked ? "fill-current" : ""}`} />
            </button>
          </div>

          {/* Sinopsi */}
          <div className="mb-6">
            <h2 className="font-display text-lg font-bold text-foreground mb-2">Sinopsi</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {movie.sinopsi}
            </p>
          </div>

          {/* Temes */}
          <div className="mb-6">
            <h2 className="font-display text-lg font-bold text-foreground mb-2">Temes</h2>
            <div className="flex flex-wrap gap-2">
              {movie.temes.map((tema) => (
                <span
                  key={tema}
                  className="bg-muted text-muted-foreground text-sm font-semibold px-3 py-1.5 rounded-full"
                >
                  {tema}
                </span>
              ))}
            </div>
          </div>

          {/* Conceptes clau */}
          <div className="mb-6">
            <h2 className="font-display text-lg font-bold text-foreground mb-2">Conceptes clau</h2>
            <div className="flex flex-wrap gap-2">
              {movie.conceptes_clau.map((concepte) => (
                <span
                  key={concepte}
                  className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1.5 rounded-full"
                >
                  {concepte}
                </span>
              ))}
            </div>
          </div>

          {/* Contextualitzacio */}
          {movie.contextualitzacio.length > 0 && (
            <div className="mb-6">
              <h2 className="font-display text-lg font-bold text-foreground mb-2">Contextualitzacio</h2>
              <ul className="list-disc list-inside text-base text-muted-foreground leading-relaxed">
                {movie.contextualitzacio.map((ctx) => (
                  <li key={ctx}>{ctx}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Treball previ */}
          {movie.treball_previ.length > 0 && (
            <div className="mb-6">
              <h2 className="font-display text-lg font-bold text-foreground mb-2">Treball previ</h2>
              <ul className="list-disc list-inside text-base text-muted-foreground leading-relaxed">
                {movie.treball_previ.map((tp) => (
                  <li key={tp}>{tp}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Documents */}
          {movie.documents.length > 0 && (
            <div className="mb-6">
              <h2 className="font-display text-lg font-bold text-foreground mb-2">Documents</h2>
              <div className="flex flex-col gap-2">
                {movie.documents.map((doc, i) => (
                  <a
                    key={i}
                    href={doc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-secondary/50 hover:bg-secondary text-secondary-foreground text-base font-semibold px-4 py-3 rounded-xl transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    Guia didactica
                    <ExternalLink className="w-3.5 h-3.5 ml-auto" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Contingut educatiu verified badge */}
          <div className="bg-secondary/20 border border-secondary/30 rounded-2xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-secondary text-secondary-foreground flex-shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-foreground mb-1">Contingut educatiu verificat</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {'Aquest curtmetratge ha estat seleccionat pel seu valor educatiu per a alumnat de ' + movie.nivell_educatiu.join(", ") + '.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related movies */}
        {relatedMovies.length > 0 && (
          <MovieRow title="Et pot interessar" movies={relatedMovies} size="medium" />
        )}
      </div>
    </>
  )
}

