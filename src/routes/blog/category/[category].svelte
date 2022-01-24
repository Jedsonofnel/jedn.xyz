<script context="module">
  export const load = async ({ params, fetch }) => {
    const currentCategory = params.category;
    const response = await fetch('/api/posts.json');
    const posts = await response.json();

    const matchingPosts = posts.filter((post) =>
      post.categories.includes(currentCategory)
    );

    return {
      props: {
        posts: matchingPosts,
      },
    };
  };
</script>

<script>
  import PostList from '$lib/components/PostList.svelte';

  export let posts;
</script>

<PostList {posts} />
