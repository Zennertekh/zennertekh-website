import { useState } from "react"
import Container from "../ui/Container"

function Navbar({ items = [] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(prev => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <Container className="flex justify-between items-center h-16">
        <a href="#hero" className="text-xl font-bold tracking-tight">
          <span className="text-brand">Zenner</span>tekh
        </a>

        <button
          type="button"
          onClick={toggleMenu}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700 md:hidden"
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
                className="text-sm font-medium text-slate-700 transition hover:text-slate-950"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-slate-200 transition-all duration-200 md:hidden ${
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
                  className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950"
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
