<section id="portfolio">
  <h2>Portfolio:</h2>

  <ul class="projects">
    <li>
      <h3>
        <a class="project-link" href="https://www.hubdc.info/">hubdc.info</a>
        <a class="github-link" href="https://github.com/Jedsonofnel/hubdc">
          <i class="fa fa-github" />
        </a>
      </h3>

      <p>
        A little website for my school's Christian Union (known as The Hub) with
        an admin section used as a front end for the corresponding API. Built in
        svelte and I used JWT tokens for authentication.
      </p>
    </li>
    <li>
      <h3>
        hubdc api
        <a class="github-link" href="https://github.com/Jedsonofnel/hubdc-api">
          <i class="fa fa-github" />
        </a>
      </h3>

      <p>
        An API built in Golang used to power the event management system
        underneath the "hubdc.info" website - I used Postgresql for the database
        and gorilla/mux for routing.
      </p>
    </li>
  </ul>
</section>

<style lang="scss">
  h2 {
    font-size: 2rem;
    color: v.$fg;
  }

  .projects {
    list-style: none;
    line-height: 1;
  }

  .project-link {
    font-size: 1.75rem;
    font-style: normal;
  }

  .github-link {
    font-size: 1.75rem;
    font-style: normal;
  }
</style>
