<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch(`/api/posts.json`);
    const posts = await res.json();

    return {
      props: {
        posts,
      },
    };
  };
</script>

<script>
  import Hero from '$lib/components/Hero.svelte';
  import Recent from '$lib/components/Recent.svelte';
  import About from '$lib/components/About.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import Portfolio from '$lib/components/Portfolio.svelte';

  export let posts;
</script>

<Hero />

<Recent {posts} />
<hr />
<About />
<hr />
<Skills />
<hr />
<Portfolio />

<style lang="scss">
  hr {
    margin: v.$whole-note 0;

    border: none;
    height: v.$sixteenth-note;
    background-color: v.$midnightgreen;
  }
</style>
