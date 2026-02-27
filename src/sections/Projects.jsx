const projects = [
  {
    name: "Business Landing Revamp",
    summary: "Redesigned a low-conversion landing page into a mobile-first experience.",
  },
  {
    name: "Portfolio Platform",
    summary: "Built a modular SPA with reusable sections for faster content updates.",
  },
  {
    name: "Admin Dashboard UI",
    summary: "Delivered a clean component-driven interface with better information hierarchy.",
  },
]

function Projects() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight text-slate-200">Projects</h2>

      <div className="grid gap-4 md:grid-cols-3">
        {projects.map(project => (
          <article
            key={project.name}
            className="rounded-2xl border border-slate-700/40 bg-slate-900/60 p-6 backdrop-blur-sm shadow-lg shadow-black/30 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/80 hover:shadow-orange-600/10"
          >
            <h3 className="mb-2 text-lg font-semibold text-slate-200">{project.name}</h3>
            <p className="text-sm leading-relaxed text-slate-400">{project.summary}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Projects
