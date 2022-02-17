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
        category: currentCategory,
      },
    };
  };
</script>

<script>
  import PostList from '$lib/components/PostList.svelte';

  export let posts;
  export let category;
</script>

<h2>Posts With Category: <span class="category">{category}</span></h2>

<PostList {posts} />

<style lang="scss">
  .category {
    color: v.$bg;
    font-style: italic;
    font-weight: normal;

    background-color: v.$terracotta;
    padding: 0 v.$eighth-note;
  }
</style>
