<script context="module">
  export const load = async ({ fetch }) => {
    const postRes = await fetch(`/api/posts.json`);
    const { posts } = await postRes.json();

    const countRes = await fetch(`/api/posts/count.json`);
    const { count } = await countRes.json();

    return {
      props: {
        posts,
        count,
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

<h2>Posts:</h2>

<PostList {posts} />
