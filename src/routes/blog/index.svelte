<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch(`/api/posts.json`);
    const posts = await res.json();

    return {
      props: {
        posts,
      },
    };
  };
</script>

<script>
  import PostList from '$lib/components/PostList.svelte';
  import { siteDescription } from '$lib/config';

  export let posts;
</script>

<svelte:head>
  <title>Blog</title>
  <meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<h2>My Blog Posts:</h2>

<PostList {posts} />
