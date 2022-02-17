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
  <div class="front-matter">
    <h1>{title}</h1>

    <aside class="details">
      <p class="detail">
        Published: <span class="actual-detail-lol">{publish_date}</span>
      </p>

      <p class="detail">
        Author: <span class="actual-detail-lol">{siteAuthor}</span>
      </p>

      {#if categories}
        <ul class="categories">
          {#each categories as category}
            <li class="category">
              <a href="/blog/category/{category}">
                {category}
              </a>
            </li>
          {/each}
        </ul>
      {/if}
    </aside>
  </div>

  <svelte:component this={PostContent} />

</article>

<style lang="scss">
  h1 {
    display: block;
    font-size: 3rem;
    font-family: v.$sans;
    color: v.$fg;
    line-height: 1.0;
  }

  .front-matter::after {
    content: '';
    width: 10rem;
    display: block;
    padding: 0;
    border-bottom: v.$cadetblue v.$eighth-note dotted;

    margin: v.$half-note 0 v.$half-note 0;
  }

  .details {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    margin-top: v.$quarter-note;
  }

  .detail {
    font-size: 1.25rem;
    margin-bottom: v.$sixteenth-note;
  }

  .actual-detail-lol {
    color: v.$bg;
    background-color: v.$cadetblue;
    padding: 0 v.$sixteenth-note;
  }

  .categories {
    list-style: none;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .category {
    color: v.$bg;
    font-size: 1.25rem;

    background-color: v.$terracotta;
    margin-right: v.$sixteenth-note;
    padding: 0 v.$sixteenth-note;

    a {
      color: inherit;
      font-style: italic;
      text-decoration: underline;

      &:hover,
      &:active {
        text-decoration-style: double;
      }
    }
  }
</style>
