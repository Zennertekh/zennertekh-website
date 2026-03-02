import Container from "../ui/Container"

const socialLinks = [
  {
    name: "GitHub",
    profiles: [
      { name: "2KAY - Kelvin Katoya", href: "https://github.com/2kay-kat" },
      { name: "GPH - George Hussein", href: "https://github.com/lazoramorie" },
    ],
    icon: (
      <path
        d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49
           0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.21-3.37-1.21-.45-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63
           1 .08 1.53 1.05 1.53 1.05.9 1.58 2.36 1.13 2.93.87.09-.67.35-1.13.63-1.39-2.22-.26-4.55-1.14-4.55-5.06
           0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.34 9.34 0 0 1 12 6.8
           c.85 0 1.72.12 2.52.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.71 1.03 1.62 1.03 2.74
           0 3.93-2.33 4.79-4.56 5.05.36.32.68.95.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.27
           10.27 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z"
        fill="currentColor"
      />
    ),
  },
  {
    name: "Instagram",
    profiles: [
      { name: "2KAY - Kelvin Katoya", href: "https://instagram.com/kat.kay2" },
      { name: "GPH - George Hussein", href: "https://www.instagram.com/georgie__hussein" },
    ],
    icon: (
      <path
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2
           a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm10.5 1.5
           a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2
           a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
        fill="currentColor"
      />
    ),
  },
  {
    name: "Twitter",
    profiles: [
      { name: "2KAY - Kelvin Katoya", href: "https://x.com/@Katoyakelvin" },
      // { name: "GPH - George Hussein", href: "https://x.com/team_member_2" },
    ],
    icon: (
      <path
        d="m18.9 2h3.07l-6.7 7.65L23 22h-6.07l-4.75-6.2L6.77 22H3.7l7.17-8.2L1 2h6.22l4.3
           5.66L18.9 2Zm-1.08 18h1.7L6.3 3.9H4.48L17.82 20Z"
        fill="currentColor"
      />
    ),
  },
  {
    name: "LinkedIn",
    profiles: [
      { name: "2KAY - Kelvin Katoya", href: "https://linkedin.com/in/kelvin-katoya-570537310" },
      { name: "GPH - George Hussein", href: "https://linkedin.com/in/george-hussein-9360583a0" },
    ],
    icon: (
      <path
        d="M4.98 3.5a2.48 2.48 0 1 1-.01 4.97 2.48 2.48 0 0 1 .01-4.97ZM2.5 9h5v12.5h-5V9Zm8
           0h4.79v1.71h.07c.67-1.2 2.31-2.46 4.75-2.46 5.08 0 6.02 3.34 6.02 7.68v5.57h-5v-4.94
           c0-1.18-.02-2.7-1.64-2.7-1.64 0-1.89 1.28-1.89 2.61v5.03h-5V9Z"
        fill="currentColor"
      />
    ),
  },
  {
    name: "Facebook",
    profiles: [
      // { name: "2KAY - Kelvin Katoya", href: "https://facebook.com/team.member.1" },
      { name: "GPH - George Hussein", href: "https://facebook.com/george.hussein.376" },
    ],
    icon: (
      <path
        d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.86.25-1.45 1.48-1.45h1.58V5.03c-.27-.04-1.2-.11-2.28-.11
           -2.26 0-3.81 1.38-3.81 3.91V11H8v3h2.4v8h3.1Z"
        fill="currentColor"
      />
    ),
  },
]

function Footer({ items = [] }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-slate-800/70 bg-slate-950/95">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(circle at 12% -10%, rgba(194, 65, 12, 0.18), transparent 45%)",
        }}
      />

      <Container className="relative py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md space-y-4">
            <a
              href="#hero"
              className="inline-flex items-center text-xl font-bold tracking-tight text-slate-200"
            >
              <span className="text-orange-700">Zenner</span>tekh
            </a>
            <p className="text-sm leading-relaxed text-slate-400">
              Building dependable digital systems with practical engineering, clean architecture,
              and long-term maintainability.
            </p>
          </div>

          <div className="space-y-6 lg:text-right">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Quick Links
              </p>
              <ul className="flex flex-wrap gap-x-4 gap-y-2 lg:justify-end">
                {items.map(item => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm text-slate-400 transition-colors hover:text-orange-400"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Connect
              </p>
              <ul className="flex flex-wrap gap-3 lg:justify-end">
                {socialLinks.map(link => (
                  <li key={link.name} className="group relative">
                    <button
                      type="button"
                      aria-label={`${link.name} profiles`}
                      aria-haspopup="true"
                      className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-slate-700/80 bg-slate-900/60 text-slate-400 transition-colors hover:border-orange-600/70 hover:text-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600/70"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                        {link.icon}
                      </svg>
                    </button>

                    <div className="pointer-events-none absolute bottom-full right-0 z-20 mb-2 w-44 translate-y-2 rounded-xl border border-slate-700/80 bg-slate-900/95 p-2 opacity-0 shadow-xl shadow-black/40 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <p className="px-2 pb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                        {link.name}
                      </p>
                      <ul className="space-y-1">
                        {link.profiles.map(profile => (
                          <li key={profile.name}>
                            <a
                              href={profile.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block rounded-md px-2 py-1.5 text-sm text-slate-300 transition-colors hover:bg-slate-800/80 hover:text-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600/70"
                            >
                              {profile.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-800/80 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Zennertekh. All rights reserved.</p>
          <a href="#hero" className="transition-colors hover:text-orange-400">
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
