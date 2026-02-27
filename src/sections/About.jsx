function About() {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
      <div data-reveal="left" className="space-y-6" style={{ "--reveal-delay": "20ms" }}>
        <h2 className="text-3xl font-bold tracking-tight text-slate-200">About Zennertekh</h2>
        <p className="max-w-3xl text-base leading-relaxed text-slate-400">
          Zennertekh is an engineering partnership built at the intersection of hardware and
          software. We are electrical and electronics engineers with a deep passion for modern web
          technologies, scalable system design, and digital infrastructure.
          {" "}Our foundation in electrical systems and digital logic shapes the way we build
          software: structured, modular, and engineered for reliability.
        </p>
        <p className="max-w-3xl text-base leading-relaxed text-slate-400">
          On a typical day, we design and deploy scalable web applications, build custom
          dashboards, architect backend systems, and work hands-on with electrical installations and
          embedded systems. This dual expertise allows us to think beyond code and design systems,
          not just interfaces.
        </p>
      </div>

      <aside
        data-reveal="right"
        style={{ "--reveal-delay": "120ms" }}
        className="rounded-2xl border border-slate-700/40 bg-slate-900/60 p-7 backdrop-blur-xl shadow-lg shadow-black/35 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/80 hover:shadow-orange-600/10"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Our Focus</p>
        <h3 className="mt-2 text-xl font-semibold text-slate-200">Core Capabilities</h3>
        <ul className="mt-5 space-y-3 text-sm text-slate-300">
          {[
            "Scalable Architecture",
            "Full-Stack Engineering",
            "Custom Dashboards",
            "Embedded & Digital Systems",
            "Electrical Infrastructure",
          ].map(item => (
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
      </aside>
    </div>
  )
}

export default About
