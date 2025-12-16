"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function CtaSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    // Handle email submission
  }

  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Be the first to experience continuous therapy.
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Join our early access program for patients and therapists.
            <br />
            Limited invites — launch in early 2026.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12 text-base"
          />
          <Button type="submit" size="lg" className="h-12 px-8 whitespace-nowrap">
            Join Early Access
          </Button>
        </form>

        <p className="text-sm text-muted-foreground">💌 We respect your privacy. No spam, ever.</p>
      </div>
    </section>
  )
}
