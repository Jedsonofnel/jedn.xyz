<script>
  export let posts = [];
</script>

<ul>
  {#each posts as post}
    <li>
      <h2>
        <a href="/">
          {post.title}
        </a>
      </h2>
      Published {post.publish_date}
    </li>
  {/each}
</ul>
