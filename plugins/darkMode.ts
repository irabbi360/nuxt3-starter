export default defineNuxtPlugin((nuxtApp) => {
  const { initDarkMode } = useDarkMode()
  
  // Initialize dark mode on client side
  if (process.client) {
    initDarkMode()
    
    // Watch for system color scheme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      const { isDark } = useDarkMode()
      if (!localStorage.getItem('color-scheme')) {
        isDark.value = e.matches
      }
    })
  }
})