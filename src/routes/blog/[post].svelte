<script context="module">
  export const load = async ({ params }) => {
    try {
      const post = await import(`../../posts/${params.post}.md`);

      return {
        props: {
          PostContent: post.default,
          meta: { ...post.metadata, slug: params.post },
        },
      };
    } catch (error) {
      return {
        status: 404,
        error: error.message,
      };
    }
  };
</script>

<script>
  import { siteAuthor } from '$lib/config';
  export let PostContent;
  export let meta;

  const { title, excerpt, publish_date, categories } = meta;
</script>

<svelte:head>
  <title>{title}</title>
  <meta data-key="description" name="description" content={excerpt} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={excerpt} />
</svelte:head>

<article>
  <h1>{title}</h1>

  <p>Published: {publish_date}</p>
  <p>Author: {siteAuthor}</p>

  <svelte:component this={PostContent} />

  {#if categories}
    <aside>
      <h2>Posted in:</h2>
      <ul>
        {#each categories as category}
          <li>
            {category}
          </li>
        {/each}
      </ul>
    </aside>
  {/if}
</article>
