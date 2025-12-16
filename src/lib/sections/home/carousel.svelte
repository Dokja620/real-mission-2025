<script>
  import "@splidejs/svelte-splide/css";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
  import LocalImg from "$lib/component/localImg.svelte";
  import { m } from "$lib/paraglide/messages.js";

  import img01 from "$lib/assets/media/swiper/001.webp?as=sm";
  import img02 from "$lib/assets/media/swiper/002.webp?as=sm";
  import img03 from "$lib/assets/media/swiper/003.webp?as=sm";
  import img04 from "$lib/assets/media/swiper/004.webp?as=sm";
  import img05 from "$lib/assets/media/swiper/005.webp?as=sm";
  import img06 from "$lib/assets/media/swiper/006.webp?as=sm";
  import img07 from "$lib/assets/media/swiper/007.webp?as=sm";
  import img08 from "$lib/assets/media/swiper/008.webp?as=sm";
  import img09 from "$lib/assets/media/swiper/009.webp?as=sm";

  const splide = [
    {
      img: img01,
      h3: m.carousel_slide1_h3(),
      h4: m.carousel_slide1_h4(),
      p: m.carousel_slide1_p(),
    },
    {
      img: img02,
      h3: m.carousel_slide2_h3(),
      h4: m.carousel_slide2_h4(),
      p: m.carousel_slide2_p(),
    },
    {
      img: img03,
      h3: m.carousel_slide3_h3(),
      h4: m.carousel_slide3_h4(),
      p: m.carousel_slide3_p(),
    },
    {
      img: img04,
      h3: m.carousel_slide4_h3(),
      h4: m.carousel_slide4_h4(),
      p: m.carousel_slide4_p(),
    },
    {
      img: img05,
      h3: m.carousel_slide5_h3(),
      h4: m.carousel_slide5_h4(),
      p: m.carousel_slide5_p(),
    },
    {
      img: img06,
      h3: m.carousel_slide6_h3(),
      h4: m.carousel_slide6_h4(),
      p: m.carousel_slide6_p(),
    },
    {
      img: img07,
      h3: m.carousel_slide7_h3(),
      h4: m.carousel_slide7_h4(),
      p: m.carousel_slide7_p(),
    },
    {
      img: img08,
      h3: m.carousel_slide8_h3(),
      h4: m.carousel_slide8_h4(),
      p: m.carousel_slide8_p(),
    },
    {
      img: img09,
      h3: m.carousel_slide9_h3(),
      h4: m.carousel_slide9_h4(),
      p: m.carousel_slide9_p(),
    },
  ];

  let ready = $state(false);

  // Try mounting
  if (browser) {
    setTimeout(() => {
      ready = true;
    }, 50);
  }

  onMount(() => {
    ready = true;
  });

  const options = {
    type: "loop",
    rewind: true,
    pagination: true,
    autoplay: true,
    arrows: false,
  };
</script>

<section id="carousel">
  <div class="content" data-screenshift>
    <Splide
      {options}
      hasTrack={false}
      aria-labelledby="autoplay-exampl-heading"
    >
      <div style="position: relative">
        <SplideTrack>
          {#each splide as item, index}
            <SplideSlide
              class="splide-item"
              data-splide-interval="4000"
              data-index={index}
            >
              <div class="text">
                <h3>{item.h3}</h3>
                <h5>{item.h4}</h5>
                <p>{item.p}</p>
              </div>
              <LocalImg src={item.img} alt={item.h3} />
            </SplideSlide>
          {/each}
        </SplideTrack>
      </div>
    </Splide>
  </div>
</section>
