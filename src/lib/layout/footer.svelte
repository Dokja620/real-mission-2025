<script>
  import Icon from "@iconify/svelte";

  const social = [
    {
      name: "facebook",
      label: "Real Mission Movement",
      icon: "logos:facebook",
      link: "",
    },
    {
      name: "whatsapp",
      label: "Real Mission Movement",
      icon: "logos:whatsapp-icon",
      link: "",
    },
    {
      name: "gmail",
      label: "Real Mission Movement",
      icon: "skill-icons:gmail-light",
      link: "",
    },
  ];
</script>

<footer>
  <div class="content" data-screenshift>
    <div class="foot">
      <h5>Real Mission Movement</h5>
      <p>
        Our 7-day mission experiences are a full immersion into the heart of
        service. You'll spend a week engaging with local communities, partnering
        with outreach ...
      </p>
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
      (c) 2025 fait avec ♥ par Ohayo Dev & Design
    </small>
  </div>
</footer>
