<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch('/api/posts.json');
    const posts = await res.json();

    return {
      props: {
        posts: posts
      },
    };
  };
</script>

<script>
  import PostList from '$lib/components/PostList.svelte';

  export let posts;
</script>

<PostList {posts} />
