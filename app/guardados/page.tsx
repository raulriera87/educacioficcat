import { Bookmark } from "lucide-react"

export default function SavedPage() {
  return (
    <main className="px-4 lg:px-8 py-8">
      <h1 className="font-display text-3xl font-bold text-foreground mb-6">
        Desats
      </h1>
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
          <Bookmark className="w-9 h-9 text-muted-foreground" />
        </div>
        <h2 className="font-display text-xl font-bold text-foreground mb-2">
          Encara no tens desats
        </h2>
        <p className="text-base text-muted-foreground max-w-xs leading-relaxed">
          Desa els teus curtmetratges preferits per veure-los quan vulguis.
          Nomes toca la icona de desar en qualsevol curtmetratge.
        </p>
      </div>
    </main>
  )
}

