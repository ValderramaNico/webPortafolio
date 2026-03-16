export const smoothScrollTo = (targetId) => {
  const element = document.querySelector(targetId)
  if (!element) return
  
  const headerOffset = 80
  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset

  // Forzar smooth scroll con JavaScript puro
  const startPosition = window.pageYOffset
  const distance = offsetPosition - startPosition
  const duration = 800
  let start = null

  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  const animation = (currentTime) => {
    if (start === null) start = currentTime
    const timeElapsed = currentTime - start
    const progress = Math.min(timeElapsed / duration, 1)
    
    window.scrollTo(0, startPosition + distance * easeInOutCubic(progress))
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation)
    }
  }

  requestAnimationFrame(animation)
}
