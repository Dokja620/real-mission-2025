<script>
  import agri from "$lib/assets/media/gall/Agriculture/001.webp?as=xs";
  import edu from "$lib/assets/media/gall/Education/001.webp?as=xs";
  import school from "$lib/assets/media/gall/School/001.webp?as=xs";
  import LocalImg from "$lib/component/localImg.svelte";

  const galleries = [
    {
      name: "Agriculture",
      desc: "Agriculture de real mission qui contribue au truc",
      img: agri,
      link: "/test001",
    },
    {
      name: "Education",
      desc: "Education de real mission qui contribue au truc",
      img: edu,
      link: "/test002",
    },
    {
      name: "School of Real Mission",
      desc: "School de real mission qui contribue au truc",
      img: school,
      link: "/test003",
    },
  ];
</script>

<section id="gallery">
  <div class="content">
    <div class="title" data-screenshift>
      <h3>Notre gallerie photos</h3>
      <h5>Missions, Pelerinage, etc</h5>
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
