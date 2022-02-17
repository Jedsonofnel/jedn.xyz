<a class="logolink" href="/">
  <span class="material-icons-round">cottage</span>
  <h3>Jed's Hut</h3>
</a>

<style lang="scss">
  .logolink {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 v.$quarter-note 0 0;
    width: 11rem;
    text-decoration: none;

    &:hover,
    &:active {
      h3 {
        text-decoration-style: double;
      }
    }
  }

  span {
    color: v.$terracotta;
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: bold;
    font-style: normal;
    color: v.$fg;
    margin: 0;
    text-decoration: underline;
    text-decoration-color: v.$cadetblue;
  }
</style>
