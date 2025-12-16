<script>
  import founder from "$lib/assets/media/home/found.webp?as=sm";
  import LocalImg from "$lib/component/localImg.svelte";
  import { m } from "$lib/paraglide/messages.js";
</script>

<section id="founder">
  <div class="content" data-screenshift>
    <div class="text">
      <h4>{m.founder_title()}</h4>
      <h5>{m.founder_subtitle()}</h5>
      <p>{@html m.founder_p1()}</p>
      <p>{@html m.founder_p2()}</p>
      <p>{m.founder_p3()}</p>
    </div>

    <div class="image">
      <LocalImg src={founder} alt="Founder name" />
    </div>
  </div>
</section>
