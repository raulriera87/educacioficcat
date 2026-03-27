import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Settings,
  Shield,
  HelpCircle,
  LogOut,
  ChevronRight,
  Star,
} from "lucide-react"

const menuItems = [
  {
    icon: Settings,
    label: "Configuracio",
    description: "Idioma, qualitat de video",
  },
  {
    icon: Shield,
    label: "Control parental",
    description: "Limits d'edat i temps",
  },
  {
    icon: Star,
    label: "Subscripcio",
    description: "Pla familiar actiu",
  },
  {
    icon: HelpCircle,
    label: "Ajuda",
    description: "Centre de suport",
  },
]

export default function ProfilePage() {
  return (
    <main className="px-4 lg:px-8 py-8 max-w-lg mx-auto">
      {/* Profile header */}
      <div className="flex flex-col items-center mb-8">
        <Avatar className="w-20 h-20 border-4 border-primary mb-3">
          <AvatarFallback className="bg-accent text-accent-foreground font-bold text-3xl font-display">
            ML
          </AvatarFallback>
        </Avatar>
        <h1 className="font-display text-2xl font-bold text-foreground">
          Maria Luna
        </h1>
        <p className="text-base text-muted-foreground">Perfil educatiu</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="flex flex-col items-center bg-card border border-border rounded-2xl p-4">
          <span className="font-display text-3xl font-bold text-primary">
            12
          </span>
          <span className="text-sm text-muted-foreground font-medium">
            Vistos
          </span>
        </div>
        <div className="flex flex-col items-center bg-card border border-border rounded-2xl p-4">
          <span className="font-display text-3xl font-bold text-secondary">
            5
          </span>
          <span className="text-sm text-muted-foreground font-medium">
            Desats
          </span>
        </div>
        <div className="flex flex-col items-center bg-card border border-border rounded-2xl p-4">
          <span className="font-display text-3xl font-bold text-accent">
            3h
          </span>
          <span className="text-sm text-muted-foreground font-medium">
            Aquesta setmana
          </span>
        </div>
      </div>

      {/* Menu items */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden mb-6">
        {menuItems.map((item, index) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-4 py-4 hover:bg-muted transition-colors text-left ${
              index < menuItems.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-muted flex-shrink-0">
              <item.icon className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base font-bold text-foreground">{item.label}</p>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          </button>
        ))}
      </div>

      <button className="w-full flex items-center justify-center gap-2 py-3 text-base font-bold text-destructive hover:bg-destructive/10 rounded-2xl transition-colors">
        <LogOut className="w-4 h-4" />
        Tancar sessio
      </button>
    </main>
  )
}

