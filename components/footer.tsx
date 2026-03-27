import Link from "next/link"
import { Film, Mail, Heart } from "lucide-react"

const footerLinks = [
  {
    title: "Informacio",
    links: [
      { label: "Política de privacitat", href: "/politica-privacitat" },
      { label: "Política de cookies", href: "/politica-cookies" },
      { label: "Condicions d'ús", href: "/condicions-us" },
      { label: "Qui som", href: "/qui-som" },
      { label: "Ajuda", href: "/ajuda" },
      { label: "Contacte", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-[hsl(233,50%,7%)] text-white pb-24 lg:pb-0">
      <div className="max-w-[1920px] mx-auto px-4 lg:px-8 pt-12 pb-8">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <Link href="/" className="flex items-center gap-2 mb-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary">
              <Film className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-2xl font-bold text-white">
              educacio.fic-cat.cat
            </span>
          </Link>

        </div>

        {/* Links grid */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10">
          {footerLinks[0].links.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className="text-base text-white/50 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <p className="text-sm text-white/40">
              © FIC-CAT. Tots els drets reservats.
            </p>

          </div>
        </div>
      </div>
    </footer>
  )
}

