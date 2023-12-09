<script lang="ts">
  import { listen } from '$lib'

  const isDark = listen('(prefers-color-scheme: dark)')
</script>

{#if $isDark}
  Device is dark mode
{:else}
  Device is light mode
{/if}
