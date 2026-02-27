const services = [
  "Landing page and corporate website development",
  "UI refactoring and component architecture",
  "Performance optimization and technical cleanup",
]

function Services() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900">Services</h2>

      <div className="grid gap-4 md:grid-cols-3">
        {services.map(service => (
          <article key={service} className="rounded-xl border border-slate-200 p-5 shadow-sm">
            <h3 className="mb-3 text-lg font-semibold text-slate-900">Service</h3>
            <p className="text-sm leading-relaxed text-slate-600">{service}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Services
