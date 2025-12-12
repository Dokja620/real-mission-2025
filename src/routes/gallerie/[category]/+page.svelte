<script lang="ts">
  import { page } from "$app/state";
  import LocalImg from "$lib/component/localImg.svelte";

  export const prerender = true;

  let category = $derived(page.params.category);
  let folder = $derived(
    category ? category.charAt(0).toUpperCase() + category.slice(1) : "",
  );

  // Glob all gallery images
  const allImages = import.meta.glob("/src/lib/assets/media/gall/*/*.webp", {
    eager: true,
    query: "?as=lg&url",
    import: "default",
  });

  let images = $derived(() => {
    if (!folder) return [];
    const imgs = Object.keys(allImages)
      .filter((path) => path.includes(`/${folder}/`))
      .map((path) => ({
        src: allImages[path],
        alt: path
          .split("/")
          .pop()
          .replace(/\.(webp|jpg)$/i, ""),
        path,
      }));
    return imgs;
  });
</script>

<section id="gallery-category">
  <div class="content">
    <div class="grid" data-screenshift>
      {#each images() as img, i}
        <div class="item" data-index={i}>
          <LocalImg src={img.src} alt={img.alt} />
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
  }
  .item {
    cursor: pointer;
  }
  .item :global(.local-img) {
    width: 100%;
    height: auto;
    pointer-events: none;
  }
</style>

