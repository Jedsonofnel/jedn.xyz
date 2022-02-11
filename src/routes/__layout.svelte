<script context="module">
  export const load = ({ url }) => {
    const currentRoute = url.pathname;

    return {
      props: {
        currentRoute,
      },
    };
  };
</script>

<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '$lib/styles/global.scss';
  import { fade } from 'svelte/transition';

  export let currentRoute;
</script>

<div id="app">
  <Header />

  {#key currentRoute}
    <main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
      <slot />
    </main>
  {/key}

  <Footer />
</div>

<style lang="scss">
  #app {
    background: v.$bg;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr auto;

    min-height: 100vh;
    width: calc(min(100%, 720px));
    margin: 0 auto;
  }

  main {
    margin: v.$quarter-note v.$quarter-note;
  }
</style>
