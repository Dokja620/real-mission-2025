<script lang="ts">
  import { FxReveal as Img } from "@zerodevx/svelte-img";
  let { src, alt = "madarent gallery" } = $props();
</script>

<Img class="local-img" {src} {alt} />

<style>
  :global(.local-img) {
    width: 640px;
    height: 480px;

    /* These CSS vars (with their default values) are exposed */
    --reveal-transform: scale(1.02);
    --reveal-transition: opacity 0.25s ease-in, transform 0.8s ease-out;
    --reveal-filter: blur(20px);
  }
</style>
