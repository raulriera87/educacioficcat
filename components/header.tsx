"use client"

import Link from "next/link"
import { Search, Moon, Sun, Bookmark, User } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between px-4 py-3 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary">
              <span className="text-primary-foreground font-bold text-xl font-display">E</span>
            </div>
            <span className="font-display text-xl font-bold text-foreground hidden sm:block">
              educacio.fic-cat.cat
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/buscar"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5 text-muted-foreground" />
            </Link>

            <button
              className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Canviar tema"
              disabled
            >
              <Moon className="w-5 h-5 text-muted-foreground" />
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="w-9 h-9 border-2 border-primary cursor-pointer hidden lg:block">
                  <AvatarFallback className="bg-accent text-accent-foreground font-bold text-base font-display">
                    ML
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/guardados" className="flex items-center gap-2">
                    <Bookmark className="w-4 h-4" />
                    Desats
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/perfil" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Perfil
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border" suppressHydrationWarning>
      <div className="flex items-center justify-between px-4 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary">
            <span className="text-primary-foreground font-bold text-xl font-display">P</span>
          </div>
          <span className="font-display text-2xl font-bold text-foreground hidden sm:block">
            educacio.fic-cat.cat
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/buscar"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            aria-label="Buscar"
          >
            <Search className="w-5 h-5 text-muted-foreground" />
          </Link>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            aria-label="Canviar tema"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-muted-foreground" />
            ) : (
              <Moon className="w-5 h-5 text-muted-foreground" />
            )}
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="w-9 h-9 border-2 border-primary cursor-pointer hidden lg:block">
                <AvatarFallback className="bg-accent text-accent-foreground font-bold text-base font-display">
                  ML
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/guardados" className="flex items-center gap-2">
                  <Bookmark className="w-4 h-4" />
                  Desats
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/perfil" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Perfil
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

