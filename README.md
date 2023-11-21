<!----- BEGIN GHOST DOCS HEADER ----->
<!----- END GHOST DOCS HEADER ----->

## Usage

```svelte
<script>
  import { listen } from 'svelte-mq-store'

  const isDark = listen('prefers-color-scheme', 'dark')
</script>

{#if $isDark}
  Device is dark mode
{:else}
  Device is light mode
{/if}
```
