import { readable } from 'svelte/store'
import { Listen } from './types/Listen.js'

export const listen: Listen = (_, fallback) => readable(fallback)
