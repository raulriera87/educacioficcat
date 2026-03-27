import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PoliticaCookies() {
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
          Política de cookies
        </h1>
        <p className="text-xl text-muted-foreground mb-12">
          educació.fic-cat.cat
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          {/* Introducció */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Introducció</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Aquesta política de cookies explica com utilitzem les cookies i tecnologies similars en la nostra plataforma educació.fic-cat.cat. Les cookies són petits fitxers de text que s'emmagatzemen al vostre navegador quan visiteu un lloc web.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              L'Associació FIC-CAT utilitza cookies per millorar l'experiència dels usuaris, garantir el funcionament correcte de la plataforma i obtenir informació estadística anònima sobre l'ús del lloc web. Sempre respectem la vostra privacitat i no utilitzem les cookies per recopilar dades personals identificables.
            </p>
          </section>

          {/* Tipus de cookies */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Tipus de cookies que utilitzem</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Utilitzem els següents tipus de cookies a la nostra plataforma:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border rounded-lg">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Tipus de cookie</th>
                    <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Finalitat</th>
                    <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Durada</th>
                    <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Proveïdor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Cookies tècniques</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Permeten la navegació i l'ús de les funcionalitats bàsiques de la plataforma</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Sessió</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">educació.fic-cat.cat</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="border border-border px-4 py-3 text-muted-foreground">Cookies d'anàlisi</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Recopilen informació estadística anònima sobre l'ús de la plataforma</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">13 mesos</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Google Analytics (anònim)</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Cookies de preferències</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Recorden les vostres preferències d'idioma i configuració</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">1 any</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">educació.fic-cat.cat</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Gestió de cookies */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Gestió de les cookies</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Podeu gestionar i desactivar les cookies en qualsevol moment mitjançant la configuració del vostre navegador. Tingueu en compte que la desactivació de certes cookies pot afectar el funcionament de la plataforma.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              A continuació us expliquem com gestionar les cookies als navegadors més comuns:
            </p>
          </section>

          {/* Configuració per navegador */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Configuració per navegador</h2>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Google Chrome</h3>
                <ol className="list-decimal list-inside space-y-2 text-lg text-muted-foreground ml-4">
                  <li>Feu clic al menú (tres punts) a la part superior dreta</li>
                  <li>Seleccioneu "Configuració"</li>
                  <li>Desplaceu-vos cap avall i feu clic a "Privacitat i seguretat"</li>
                  <li>Feu clic a "Cookies i altres dades dels llocs"</li>
                  <li>Configureu les opcions segons les vostres preferències</li>
                </ol>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Mozilla Firefox</h3>
                <ol className="list-decimal list-inside space-y-2 text-lg text-muted-foreground ml-4">
                  <li>Feu clic al menú (tres línies) a la part superior dreta</li>
                  <li>Seleccioneu "Preferències"</li>
                  <li>Feu clic a "Privacitat i seguretat" al panell esquerre</li>
                  <li>A la secció "Cookies i dades dels llocs", configureu les opcions</li>
                </ol>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Safari</h3>
                <ol className="list-decimal list-inside space-y-2 text-lg text-muted-foreground ml-4">
                  <li>Obriu Safari i feu clic a "Safari" al menú superior</li>
                  <li>Seleccioneu "Preferències"</li>
                  <li>Feu clic a la pestanya "Privacitat"</li>
                  <li>Configureu les opcions de cookies segons les vostres preferències</li>
                </ol>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Microsoft Edge</h3>
                <ol className="list-decimal list-inside space-y-2 text-lg text-muted-foreground ml-4">
                  <li>Feu clic al menú (tres punts) a la part superior dreta</li>
                  <li>Seleccioneu "Configuració"</li>
                  <li>Al panell esquerre, feu clic a "Cookies i permisos del lloc"</li>
                  <li>Feu clic a "Cookies i dades emmagatzemades"</li>
                  <li>Configureu les opcions segons les vostres preferències</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Consentiment */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Consentiment</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              En continuar utilitzant la nostra plataforma, accepteu l'ús de cookies segons el que s'estableix en aquesta política. Podeu retirar el vostre consentiment en qualsevol moment modificant la configuració del vostre navegador.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Per a més informació sobre com tractem les vostres dades personals, consulteu la nostra <Link href="/politica-privacitat" className="text-primary hover:text-primary/80 underline">Política de privacitat</Link>.
            </p>
          </section>

          {/* Contacte */}
          <section className="bg-primary/10 border border-primary/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Dubtes sobre cookies?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Si teniu qualsevol dubte sobre l'ús de cookies a la nostra plataforma, no dubteu a contactar-nos:
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
