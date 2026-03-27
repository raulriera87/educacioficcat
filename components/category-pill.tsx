"use client"

import React from "react"

import {
  FlaskConical,
  Leaf,
  Calculator,
  Landmark,
  Music,
  Cpu,
  Sprout,
  HeartPulse,
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { Category } from "@/lib/movies-data"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  flask: FlaskConical,
  leaf: Leaf,
  calculator: Calculator,
  landmark: Landmark,
  music: Music,
  cpu: Cpu,
  sprout: Sprout,
  "heart-pulse": HeartPulse,
}

interface CategoryPillProps {
  category: Category
  isActive?: boolean
  onClick?: () => void
}

export function CategoryPill({ category, isActive, onClick }: CategoryPillProps) {
  const Icon = iconMap[category.icon] || FlaskConical

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-4 py-2.5 rounded-full text-base font-bold whitespace-nowrap transition-all duration-200 flex-shrink-0",
        isActive
          ? "bg-primary text-primary-foreground shadow-lg scale-105"
          : "bg-card text-foreground border border-border hover:border-primary/30 hover:bg-muted"
      )}
    >
      <Icon className="w-4 h-4" />
      <span>{category.label}</span>
    </button>
  )
}

