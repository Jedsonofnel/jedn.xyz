<script>
  import Logo from './Logo.svelte';
</script>

<header>
  <Logo />

  <nav>
    <ul>
      <li>
        <a class="navlink" href="/blog">Blog</a>
      </li>
      <li>
        <a class="navlink" href="/#about">
          <span class="navtext">Me</span>
          <span class="material-icons-round">arrow_downward</span>
        </a>
      </li>
    </ul>
  </nav>
</header>

<style lang="scss">
  header {
    padding: v.$quarter-note;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .navlink {
    color: v.$midnightgreen;
    font-size: 1.5rem;
    font-style: normal;
    line-height: 1;
    text-decoration: none;

    display: flex;
    align-items: center;
    padding: v.$eighth-note 0;

    .material-icons-round {
      font-size: 2rem;
    }
  }
</style>
