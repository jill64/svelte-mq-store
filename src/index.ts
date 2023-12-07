import { readable } from 'svelte/store'
import { Listen } from './types/Listen.js'

export const listen: Listen = <T>(key: string, fallback?: T) => {
  const available = typeof matchMedia !== 'undefined'
  return readable(available ? matchMedia(key).matches : fallback, (set) => {
    if (available) {
      matchMedia(key).addEventListener('change', (e) => set(e.matches))
    }
  })
}
