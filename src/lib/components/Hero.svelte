<section id="hero">
  <h1>Welcome to my Hut.</h1>
  <div id="action">
    <p class="welcome">
      My little storage shed of bits and bobs and things (including my webdev
      portfolio!) that chills on a server somewhere in London!
    </p>

    <nav>
      <a href="#recent">Blog Recent</a>

      <a href="/blog">Blog Index</a>

      <a href="#portfolio">Portfolio</a>

      <a href="mailto: jed@nelson.ac">Contact Me</a>
    </nav>
  </div>
</section>

<style lang="scss">
  section {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: start;
  }

  h1 {
    flex: 0 0 auto;
    writing-mode: vertical-lr;
    font-size: 15rem;
    line-height: 1;
    width: auto;
    white-space: nowrap;
    margin: 0 0 v.$half-note 0;
  }

  #action {
    flex: 1 0 15rem;
    border-top: dotted v.$terracotta v.$eighth-note;
    padding-top: v.$quarter-note;

    display: flex;
    flex-direction: column;
    align-items: center;

    height: auto;
    position: sticky;
    top: v.$quarter-note;
    margin: 0 0 v.$half-note 0;
  }

  .welcome {
    color: v.$bg;

    background-color: v.$cadetblue;
    padding: v.$eighth-note;
    margin: 0;
  }

  nav {
    margin-top: v.$quarter-note;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    font-size: 1.5rem;
    font-style: normal;
    color: v.$midnightgreen;
    text-decoration: none;
    margin-bottom: v.$sixteenth-note;

    &::before {
      content: '>';
      margin-right: v.$eighth-note;
      transition: all ls ease-in;
    }

    &::after {
      content: '<';
      margin-left: v.$eighth-note;
    }

    &:hover {
      margin-bottom: 0;
      border-bottom: solid v.$terracotta v.$sixteenth-note;
    }
  }

  a:hover::after,
  a:hover::before {
    animation: focus 250ms ease-out forwards;
  }

  @keyframes focus {
    100% {
      margin-left: 0;
      margin-right: 0;
    }
  }
</style>
