import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function QuiSom() {
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
          Qui som
        </h1>
        <p className="text-xl text-muted-foreground mb-12">
          educació.fic-cat.cat
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          {/* Presentació */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Presentació</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              L'Associació FIC-CAT és una entitat sense ànim de lucre que té com a objectiu fomentar la creació, difusió i promoció de continguts audiovisuals en llengua catalana, especialment entre infants i joves. En el marc d'aquesta missió, gestionem la plataforma educació.fic-cat.cat, un espai digital amb continguts educatius i audiovisuals en català.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              La nostra associació neix de la convicció que el cinema i l'audiovisual són eines poderoses per a l'educació, el creixement personal i la transmissió de valors culturals. Treballem per oferir continguts de qualitat que contribueixin al desenvolupament integral dels infants i joves catalans.
            </p>
          </section>

          {/* Missió i valors */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Missió i valors</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              La missió de l'Associació FIC-CAT és promoure l'ús de l'audiovisual com a eina educativa i cultural, facilitant l'accés a continguts de qualitat en llengua catalana per a infants i joves.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Els nostres valors fonamentals són:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground ml-4 mt-4">
              <li><strong>Qualitat educativa:</strong> Tots els continguts són seleccionats i supervisats per professionals de l'educació i l'audiovisual.</li>
              <li><strong>Accesibilitat:</strong> Treballem perquè els continguts siguin accessibles a tots els infants i joves, independentment del seu origen socioeconòmic.</li>
              <li><strong>Seguretat:</strong> Garantim un entorn digital segur i protegit per als més petits.</li>
              <li><strong>Identitat cultural:</strong> Promovem la llengua i cultura catalanes a través dels continguts audiovisuals.</li>
              <li><strong>Innovació pedagògica:</strong> Busquem constantment noves formes d'utilitzar l'audiovisual com a eina d'aprenentatge.</li>
            </ul>
          </section>

          {/* Història */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Història</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              L'Associació FIC-CAT va ser fundada l'any 2020 amb l'objectiu de donar resposta a la necessitat de continguts audiovisuals educatius en català. Des dels seus inicis, ha treballat en col·laboració amb centres educatius, professionals del cinema i entitats culturals per crear una plataforma que fos alhora educativa i entretinguda.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Al llarg d'aquests anys, hem crescut gràcies al suport de famílies, mestres i institucions que creuen en la importància de l'educació audiovisual. La nostra plataforma ha esdevingut una referència en l'àmbit educatiu català, amb milers d'usuaris que utilitzen diàriament els nostres recursos.
            </p>
          </section>

          {/* Dades legals */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Dades legals</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <dl className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <dt className="font-semibold text-foreground">Denominació:</dt>
                  <dd className="text-muted-foreground">Associació FIC-CAT</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <dt className="font-semibold text-foreground">NIF:</dt>
                  <dd className="text-muted-foreground">G-12345678</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <dt className="font-semibold text-foreground">Adreça:</dt>
                  <dd className="text-muted-foreground">Carrer de la Cultura, 15, 08001 Barcelona</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <dt className="font-semibold text-foreground">Registre:</dt>
                  <dd className="text-muted-foreground">Registre d'Associacions de la Generalitat de Catalunya, núm. 1234</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <dt className="font-semibold text-foreground">Data de constitució:</dt>
                  <dd className="text-muted-foreground">15 de març de 2020</dd>
                </div>
              </dl>
            </div>
          </section>

          {/* Contacte */}
          <section className="bg-primary/10 border border-primary/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Contacte</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Si voleu més informació sobre la nostra associació o col·laborar amb nosaltres, no dubteu a posar-vos en contacte:
            </p>
            <div className="flex items-center gap-3">
              <span className="text-lg text-primary font-semibold">Correu electrònic:</span>
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
