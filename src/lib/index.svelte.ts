import { BROWSER } from 'esm-env'

export const listen = <T = undefined>(key: string, fallback?: T) => {
  let value = $state(BROWSER ? matchMedia(key).matches : fallback)

  if (BROWSER) {
    matchMedia(key).addEventListener('change', (e) => {
      value = e.matches
    })
  }

  return value
}
