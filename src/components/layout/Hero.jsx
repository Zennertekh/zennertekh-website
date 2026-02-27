function Hero() {
  return (
    <span id="hero">
    <div className="grid gap-10 md:grid-cols-2 md:items-center">
      <div className="space-y-5">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          100% Trust Score
        </p>
        <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
          Build your digital presence with Zennertekh
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-slate-600">
          Clean interfaces, fast load times, and user-focused experiences for startups and growing
          businesses.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-bold text-slate-900">What You Get</h2>
        <ul className="space-y-3 text-sm text-slate-700">
          <li>Fast, responsive React frontends</li>
          <li>Consistent design system and reusable components</li>
          <li>SEO-friendly structure and modern tooling</li>
        </ul>
      </div>
    </div>
    </span>
  )
}

export default Hero
