import { readable } from 'svelte/store'
import { Listen } from './types/Listen.js'

export const listen: Listen = (key) =>
  readable(matchMedia(key).matches, (set) => {
    matchMedia(key).addEventListener('change', (e) => set(e.matches))
  })
