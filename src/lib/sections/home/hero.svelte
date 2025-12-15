<script>
  import { m } from "$lib/paraglide/messages.js";
</script>

<section id="hero">
  <div class="content">
    <div class="title">
      <h1>{m.hero_title()}</h1>
      <h2>{m.hero_subtitle()}</h2>
    </div>

    <div class="cta">
      <a
        href="mailto:realmissionmovement@gmail.com"
        class="btn btn-primary"
        target="_blank"
      >
        {m.hero_cta_contact()}
      </a>
      <a
        href="https://web.facebook.com/profile.php?id=100076285151329"
        class="btn btn-primary"
        target="_blank"
      >
        {m.hero_cta_join()}
      </a>
    </div>
  </div>
</section>
