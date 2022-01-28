<script>
  import Logo from "./Logo.svelte";
</script>

<header>
  <a href="/"><Logo /></a>

  <nav>
    <ul>
      <li>
        <a href="/blog">Blog</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </nav>
</header>

<style lang="scss">
  header {
    padding: v.$half-note;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    color: v.$midnightgreen;
    font-size: 1.25rem;

    margin: 0;
    list-style-type: none;
    display: flex;
    gap: 1rem;
  }

  a {
    font-size: 1.25rem;
    text-decoration: inherit;
    color: inherit;
  }
</style>
