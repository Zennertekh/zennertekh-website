const services = [
  {
    title: "Scalable Web Application Development",
    description:
      "We design and build modern full-stack web applications engineered for performance and long-term scalability. From frontend architecture to backend system design, we focus on modularity, maintainability, and clean code practices.",
    includes: [
      "High-performance React frontends",
      "Backend API architecture",
      "Database design & optimization",
      "Authentication & access control",
      "Deployment-ready production setup",
    ],
  },
  {
    title: "Custom Dashboards & Digital Platforms",
    description:
      "We build tailored dashboards and digital platforms that transform raw data into actionable insight. Whether internal tools, analytics systems, or monitoring interfaces, we engineer clarity into complexity.",
    includes: [
      "Admin dashboards",
      "Data visualization systems",
      "Role-based access platforms",
      "Real-time monitoring interfaces",
      "Custom business workflow systems",
    ],
  },
  {
    title: "Digital Systems & Embedded Engineering",
    description:
      "With a foundation in electrical and electronics engineering, we design and integrate digital systems that bridge hardware and software. We approach system design with reliability and structured engineering principles.",
    includes: [
      "Digital logic system design",
      "Embedded integration support",
      "System flow architecture",
      "Hardware-software interfacing",
      "Technical system consultation",
    ],
  },
  {
    title: "System Architecture & Technical Strategy",
    description:
      "We help teams design scalable architectures and avoid costly technical debt. From planning backend systems to structuring frontend component systems, we focus on long-term stability.",
    includes: [
      "Scalable backend architecture",
      "Database schema planning",
      "Performance optimization",
      "Codebase structuring",
      "Technical roadmap planning",
    ],
  },
]

const revealDirections = ["up", "left", "right", "up"]

function Services() {
  return (
    <div className="space-y-10">
      <header data-reveal="up" className="space-y-4" style={{ "--reveal-delay": "20ms" }}>
        <h2 className="text-3xl font-bold tracking-tight text-slate-200">Our Services</h2>
        <p className="max-w-3xl text-base leading-relaxed text-slate-400">
          Engineering-focused solutions built for scalability, performance, and reliability.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        {services.map((service, index) => (
          <article
            key={service.title}
            data-reveal={revealDirections[index % revealDirections.length]}
            style={{ "--reveal-delay": `${60 + index * 70}ms` }}
            className="relative overflow-hidden rounded-2xl border border-slate-700/40 bg-slate-900/60 p-8 backdrop-blur-xl shadow-lg shadow-black/35 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/80 hover:shadow-orange-600/10"
          >
            <span className="absolute left-8 top-0 h-1 w-16 rounded-b-full bg-orange-700/80" />
            <h3 className="pr-4 text-xl font-semibold leading-snug text-slate-200">{service.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">{service.description}</p>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              What&apos;s Included
            </p>
            <ul className="mt-3 space-y-2.5 text-sm text-slate-300">
              {service.includes.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-orange-700/40 bg-orange-950/40 text-orange-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <article
        data-reveal="up"
        style={{ "--reveal-delay": "120ms" }}
        className="rounded-2xl border border-slate-700/40 bg-slate-900/60 p-8 backdrop-blur-xl shadow-lg shadow-black/35 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/80 hover:shadow-orange-600/10"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          For The Non-Software
        </p>
        <h3 className="mt-2 text-xl font-semibold text-slate-200">
          Electrical Infrastructure & Technical Services
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-slate-400">
          We provide hands-on electrical system services including installation, maintenance, and
          system troubleshooting, bringing practical engineering discipline into every project.
        </p>
      </article>
    </div>
  )
}

export default Services
