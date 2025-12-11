<script>
  import agri from "$lib/assets/media/gall/Agriculture/001.webp?as=xs";
  import edu from "$lib/assets/media/gall/Education/001.webp?as=xs";
  import school from "$lib/assets/media/gall/School/001.webp?as=xs";
  import LocalImg from "$lib/component/localImg.svelte";
  import { m } from "$lib/paraglide/messages.js";

  const galleries = [
    {
      name: m.gallery_agri_name(),
      desc: m.gallery_agri_desc(),
      img: agri,
      link: "/test001",
    },
    {
      name: m.gallery_edu_name(),
      desc: m.gallery_edu_desc(),
      img: edu,
      link: "/test002",
    },
    {
      name: m.gallery_school_name(),
      desc: m.gallery_school_desc(),
      img: school,
      link: "/test003",
    },
  ];
</script>

<section id="gallery">
  <div class="content">
    <div class="title" data-screenshift>
      <h3>{m.gallery_title()}</h3>
      <h5>{m.gallery_subtitle()}</h5>
    </div>

    <div class="list" data-screenshift>
      {#each galleries as item, index}
        <div class="card" data-index={index}>
          <div class="card-img">
            <LocalImg src={item.img} alt={item.name} />
          </div>
          <div class="card-body">
            <h5>{item.name}</h5>
            <p>{item.desc}</p>
          </div>
          <a href={item.link} aria-label="link to {item.name}"></a>
        </div>
      {/each}
    </div>
  </div>
</section>
