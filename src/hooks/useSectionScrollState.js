import { useEffect, useRef, useState } from "react"

function useSectionScrollState(sectionIds = []) {
  const [activeSectionId, setActiveSectionId] = useState(sectionIds[0] ?? "")
  const activeScoresRef = useRef({})
  const animationFrameRef = useRef(null)

  useEffect(() => {
    if (!sectionIds.length) {
      return undefined
    }

    const sectionNodes = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean)

    if (!sectionNodes.length) {
      return undefined
    }

    const activeObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          activeScoresRef.current[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0
        })

        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }

        animationFrameRef.current = requestAnimationFrame(() => {
          let nextActiveId = sectionIds[0]
          let highestScore = -1

          sectionIds.forEach(id => {
            const score = activeScoresRef.current[id] ?? 0

            if (score > highestScore) {
              highestScore = score
              nextActiveId = id
            }
          })

          if (highestScore <= 0) {
            const viewportMarker = window.innerHeight * 0.45

            sectionIds.forEach(id => {
              const section = document.getElementById(id)

              if (section && section.getBoundingClientRect().top <= viewportMarker) {
                nextActiveId = id
              }
            })
          }

          setActiveSectionId(previousId => (previousId === nextActiveId ? previousId : nextActiveId))
        })
      },
      {
        threshold: [0, 0.2, 0.35, 0.5, 0.7, 1],
        rootMargin: "-32% 0px -48% 0px",
      },
    )

    sectionNodes.forEach(sectionNode => {
      activeObserver.observe(sectionNode)
    })

    return () => {
      activeObserver.disconnect()

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [sectionIds])

  return sectionIds.includes(activeSectionId) ? activeSectionId : sectionIds[0] ?? ""
}

export default useSectionScrollState
