<script>
  import { setLocale } from "$lib/paraglide/runtime";
  import Icon from "@iconify/svelte";
  import logo from "$lib/assets/media/logo.webp";
  import { m } from "$lib/paraglide/messages.js";
</script>

<header>
  <nav>
    <a class="logo" href="/" aria-label="Go home link">
      <img src={logo} alt={m.header_logo_alt()} />
    </a>

    <ul class="nav-links">
      <li>
        <a href="/gallerie">{m.header_gallery()}</a>
      </li>
    </ul>

    <div class="lang">
      <button onclick={() => setLocale("fr")}>
        <Icon icon="twemoji:flag-france" width="1.75rem" />
      </button>
      <button onclick={() => setLocale("en")}>
        <Icon icon="twemoji:flag-us-outlying-islands" width="1.75rem" />
      </button>
    </div>
  </nav>
</header>
