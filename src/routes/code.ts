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

  let result = $derived(listen('${query}'))
</script>

<output>result.v: ${result}</output>
`.trim()
