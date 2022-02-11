<script>
  import About from '$lib/components/About.svelte';
</script>

<div class="hero">
  <h1>Welcome to my Hut.</h1>
  <p>
    A chilled out place where I keep things.
  </p>
</div>

<About />

<style lang="scss">
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    color: v.$midnightgreen;
    font-family: v.$title-serif;
    font-size: 4rem;
    text-align: center;
    line-height: 1.0;
  }

  h1, p {
    margin: 0;
  }
</style>
