"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ToggleMode() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light")
      }}
      className="rounded-full w-12 h-12 bg-green-900 dark:bg-green-100 hover:opacity-85"
    >
      {theme === "light" ? (
        <>
          <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 border-gray-300" />
        </>
      ) : (
        <>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 border-gray-900 dark:text-green-950" />
        </>
      )}
    </Button>
  )
}