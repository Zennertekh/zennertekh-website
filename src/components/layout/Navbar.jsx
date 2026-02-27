import { useState } from "react"
import Container from "../ui/Container"

function Navbar({ items = [], activeSectionId = "" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(prev => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-700/40 bg-slate-900/60 backdrop-blur-xl shadow-lg shadow-black/40">
      <Container className="flex justify-between items-center h-16">
        <a href="#hero" className="text-xl font-bold tracking-tight text-slate-200">
          <span className="text-orange-700">Zenner</span>tekh
        </a>

        <button
          type="button"
          onClick={toggleMenu}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-900/40 text-slate-300 transition-colors hover:bg-slate-800 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="sr-only">Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
          >
            <path d={isMenuOpen ? "M6 18 18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        <ul className="hidden items-center gap-7 md:flex">
          {items.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`relative pb-1 text-sm font-medium transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-orange-700 after:transition-transform after:duration-300 ${
                  activeSectionId === item.id
                    ? "text-slate-200 after:scale-x-100"
                    : "text-slate-400 hover:text-slate-200 after:scale-x-0"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-slate-700/50 transition-all duration-200 md:hidden ${
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Container className="py-3">
          <ul className="flex flex-col gap-1">
            {items.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    activeSectionId === item.id
                      ? "bg-slate-800 text-slate-200"
                      : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </nav>
  )
}

export default Navbar
