<script lang="ts">
  import { listen } from '$lib'
  import { HighlightSvelte } from '@jill64/npm-demo-layout/highlight'
  import { code } from './code'

  let query = '(prefers-color-scheme: dark)'

  $: result = listen(query)
</script>

<main>
  <span>
    @media <input bind:value={query} />
  </span>
  <output>
    <HighlightSvelte code={code({ query, result: $result })} />
  </output>
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    font-size: large;
  }
  @media (max-width: 800px) {
    main {
      grid-template-columns: 1fr;
    }
  }
  output {
    overflow-x: auto;
  }
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  input {
    padding: 1rem;
    width: 100%;
    font-size: large;
    border: 1px solid #888;
    border-radius: 0.5rem;
  }
</style>
