<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-mq-store

[![ci.yml](https://github.com/jill64/svelte-mq-store/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/svelte-mq-store/actions/workflows/ci.yml)

📱 Create any media-query store in Svelte

<!----- END GHOST DOCS HEADER ----->

## Installation

```sh
npm i svelte-mq-store
```

## Usage

Use the `listen` to subscribe to the contents of any media query.

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

## Fallback in Server

Media queries are available only in the browser.  
The fallback value used by the server during SSR can be specified as the second argument. (default is undefined).

```js
import { listen } from 'svelte-mq-store'

const isDark = listen(
  '(prefers-color-scheme: dark)',
  false // fallback value
)
```
