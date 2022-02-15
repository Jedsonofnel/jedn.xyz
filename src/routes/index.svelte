<script>
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Portfolio from '$lib/components/Portfolio.svelte';
</script>

<Hero />
<div class="content">
  <About />
  <Portfolio />
</div>

<style lang="scss">
  .content {
    display: grid;
    grid-gap: v.$quarter-note;
  }
</style>
