export function MissionSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Our Mission</h2>
          <div className="max-w-4xl mx-auto space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p className="text-pretty">
              At Chiron, we believe therapy shouldn't end when the session does. Our mission is to build an AI-powered
              companion that supports patients between sessions — through journaling, voice reflection, and emotional
              analytics — while empowering therapists with real-time insights into their patients' mental and emotional
              well-being.
            </p>
            <p className="text-pretty">
              By uniting <strong className="text-foreground">AI + Human empathy</strong>, we're redefining the therapy
              experience from reactive to continuous care.
            </p>
          </div>
        </div>

        {/* Split layout mockup */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">For Patients</h3>
            <img
              src="/mobile-journaling-app-interface-with-voice-notes.jpg"
              alt="Patient journaling interface"
              className="rounded-lg shadow-lg border border-border"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-secondary">For Therapists</h3>
            <img
              src="/therapist-analytics-dashboard-with-emotional-insig.jpg"
              alt="Therapist analytics dashboard"
              className="rounded-lg shadow-lg border border-border"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
