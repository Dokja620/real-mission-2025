<script lang="ts">
  import { IsInViewport } from "runed";
  import { m } from "$lib/paraglide/messages.js";

  const stats = [
    {
      numbers: "009",
      label: m.stats_label1(),
    },
    {
      numbers: "300",
      label: m.stats_label2(),
    },
    {
      numbers: "100",
      label: m.stats_label3(),
    },
    {
      numbers: "008",
      label: m.stats_label4(),
    },
  ];

  let targetNode = $state<HTMLElement>()!;
  const inViewport = new IsInViewport(() => targetNode);
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
