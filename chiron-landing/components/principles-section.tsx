import { Card, CardContent } from "@/components/ui/card"

const principles = [
  {
    icon: "🪷",
    title: "Continuity",
    description: "Healing is a journey, not a 50-minute session.",
  },
  {
    icon: "🔍",
    title: "Transparency",
    description: "Data belongs to the patient; insights belong to both.",
  },
  {
    icon: "❤️",
    title: "Empathy First",
    description: "Technology should feel human, not replace it.",
  },
  {
    icon: "🌱",
    title: "Growth Over Perfection",
    description: "Progress, even in silence, matters.",
  },
  {
    icon: "🤝",
    title: "Augment, Not Replace",
    description: "AI amplifies therapists; it doesn't substitute them.",
  },
]

export function PrinciplesSection() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Our Principles — The Chiron Memento
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardContent className="p-6 space-y-3">
                <div className="text-4xl group-hover:scale-110 transition-transform">{principle.icon}</div>
                <h3 className="text-xl font-semibold">{principle.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
