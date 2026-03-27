import { notFound } from "next/navigation"
import {
  getCurtmetratgeById,
  curtmetratges,
  getCurtmetratgesByGenre,
} from "@/lib/movies-data"
import { MovieDetailContent } from "@/components/movie-detail-content"

interface MoviePageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return curtmetratges.map((c) => ({ id: c.id }))
}

export default async function MoviePage({ params }: MoviePageProps) {
  const { id } = await params
  const movie = getCurtmetratgeById(id)

  if (!movie) {
    notFound()
  }

  const mainGenre = movie.genere[0]?.toLowerCase() || ""
  const genreIdMap: Record<string, string> = {
    drama: "drama",
    comedia: "comedia",
    "comedia negra": "comedia",
    documental: "documental",
    biografia: "documental",
    biopic: "documental",
    "fals documental": "documental",
    "ciencia ficcio": "ciencia-ficcio",
    "ciencia-ficcio": "ciencia-ficcio",
    fantastic: "ciencia-ficcio",
    musical: "musical",
    historic: "historic",
    historia: "historic",
    aventures: "historic",
    suspens: "thriller",
    thriller: "thriller",
    western: "western",
  }
  const genreId = genreIdMap[mainGenre] || "drama"
  const relatedMovies = getCurtmetratgesByGenre(genreId).filter(
    (m) => m.id !== movie.id
  )
  const moreMovies =
    relatedMovies.length < 4
      ? [
          ...relatedMovies,
          ...curtmetratges
            .filter(
              (m) =>
                m.id !== movie.id &&
                !relatedMovies.some((r) => r.id === m.id)
            )
            .slice(0, 4 - relatedMovies.length),
        ]
      : relatedMovies

  return <MovieDetailContent movie={movie} relatedMovies={moreMovies} />
}
