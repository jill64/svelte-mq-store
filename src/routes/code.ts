export const code = ({
  query,
  result
}: {
  query: string
  result: boolean | undefined
}) =>
  /* html */ `
<script>
  import { listen } from 'svelte-mq-store'

  let result = listen('${query}')
</script>

<output>result: ${result}</output>
`.trim()
