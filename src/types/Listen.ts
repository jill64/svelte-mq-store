import { Readable } from 'svelte/store'

export type Listen<T = undefined> = (
  key: string,
  fallback?: T
) => Readable<boolean | T>
