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
      <h2 className="text-3xl font-bold tracking-tight text-slate-900">Projects</h2>

      <div className="grid gap-4 md:grid-cols-3">
        {projects.map(project => (
          <article key={project.name} className="rounded-xl border border-slate-200 p-5 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-slate-900">{project.name}</h3>
            <p className="text-sm leading-relaxed text-slate-600">{project.summary}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Projects
