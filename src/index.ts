import { readable } from 'svelte/store'
import { Listen } from './types/Listen.js'

export const listen: Listen = <T>(key: string, fallback?: T) => {
  const browser = typeof window !== 'undefined'
  return readable(browser ? matchMedia(key).matches : fallback, (set) => {
    if (browser) {
      matchMedia(key).addEventListener('change', (e) => set(e.matches))
    }
  })
}
