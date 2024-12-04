import {ref} from 'vue'

export const isDark = ref(false)

export function useDarkMode() {
    const toggleDark = () => {
        isDark.value = !isDark.value
        updateColorScheme()
    }

    const updateColorScheme = () => {
        if (process.client) {
            document.documentElement.classList.toggle('dark', isDark.value)
            localStorage.setItem('color-scheme', isDark.value ? 'dark' : 'light')
        }
    }

    const initDarkMode = () => {
        if (process.client) {
            const savedScheme = localStorage.getItem('color-scheme')
            isDark.value = savedScheme === 'dark' ||
                (!savedScheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
            updateColorScheme()
        }
    }

    return {
        isDark,
        toggleDark,
        initDarkMode
    }
}