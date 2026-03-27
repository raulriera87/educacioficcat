import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CondicionsUs() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header with back button */}
      <div className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 py-4">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Tornar al inici
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-2">
          Condicions d'ús
        </h1>
        <p className="text-xl text-muted-foreground mb-12">
          educació.fic-cat.cat
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptació de les condicions</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              L'accés i ús de la plataforma educació.fic-cat.cat implica l'acceptació íntegra d'aquestes condicions d'ús i de qualsevol altra normativa que, en el seu cas, sigui d'aplicació. Si no esteu d'acord amb aquestes condicions, us preguem que no utilitzeu els serveis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Objecte dels serveis</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              La plataforma ofereix accés a continguts audiovisuals educatius, recursos didàctics, guies i materials complementaris destinats a infants, joves i docents. L'associació es reserva el dret de modificar, ampliar o reduir el contingut i funcionalitats en qualsevol moment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Registre i compte d'usuari</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Per accedir a determinades funcionalitats, pot ser necessari registrar-se i disposar d'un compte d'usuari. L'usuari és responsable de mantenir la confidencialitat de les seves dades d'accés i de notificar qualsevol ús no autoritzat.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              En el cas de menors d'edat, caldrà l'autorització del pare, mare o tutor legal per crear el compte, d'acord amb la legislació vigent de protecció de dades.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Contingut i drets d'autor</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tots els materials disponibles a la plataforma estan protegits per drets d'autor i altres drets de propietat intel·lectual. L'usuari té permès utilitzar els continguts per a finalitats educatives privades i no comercials, sempre que es respectin les condicions de llicència i es citi la font.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Queda prohibit la reproducció, distribució, comunicació pública o transformació del contingut sense autorització expressa de l'Associació FIC-CAT o dels titulars corresponents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Responsabilitat</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              L'Associació FIC-CAT no es fa responsable dels possibles errors, omissions o continguts d'enllaços a tercers que puguin aparèixer en la plataforma. Tampoc no respon de possibles danys derivats de l'ús indegut de la informació disponible.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              L'ús dels continguts és exclusivament responsabilitat de l'usuari.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Polítiques de privacitat i cookies</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              L'ús de la plataforma es regeix també per la Política de privacitat i la Política de cookies que es detallen als enllaços corresponents.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Consulteu-los aquí:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground ml-4">
              <li><Link href="/politica-privacitat" className="text-primary hover:text-primary/80 underline">Política de privacitat</Link></li>
              <li><Link href="/politica-cookies" className="text-primary hover:text-primary/80 underline">Política de cookies</Link></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Modificacions</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              L'Associació FIC-CAT es reserva el dret de modificar aquesta política d'ús en qualsevol moment. Les modificacions es faran efectives amb la publicació a la plataforma.
            </p>
          </section>

          <section className="bg-primary/10 border border-primary/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">8. Contacte</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Per consultes o incidències respecte a les condicions d'ús, podeu contactar-nos en:
            </p>
            <p className="text-lg text-primary font-semibold">info@fic-cat.cat</p>
          </section>
        </div>
      </div>
    </main>
  )
}