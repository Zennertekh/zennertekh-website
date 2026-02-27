import { createElement } from "react"
import Navbar from "./components/layout/Navbar"
import Hero from "./components/layout/Hero"
import Container from "./components/ui/Container"
import useSectionScrollState from "./hooks/useSectionScrollState"

const sectionModules = import.meta.glob("./sections/*.jsx", { eager: true })

const sectionOrder = ["About", "Services", "Projects", "Skills", "Contact"]

const sections = Object.entries(sectionModules)
  .map(([filePath, module]) => {
    const fileName = filePath.split("/").pop().replace(".jsx", "")

    return {
      key: fileName,
      id: fileName.toLowerCase(),
      label: fileName,
      Component: module.default,
    }
  })
  .sort((a, b) => {
    const indexA = sectionOrder.indexOf(a.label)
    const indexB = sectionOrder.indexOf(b.label)

    if (indexA === -1 && indexB === -1) return a.label.localeCompare(b.label)
    if (indexA === -1) return 1
    if (indexB === -1) return -1

    return indexA - indexB
  })

function App() {
  const sectionIds = sections.map(({ id }) => id)
  const { activeSectionId, visibleSections } = useSectionScrollState(sectionIds)

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar
        items={sections.map(({ id, label }) => ({ id, label }))}
        activeSectionId={activeSectionId}
      />

      <main>
        <Container className="mt-12">
          <Hero />
        </Container>

        {sections.map(({ key, id, Component }, index) => {
          const isVisible = visibleSections[id] ?? false
          const transitionDelay = isVisible ? `${Math.min(index * 90, 320)}ms` : "0ms"

          return (
            <section
              key={key}
              id={id}
              className="scroll-mt-24 border-b border-slate-200 py-20 last:border-b-0"
            >
              <Container
                className={`transform-gpu transition-[opacity,transform,filter] duration-700 ease-out motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${
                  isVisible
                    ? "translate-y-0 opacity-100 blur-0"
                    : "translate-y-12 opacity-0 blur-[2px]"
                }`}
                style={{ transitionDelay }}
              >
                {createElement(Component)}
              </Container>
            </section>
          )
        })}
      </main>
    </div>
  )
}

export default App
