import projects from "../data/projects.json"

const revealDirections = ["left", "up", "right"]

function Projects() {
  return (
    <div className="space-y-10">
      <header data-reveal="up" className="space-y-4" style={{ "--reveal-delay": "20ms" }}>
        <h2 className="text-3xl font-bold tracking-tight text-slate-200">Projects</h2>
        <p className="max-w-3xl text-base leading-relaxed text-slate-400">
          Practical systems and digital products built with a clean engineering approach.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.id}
            data-reveal={revealDirections[index % revealDirections.length]}
            style={{ "--reveal-delay": `${60 + index * 70}ms` }}
            className="project-flip-card h-[30rem] rounded-2xl border border-slate-700/40 bg-slate-900/60 backdrop-blur-xl shadow-lg shadow-black/35 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/80 hover:shadow-orange-600/10 focus-visible:shadow-orange-600/30"
            tabIndex={0}
            aria-label={`${project.name} project card`}
          >
            <div className="project-flip-card-inner">
              <div className="project-flip-face project-flip-face-front p-5">
                <div className="relative overflow-hidden rounded-xl border border-slate-700/50">
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    loading="lazy"
                    className="h-52 w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent" />
                </div>

                <div className="mt-5 space-y-2">
                  <h3 className="text-lg font-semibold text-slate-200">{project.name}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{project.abstract}</p>
                </div>
              </div>

              <div className="project-flip-face project-flip-face-back p-6">
                <div className="flex h-full flex-col justify-between">
                  <div className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                      Full Overview
                    </p>
                    <h3 className="text-xl font-semibold text-slate-200">{project.name}</h3>
                    <p className="text-sm leading-relaxed text-slate-400">{project.description}</p>
                  </div>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-orange-700 px-4 py-3 text-sm font-semibold text-slate-100 shadow-md shadow-orange-700/20 transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/70"
                  >
                    View Live Project
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Projects
