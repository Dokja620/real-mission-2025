<script lang="ts">
  import { FxReveal } from "@zerodevx/svelte-img";
  let { src, alt = "madarent gallery" } = $props();
  const Img: any = FxReveal;
</script>

<div class="local-img">
  <Img {src} {alt} />
</div>

<style>
  :global(.local-img) {
    width: 100%;
    height: auto;

    /* These CSS vars (with their default values) are exposed */
    --reveal-transform: scale(1.02);
    --reveal-transition: opacity 0.25s ease-in, transform 0.8s ease-out;
    --reveal-filter: blur(20px);
  }
</style>
