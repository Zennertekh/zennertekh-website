const services = [
  "Landing page and corporate website development",
  "UI refactoring and component architecture",
  "Performance optimization and technical cleanup",
]

function Services() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight text-slate-200">Services</h2>

      <div className="grid gap-4 md:grid-cols-3">
        {services.map(service => (
          <article
            key={service}
            className="rounded-2xl border border-slate-700/40 bg-slate-900/60 p-6 backdrop-blur-sm shadow-lg shadow-black/30 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/80 hover:shadow-orange-600/10"
          >
            <h3 className="mb-3 text-lg font-semibold text-slate-200">Service</h3>
            <p className="text-sm leading-relaxed text-slate-400">{service}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Services
