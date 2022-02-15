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
        <a href="/">Blog</a>
      </li>
      <li>
        <a href="/">Portfolio</a>
      </li>
      <li>
        <a href="/">About me</a>
      </li>
      <li>
        <a href="/">Contact</a>
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
    padding-bottom: v.$whole-note;
  }

  section {
    flex: 1 0 15rem;
    padding: v.$quarter-note;
  }

  h3 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    font-size: 1.5rem;
  }

  span {
    font-size: 2rem;
  }

  hr {
    color: v.$bg;
    margin-bottom: v.$eighth-note;
  }

  p {
    font-size: 1rem;
  }

  a {
    font-size: 1.5rem;
    color: v.$terracotta;
    text-decoration: underline;

    &:hover,
    &:active {
      text-decoration-style: double;
    }
  }

  ul {
    list-style-type: none;
  }
</style>
