import { BROWSER } from 'esm-env'
import { readable } from 'svelte/store'

export const listen = <T>(key: string, fallback?: T) =>
  readable<boolean | T>(BROWSER ? matchMedia(key).matches : fallback, (set) => {
    if (BROWSER) {
      matchMedia(key).addEventListener('change', (e) => set(e.matches))
    }
  })
