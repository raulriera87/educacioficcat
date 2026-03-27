import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PoliticaPrivacitat() {
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
          Política de privacitat
        </h1>
        <p className="text-xl text-muted-foreground mb-12">
          educació.fic-cat.cat
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          {/* Introducció */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Introducció</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              L'Associació FIC-CAT és una entitat sense ànim de lucre que té com a objectiu fomentar la creació, difusió i promoció de continguts audiovisuals en llengua catalana, especialment entre infants i joves. En el marc d'aquesta missió, gestionem la plataforma educació.fic-cat.cat, un espai digital amb continguts educatius i audiovisuals en català.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              El nostre compromís amb la privacitat i la protecció de dades personals dels usuaris és màxim, especialment atesa la naturalesa educativa de la plataforma i el seu enfocament en públic infantil i juvenil.
            </p>
          </section>

          {/* Accés als continguts */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Accés als continguts</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              La plataforma educació.fic-cat.cat permet l'accés als seus continguts audiovisuals des de diferents dispositius, com ordinadors, tauletes o telèfons mòbils.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Amb caràcter general, es pot accedir a una part dels continguts sense necessitat de registre. Tot i això, per accedir a determinades funcionalitats educatives, recursos personalitzats o activitats participatives, pot ser necessari crear un compte d'usuari.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              En el cas de menors d'edat, el registre podrà requerir l'autorització dels seus pares, mares o tutors legals, d'acord amb la normativa vigent en matèria de protecció de dades.
            </p>
          </section>

          {/* Dades que recollim */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Dades que recollim</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tu decideixes en tot moment quines dades personals ens vols facilitar. En cas de registre, les dades mínimes que et podem sol·licitar són:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mt-4 ml-4">
              <li>Nom i cognoms</li>
              <li>Correu electrònic</li>
              <li>Contrasenya</li>
            </ul>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              En el cas de plataformes educatives o activitats dirigides a centres escolars, es podran recollir altres dades estrictament necessàries per a la gestió pedagògica, sempre amb les garanties adequades.
            </p>
          </section>

          {/* Recollida automàtica de dades */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Recollida automàtica de dades</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              També recollim determinades dades de manera automàtica mitjançant cookies i tecnologies similars.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Aquestes dades ens permeten:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mt-4 ml-4">
              <li>Entendre quins continguts són més consultats</li>
              <li>Millorar l'experiència educativa i d'usuari</li>
              <li>Adaptar els continguts als interessos dels usuaris</li>
              <li>Garantir el correcte funcionament de la plataforma</li>
            </ul>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Aquestes dades, en general, no permeten identificar directament una persona concreta, especialment si no s'ha iniciat sessió.
            </p>
          </section>

          {/* Personalització dels continguts */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Personalització dels continguts</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              En cas que l'usuari estigui registrat i hagi iniciat sessió, podrem utilitzar la informació de navegació per:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mt-4 ml-4">
              <li>Recomanar continguts educatius i audiovisuals adaptats als seus interessos</li>
              <li>Facilitar la continuïtat en l'aprenentatge (per exemple, reprendre continguts visualitzats)</li>
              <li>Millorar l'experiència global dins la plataforma</li>
            </ul>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              En cap cas es prendran decisions automatitzades amb efectes significatius per a l'usuari.
            </p>
          </section>

          {/* Protecció de dades dels menors */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Protecció de dades dels menors</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              La protecció de les dades dels infants i joves és una prioritat per a l'Associació FIC-CAT.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Per aquest motiu:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mt-4 ml-4">
              <li>Es limiten al màxim les dades personals que es poden recollir</li>
              <li>Es garanteix un ús responsable i segur de la informació</li>
              <li>Es poden establir mecanismes de control parental o autorització prèvia</li>
              <li>No es realitzen perfils comercials ni publicitat dirigida basada en dades personals</li>
            </ul>
          </section>

          {/* Finalitat del tractament */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Finalitat del tractament</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Les dades personals recollides s'utilitzen exclusivament per a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mt-4 ml-4">
              <li>Gestionar l'accés i ús de la plataforma</li>
              <li>Oferir continguts educatius audiovisuals en català</li>
              <li>Millorar els serveis i l'experiència d'usuari</li>
              <li>Gestionar activitats, concursos o recursos educatius (si escau)</li>
            </ul>
          </section>

          {/* Drets dels usuaris */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Drets dels usuaris</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              En qualsevol moment, pots exercir els teus drets de:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground mt-4 ml-4">
              <li>Accés</li>
              <li>Rectificació</li>
              <li>Supressió</li>
              <li>Oposició</li>
              <li>Limitació del tractament</li>
            </ul>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Per fer-ho, pots contactar amb l'Associació FIC-CAT a través dels canals oficials que es facilitaran a la plataforma.
            </p>
          </section>

          {/* Seguretat de la informació */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Seguretat de la informació</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              L'Associació FIC-CAT aplica les mesures tècniques i organitzatives necessàries per garantir la seguretat de les dades personals i evitar-ne la pèrdua, l'ús indegut o l'accés no autoritzat.
            </p>
          </section>

          {/* Modificacions de la política */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Modificacions de la política</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Aquesta política de privacitat es pot actualitzar per adaptar-se a canvis normatius o millores del servei. En cas de modificacions rellevants, s'informarà adequadament als usuaris.
            </p>
          </section>

          {/* Conclusió */}
          <section className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-12">
            <p className="text-lg text-foreground leading-relaxed">
              Aquesta política reflecteix el compromís de l'Associació FIC-CAT amb una educació digital segura, responsable i respectuosa amb la privacitat, especialment pensada per a infants i joves.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
