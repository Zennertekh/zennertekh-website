import { useEffect } from "react"

function useScrollReveal({
  selector = "[data-reveal]",
  threshold = 0.16,
  rootMargin = "0px 0px -12% 0px",
} = {}) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(selector))

    if (!nodes.length) {
      return undefined
    }

    nodes.forEach(node => {
      node.dataset.revealReady = "true"
      node.dataset.revealState = "hidden"
    })

    const pendingStates = new Map()
    let frameId = null

    const flushStateQueue = () => {
      pendingStates.forEach((isVisible, node) => {
        node.dataset.revealState = isVisible ? "visible" : "hidden"
      })

      pendingStates.clear()
      frameId = null
    }

    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          pendingStates.set(entry.target, entry.isIntersecting)
        })

        if (frameId === null) {
          frameId = requestAnimationFrame(flushStateQueue)
        }
      },
      {
        threshold: [0, threshold, 0.4],
        rootMargin,
      },
    )

    nodes.forEach(node => revealObserver.observe(node))

    return () => {
      revealObserver.disconnect()

      if (frameId !== null) {
        cancelAnimationFrame(frameId)
      }
    }
  }, [rootMargin, selector, threshold])
}

export default useScrollReveal
