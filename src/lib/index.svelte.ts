import { browser } from '$app/environment'

export const listen = <T = undefined>(key: string, fallback?: T) => {
  let value = $state(browser ? matchMedia(key).matches : fallback)

  if (browser) {
    matchMedia(key).addEventListener('change', (e) => {
      value = e.matches
    })
  }

  return {
    get v() {
      return value
    }
  }
}
