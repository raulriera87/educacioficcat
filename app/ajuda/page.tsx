import Link from "next/link"
import { ArrowLeft, Mail } from "lucide-react"

export default function Ajuda() {
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
        <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Centre d'Ajuda
        </h1>
        <p className="text-xl text-muted-foreground mb-12">
          Preguntes Freqüents
        </p>

        <div className="space-y-8">
          <section>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Benvinguts a l'espai d'ajuda de educacio.fic-cat.cat. Aquí trobaràs respostes als dubtes més comuns per treure el màxim profit de la nostra plataforma educativa.
            </p>
          </section>

          {/* Accés i Registre */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">Accés i Registre</h2>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Cal registrar-se per veure els vídeos?
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Dependrà del contingut. Alguns vídeos són d'accés lliure, mentre que d'altres, per qüestions de drets pedagògics o autoria, poden requerir un codi d'accés proporcionat pel vostre centre educatiu o per l'Associació FIC-CAT.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  He oblidat la meva contrasenya, què faig?
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Si tens un compte d'usuari, pots restablir la contrasenya fent clic a "He oblidat la contrasenya" a la pantalla d'inici de sessió. Rebràs un correu electrònic amb les instruccions per crear-ne una de nova.
                </p>
              </div>
            </div>
          </section>

          {/* Reproducció de Continguts */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">Reproducció de Continguts</h2>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  No puc veure els vídeos, què pot estar passant?
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-3">
                  Sol ser per una d'aquestes tres causes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground ml-4">
                  <li><strong>Connexió a internet:</strong> Comprova que la teva connexió sigui estable.</li>
                  <li><strong>Navegador desactualitzat:</strong> Per a una experiència òptima, et recomanem utilitzar les últimes versions de Chrome, Firefox, Safari o Edge.</li>
                  <li><strong>Bloquejadors d'anuncis:</strong> Alguns ad-blockers poden interferir amb el nostre reproductor educatiu. Prova de desactivar-los per a aquest lloc web.</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Puc descarregar els vídeos?
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Per motius de propietat intel·lectual, els vídeos només es poden visualitzar en línia a través de la nostra plataforma. No obstant això, molts dels materials didàctics (PDFs, fitxes d'activitats) sí que es poden descarregar i imprimir.
                </p>
              </div>
            </div>
          </section>

          {/* Seguretat i Privadesa */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">Seguretat i Privadesa</h2>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  És segur que el meu fill/a navegui sol per la web?
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Sí. Tots els continguts de educacio.fic-cat.cat han estat supervisats i curats per l'equip educatiu de l'Associació FIC-CAT. No hi ha publicitat externa ni enllaços a continguts no aptes per a menors.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Com protegiu les dades dels menors?
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  No recollim dades personals identificables dels infants. Les úniques dades que analitzem són estadístiques anònimes de visualització per saber quins continguts agraden més i millorar la nostra oferta educativa.
                </p>
              </div>
            </div>
          </section>

          {/* Per a Docents i Escoles */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">Per a Docents i Escoles</h2>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Podem fer servir els vídeos a l'aula?
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I tant! Aquesta plataforma està pensada precisament per ser una eina de suport a la docència. Us animem a projectar els vídeos a classe i a utilitzar les guies didàctiques adjuntes.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Com puc proposar contingut o col·laborar amb el FIC-CAT?
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Estem oberts a noves propostes pedagògiques. Pots posar-te en contacte amb nosaltres a través del formulari de contacte o enviant un correu a la nostra adreça oficial.
                </p>
              </div>
            </div>
          </section>

          {/* Estat Dubtes */}
          <section className="bg-primary/10 border border-primary/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Encara tens dubtes?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Si no has trobat la resposta que buscaves, estarem encantats d'ajudar-te:
            </p>
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-primary" />
              <a href="mailto:info@fic-cat.cat" className="text-lg text-primary hover:text-primary/80 font-semibold underline">
                info@fic-cat.cat
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}