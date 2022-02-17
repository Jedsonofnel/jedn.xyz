<script>
  import PostList from './PostList.svelte';

  export let posts = [];
  posts = posts.slice(0, 4);
</script>

<section id="recent">
  <h2>Recent posts:</h2>
  <PostList {posts} />
</section>
