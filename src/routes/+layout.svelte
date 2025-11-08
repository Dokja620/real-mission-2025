<script lang="ts">
  import "../app.css";
  import "../scss/global.scss";
  import favicon from "$lib/assets/logo.webp";

  // Fonts
  import "@fontsource/poppins/400.css";
  import "@fontsource/poppins/500.css";
  import "@fontsource/poppins/700.css";
  import Header from "$lib/layout/header.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Header />
{@render children()}
