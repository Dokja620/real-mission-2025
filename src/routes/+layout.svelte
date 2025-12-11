<script lang="ts">
  import "../app.css";
  import "../scss/global.scss";
  import favicon from "$lib/assets/logo.webp";

  // Fonts
  // Poppins
  import "@fontsource/poppins/400.css";
  import "@fontsource/poppins/500.css";
  import "@fontsource/poppins/600.css";
  import "@fontsource/poppins/700.css";
  // Noto Serif
  import "@fontsource-variable/noto-serif";

  import Header from "$lib/layout/header.svelte";
  import Footer from "$lib/layout/footer.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Header />

<main>
  {@render children()}
  <Footer />
</main>
