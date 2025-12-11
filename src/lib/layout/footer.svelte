<script>
  import Icon from "@iconify/svelte";
  import { m } from "$lib/paraglide/messages.js";

  const social = [
    {
      name: "facebook",
      label: m.footer_title(),
      icon: "logos:facebook",
      link: "",
    },
    {
      name: "whatsapp",
      label: m.footer_title(),
      icon: "logos:whatsapp-icon",
      link: "",
    },
    {
      name: "gmail",
      label: m.footer_title(),
      icon: "skill-icons:gmail-light",
      link: "",
    },
  ];
</script>

<footer>
  <div class="content" data-screenshift>
    <div class="foot">
      <h5>{m.footer_title()}</h5>
      <p>{m.footer_desc()}</p>
    </div>
    <div class="social">
      {#each social as item, index}
        <a href={item.link} data-index={index}>
          <Icon class="icon" icon={item.icon} />
        </a>
      {/each}
    </div>
    <div class="links"></div>

    <small class="copyright">
      {m.footer_copyright()}
    </small>
  </div>
</footer>
