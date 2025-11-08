<script lang="ts">
  import "../app.css";
  import "../scss/global.scss";
  import favicon from "$lib/assets/favicon.svg";

  // Fonts
  import "@fontsource/poppins/400.css";
  import "@fontsource/poppins/500.css";
  import "@fontsource/poppins/700.css";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
