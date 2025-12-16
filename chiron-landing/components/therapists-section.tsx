import { Button } from "@/components/ui/button"

export function TherapistsSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance leading-tight">
              Built for Therapists, Designed for Trust.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Gain emotional insights, progress charts, and session summaries without breaking privacy or empathy. Focus
              on what matters most — helping your clients grow.
            </p>
            <Button size="lg" className="text-base px-8 h-12 shadow-lg">
              👩‍⚕️ Join the Therapist Waitlist
            </Button>
          </div>
          <div>
            <img
              src="/professional-therapist-using-analytics-dashboard-w.jpg"
              alt="Therapist using Chiron"
              className="rounded-lg shadow-xl border border-border"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
