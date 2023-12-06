<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-mq-store

[![npm-version](https://img.shields.io/npm/v/svelte-mq-store)](https://npmjs.com/package/svelte-mq-store) [![npm-license](https://img.shields.io/npm/l/svelte-mq-store)](https://npmjs.com/package/svelte-mq-store) [![npm-download-month](https://img.shields.io/npm/dm/svelte-mq-store)](https://npmjs.com/package/svelte-mq-store) [![npm-min-size](https://img.shields.io/bundlephobia/min/svelte-mq-store)](https://npmjs.com/package/svelte-mq-store)

📱 Create any media-query store in Svelte

<!----- END GHOST DOCS HEADER ----->

## Installation

```sh
npm i svelte-mq-store
```

## Usage

```svelte
<script>
  import { listen } from 'svelte-mq-store'

  const isDark = listen('(prefers-color-scheme: dark)')
</script>

{#if $isDark}
  Device is dark mode
{:else}
  Device is light mode
{/if}
```
