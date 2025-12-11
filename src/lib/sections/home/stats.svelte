<script lang="ts">
  import { IsInViewport } from "runed";

  const stats = [
    {
      numbers: "009",
      label: "Antennes",
    },
    {
      numbers: "300",
      label: "Membres",
    },
    {
      numbers: "100",
      label: "Sites visités",
    },
    {
      numbers: "008",
      label: "Missions réalisées",
    },
  ];

  let targetNode = $state<HTMLElement>()!;
  const inViewport = new IsInViewport(() => targetNode);
  $inspect(inViewport);
</script>

<section id="stats">
  <div class="content" data-screenshift>
    {#each stats as stat, i}
      <div class="stat" data-index={i}>
        <h1 bind:this={targetNode} class={inViewport ? "is-in-view" : ""}>
          {#each String(stat.numbers).split("") as char, index}
            <span data-key={index}>{char}</span>
          {/each}
        </h1>
        <h5>{stat.label}</h5>
      </div>
    {/each}
  </div>
</section>
