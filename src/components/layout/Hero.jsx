import Container from "../ui/Container"

function Hero() {
  const offerings = [
    "High-performance web applications",
    "Scalable, reusable component systems",
    "Clean architecture and maintainable code",
    "Modern tooling and deployment readiness",
    "Long-term maintainability",
  ]

  return (
    <section id="hero" className="relative isolate overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-slate-950" />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(194, 65, 12, 0.15), transparent 60%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-7">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              Engineering-Led Digital Delivery
            </p>
            <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-slate-200 sm:text-5xl lg:text-6xl">
              Engineering Digital Systems That Perform.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Zennertekh builds fast, scalable, and maintainable web platforms powered by
              engineering precision and business clarity.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-orange-700 px-6 py-3 text-sm font-semibold text-slate-100 shadow-md shadow-orange-700/20 transition-colors hover:bg-orange-600"
              >
                Explore Projects
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-slate-700 bg-slate-900/40 px-6 py-3 text-sm font-semibold text-slate-300 transition-colors hover:bg-slate-800"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-700/40 bg-slate-900/60 p-8 backdrop-blur-xl shadow-lg shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/80 hover:shadow-orange-600/10">
            <h2 className="mb-5 text-lg font-semibold text-slate-200">What We Deliver</h2>
            <ul className="space-y-3 text-sm text-slate-400 sm:text-base">
              {offerings.map(item => (
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
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
