export const scrollTop = () => {
  const scrollInterval = setInterval(() => {
    if (document.documentElement.scrollTop > 0) {
      window.scrollBy(0, -70)
    } else {
      clearInterval(scrollInterval)
    }
  }, 10)
}
