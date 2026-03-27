import React from "react"
import type { Metadata, Viewport } from "next"
import { Nunito, Baloo_2 } from "next/font/google"
import { Header } from "@/components/header"
import { BottomNav } from "@/components/bottom-nav"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
})

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
  display: "swap",
})

export const metadata: Metadata = {
  title: "educacio.fic-cat.cat - Curtmetratges Educatius",
  description:
    "Plataforma de curtmetratges educatius per a joves. Explora drama, documental, comedia i mes amb contingut segur i enriquidor.",
}

export const viewport: Viewport = {
  themeColor: "#E8740C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ca" suppressHydrationWarning>
      <body
        className={`${nunito.variable} ${baloo.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="planeta-curt-theme"
        >
          <Header />
          <div className="min-h-screen pb-20 lg:pb-0">{children}</div>
          <Footer />
          <BottomNav />
        </ThemeProvider>
      </body>
    </html>
  )
}

