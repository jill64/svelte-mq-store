import { BROWSER } from 'esm-env'

export const listen = <T = undefined>(
  key: string,
  fallback?: T
): {
  readonly value: boolean | T | undefined
} => {
  let store = $state(BROWSER ? matchMedia(key).matches : fallback)

  if (BROWSER) {
    matchMedia(key).addEventListener('change', (e) => {
      store = e.matches
    })
  }

  return {
    get value() {
      return store
    }
  }
}
