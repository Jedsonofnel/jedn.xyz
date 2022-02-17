<script>
  export let posts = [];
</script>

<ul>
  {#each posts as post}
    <li>
      <h3>
        <a href="/blog/{post.slug}">
          <span class="title">{post.title}</span>
        </a>
      </h3>
      <div class="details">
        <span class="date">
          Published: {post.publish_date}
        </span>
        {#each post.categories as category}
          <span class="category">
            <a href="/blog/category/{category}">
              {category}
            </a>
          </span>
        {/each}
      </div>
    </li>
  {/each}
</ul>

<style lang="scss">
  ul {
    list-style: none;
    line-height: 1;
  }

  li {
    display: flex;
    flex-direction: column;

    padding-left: v.$eighth-note;
    border-left: v.$cadetblue solid v.$sixteenth-note;
  }

  li + li {
    margin-top: v.$quarter-note;
  }

  h3 {
    margin: 0 0 v.$eighth-note 0;
  }

  .title {
    font-style: normal;
    font-size: 1.75rem;
  }

  .details {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;

    color: v.$fg;
    font-size: 1.25rem;
    line-height: 1.5;
  }

  .date {
    margin-right: v.$sixteenth-note;
  }

  .category {
    color: v.$bg;

    background-color: v.$terracotta;
    margin-right: v.$sixteenth-note;
    padding: 0 v.$sixteenth-note;
  }
</style>
