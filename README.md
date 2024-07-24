<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-mq-store

<!----- BEGIN GHOST DOCS BADGES ----->

<a href="https://npmjs.com/package/svelte-mq-store"><img src="https://img.shields.io/npm/v/svelte-mq-store" alt="npm-version" /></a> <a href="https://npmjs.com/package/svelte-mq-store"><img src="https://img.shields.io/npm/l/svelte-mq-store" alt="npm-license" /></a> <a href="https://npmjs.com/package/svelte-mq-store"><img src="https://img.shields.io/npm/dm/svelte-mq-store" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/svelte-mq-store"><img src="https://img.shields.io/bundlephobia/min/svelte-mq-store" alt="npm-min-size" /></a> <a href="https://github.com/jill64/svelte-mq-store/actions/workflows/ci.yml"><img src="https://github.com/jill64/svelte-mq-store/actions/workflows/ci.yml/badge.svg" alt="ci.yml" /></a> <a href="https://svelte-mq-store.jill64.dev"><img src="https://img.shields.io/website?up_message=working&down_message=down&url=https%3A%2F%2Fsvelte-mq-store.jill64.dev" alt="website" /></a>

<!----- END GHOST DOCS BADGES ----->

📱 Create any media-query store in Svelte

## [Demo](https://svelte-mq-store.jill64.dev)

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

  let isDark = listen('(prefers-color-scheme: dark)')
</script>

{#if isDark}
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

let isDark = listen(
  '(prefers-color-scheme: dark)',
  false // fallback value
)
```

<!----- BEGIN GHOST DOCS FOOTER ----->

## License

[MIT](LICENSE)

<!----- END GHOST DOCS FOOTER ----->
