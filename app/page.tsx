import { HeroBanner } from "@/components/hero-banner"
import { CategoriesSection } from "@/components/categories-section"
import { MovieRow } from "@/components/movie-row"
import {
  getFeaturedCurtmetratges,
  curtmetratges,
  getCurtmetratgesByEdat,
} from "@/lib/movies-data"

export default function HomePage() {
  const featured = getFeaturedCurtmetratges()

  const recents = [...curtmetratges]
    .filter((c) => c.any !== null)
    .sort((a, b) => (b.any ?? 0) - (a.any ?? 0))

  const totsElsPublics = getCurtmetratgesByEdat("Tots els publics")
  const menors7 = getCurtmetratgesByEdat("7 anys")
  const menors12 = getCurtmetratgesByEdat("12 anys")
  const menors16 = getCurtmetratgesByEdat("16 anys")

  return (
    <main>
      <HeroBanner movies={featured} />

      <CategoriesSection />

      <MovieRow title="Mes recents" movies={recents} size="large" />

      <MovieRow title="Tots els publics" movies={totsElsPublics} size="medium" />

      <MovieRow title="No recomanada per a menors de 7 anys" movies={menors7} size="medium" />

      <MovieRow title="No recomanada per a menors de 12 anys" movies={menors12} size="medium" />

      <MovieRow title="No recomanada per a menors de 16 anys" movies={menors16} size="medium" />

      <section className="px-4 lg:px-8 py-6">
        <div className="relative rounded-3xl overflow-hidden bg-secondary p-6 sm:p-8">
          <div className="relative z-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-secondary-foreground mb-2 text-balance">
              Aprendre mai va ser tan divertit
            </h2>
            <p className="text-base text-secondary-foreground/80 mb-4 max-w-md leading-relaxed">
              Contingut educatiu segur i enriquidor perque els joves explorin el
              mon a traves del cinema.
            </p>
            <div className="flex gap-3">
              <div className="flex flex-col items-center bg-background/20 backdrop-blur-sm rounded-2xl px-4 py-3">
                <span className="font-display text-3xl font-bold text-secondary-foreground">
                  {curtmetratges.length}
                </span>
                <span className="text-sm text-secondary-foreground/80 font-medium">
                  Curtmetratges
                </span>
              </div>
              <div className="flex flex-col items-center bg-background/20 backdrop-blur-sm rounded-2xl px-4 py-3">
                <span className="font-display text-3xl font-bold text-secondary-foreground">
                  4
                </span>
                <span className="text-sm text-secondary-foreground/80 font-medium">
                  Edats
                </span>
              </div>
              <div className="flex flex-col items-center bg-background/20 backdrop-blur-sm rounded-2xl px-4 py-3">
                <span className="font-display text-3xl font-bold text-secondary-foreground">
                  100%
                </span>
                <span className="text-sm text-secondary-foreground/80 font-medium">
                  Segur
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

