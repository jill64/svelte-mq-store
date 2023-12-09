import { browser } from '$app/environment'
import { readable } from 'svelte/store'

export const listen = <T>(key: string, fallback?: T) =>
  readable(browser ? matchMedia(key).matches : fallback, (set) => {
    if (browser) {
      matchMedia(key).addEventListener('change', (e) => set(e.matches))
    }
  })
