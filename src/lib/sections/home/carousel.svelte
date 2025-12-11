<script>
  import "@splidejs/svelte-splide/css";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
  import LocalImg from "$lib/component/localImg.svelte";

  import img01 from "$lib/assets/media/swiper/001.webp?as=sm";
  import img02 from "$lib/assets/media/swiper/002.webp?as=sm";
  import img03 from "$lib/assets/media/swiper/003.webp?as=sm";
  import img04 from "$lib/assets/media/swiper/004.webp?as=sm";
  import img05 from "$lib/assets/media/swiper/005.webp?as=sm";
  import img06 from "$lib/assets/media/swiper/006.webp?as=sm";
  import img07 from "$lib/assets/media/swiper/007.webp?as=sm";
  import img08 from "$lib/assets/media/swiper/008.webp?as=sm";

  const splide = [
    {
      img: img01,
      h3: "NOTRE VISION",
      h4: "| UNE DES ORGANISATIONS LES PLUS PROLIFIQUES POUR L’ENVOI DE MISSIONNAIRES EN AFRIQUE.",
      p: "Dieu exhorte tous les chrétiens pour être intégrés dans sa divine vision, et gagner son objectif. Toutes les actions entreprises soient accomplies dans l’authenticité, dans l’honnêteté et à travers l’intégrité.",
    },
    {
      img: img02,
      h3: "NOS MISSIONS",
      h4: "| DIFFUSER L'EVANGILE AU SEIN DE LA SOCIETE. MOBILISER  L’EGLISE POUR FORMER DES DISCIPLES",
      p: "L’évangélisation, et le discipôlat sont les fondements de la mission. C’est ce qu’on appelle « L’EMINENTE MISSION » accomplir celle-ci est la raison d’être et la raison de vivre des chrétiens. ",
    },
    {
      img: img03,
      h3: "LA FINALITE",
      h4: "| CHAQUE CHRETIEN DEVRAIT SE TRANSFORMER  EN DISCIPLE MISSIONNAIRE",
      p: "Lorsque les chrétiens s’approprient et mettent en pratique l’évangile, le plan de Dieu s’accomplit plus rapidement. En ce sens, la responsabilité des chrétiens est à la fois lourde et cruciale. ",
    },
    {
      img: img04,
      h3: "NOTRE PHILOSOPHIE",
      h4: "| MALAGASY PRECHE L’EVANGILE AU PEUPLE MALAGASY, SOUTENU PAR DES MALAGASY ET PRÔNE L’ENTRE AIDE",
      p: "Les Malagasy prêchent l’évangile au peuple malagasy. La mission est soutenue par les Malagasy, et promeut la solidarité et l’entraide.",
    },
    {
      img: img05,
      h3: "NOTRE APPROCHE",
      h4: "| UN PROCESSUS DE DEVELOPPEMENT HOLISTIQUE, BASE SUR LES VALEURS BIBLIQUES ET ADAPTE A LA CULTURE MALAGASY",
      p: "Les missionnaires occidentaux, porteurs de l’Évangile à Madagascar, ont apporté la lumière. Ils ont accompli leurs responsabilités, et les églises malagasy déploient les efforts nécessaires pour assurer la continuité. ‘On ne peut pas bâtir une maison avec une seule main’, chaque soutien est donc le bienvenu. Real Mission Movement valorise le travail d’équipe et accueille chaleureusement tout partenariat.",
    },
    {
      img: img06,
      h3: "IMPACT",
      h4: "| PROCESSUS DE DEVELOPPEMENT HOLISTIQUE ADAPTE AUX VALEURS MALAGASY",
      p: "L’Évangile constituera une valeur fondamentale de l’identité malagasy, se transmettant de génération en génération et garantissant un développement harmonieux et durable pour la nation.",
    },
    {
      img: img07,
      h3: "LE BUT",
      h4: "| PROCESSUS DE DEVELOPPEMENT HOLISTIQUE ADAPTE AUX VALEURS MALAGASY",
      p: "Promouvoir une transformation positive, incluant un changement de mentalité, de méthode et de comportement.",
    },
    {
      img: img08,
      h3: "EFFETS ATTENDUS",
      h4: "Effet 1 :",
      p: "Chaque ménage s’approprie l’évangile et l’utilise pour prendre des décisions favorisant la croissance et l’épanouissement durable de chaque membre de la famille.",
    },
    {
      img: img08,
      h3: "EFFETS ATTENDUS",
      h4: "Effet 2 :",
      p: "L’évangile est adopté par les leaders à tous les niveaux comme un outil de leadership et de gestion pour le développement communautaire.",
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
            <SplideSlide class="splide-item" data-index={index}>
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
