<section id="hero">
  <h1>Welcome to my Hut.</h1>
  <div id="action">
    <p>
      My little storage shed of bits and bobs and things (including my webdev
      portfolio!) that chills on a server somewhere in London!
    </p>

    <div class="links">
      <a href="#portfolio"> Portfolio </a>

      <a href="#portfolio"> Contact Me </a>

      <a href="#portfolio"> Blog Recent </a>
    </div>
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
    margin: 0 0 v.$half-note;
    line-height: 1;
    width: auto;
    white-space: nowrap;
  }

  #action {
    flex: 1 0 15rem;
    border-top: dotted v.$cadetblue 0.5rem;
    padding-top: v.$quarter-note;

    display: flex;
    flex-direction: column;
    align-items: center;

    height: auto;
    position: sticky;
    top: v.$quarter-note;
    margin: 0 0 v.$half-note;
  }

  p {
    background-color: v.$terracotta;
    padding: v.$eighth-note;
    color: v.$magnolia;
    font-size: 1.25rem;
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    font-size: 1.5rem;
    color: v.$midnightgreen;
    margin-top: v.$eighth-note;
    padding-bottom: 0.5rem;
    text-decoration: none;

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
      padding-bottom: 0.25rem;
      border-bottom: solid v.$terracotta 0.25rem;
    }
  }

  a:hover::after, a:hover::before {
    animation: focus 250ms ease-out forwards;
  }

  @keyframes focus {
    100% {
      margin-left: 0;
      margin-right: 0;
    }
  }
</style>
