<script>
  import { postsPerPage } from '$lib/config';

  export let currentPage;
  export let totalPosts;
  export let path = '/blog/page';

  let pagesAvailable;
  $: pagesAvailable = Math.ceil(totalPosts / postsPerPage);
</script>
