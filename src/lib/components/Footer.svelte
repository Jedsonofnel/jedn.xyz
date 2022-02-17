<script>
</script>

<footer>
  <section>
    <h3>
      Jed's Hut
      <span class="material-icons-round">cottage</span>
    </h3>
    <hr />

    <p>Made by me, Jed.</p>

    <p>
      I hope you think this website is pretty neat (I certainly do) and you
      leave feeling happy, refreshed, and feeling like you want to give me
      employment or a university offer.
    </p>

    <br />

    <a href="mailto: jed@nelson.ac">Contact me.</a>
  </section>

  <section>
    <h3>
      Navigation
      <span class="material-icons-round">location_on</span>
    </h3>
    <hr />

    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/blog">Blog</a>
      </li>
      <li>
        <a href="/#about">About me</a>
      </li>
      <li>
        <a href="/#portfolio">Portfolio</a>
      </li>
      <li>
        <a href="mailto: jed@nelson.ac">Contact</a>
      </li>
    </ul>
  </section>
</footer>

<style lang="scss">
  footer {
    background-color: v.$fg;
    color: v.$bg;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: v.$half-note;
    margin-top: v.$whole-note;
  }

  section {
    flex: 1 0 15rem;
    padding: v.$quarter-note;
  }

  h3 {
    color: v.$bg;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 0;
  }

  .material-icons-round {
    font-size: 2rem;
  }

  hr {
    color: v.$bg;
    margin-bottom: v.$eighth-note;
  }

  a {
    color: v.$terracotta;
  }
</style>
