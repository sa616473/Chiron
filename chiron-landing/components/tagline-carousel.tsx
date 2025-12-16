"use client"

import { useEffect, useState } from "react"

const taglines = ["Empathy meets intelligence.", "AI between you and better days.", "Healing, extended."]

export function TaglineCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % taglines.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative h-20 flex items-center justify-center">
          {taglines.map((tagline, index) => (
            <p
              key={index}
              className={`absolute text-2xl md:text-3xl font-medium text-primary transition-all duration-700 ${
                index === currentIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              "{tagline}"
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
