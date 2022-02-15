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
        <a href="#about">
          Skip
          <span class="material-icons-round">arrow_downward</span>
        </a>
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
    margin: 0;
    list-style-type: none;
    display: flex;
    gap: 1rem;
  }

  a {
    font-size: 1.5rem;
    text-decoration: inherit;
    color: inherit;

    display: flex;
    align-items: center;
    padding-bottom: 0.2rem;

    &:hover {
      border-bottom: solid v.$terracotta 0.2rem;
      padding-bottom: 0;
    }
  }

  li + li {
    border-left: solid v.$cadetblue 0.2rem;
    padding-left: 1rem;
  }
</style>
