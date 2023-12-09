import { init } from '@jill64/sentry-sveltekit-cloudflare/server'

const { onHandle, onError } = init(
  'https://8adafe282528438d6bf7f88ceb8f1424@o4505814639312896.ingest.sentry.io/4506365055139840'
)

export const handle = onHandle()
export const handleError = onError()
