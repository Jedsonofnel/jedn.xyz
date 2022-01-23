import { postsPerPage } from '$lib/config';
import fetchPosts from '$lib/scripts/fetchPosts';

export const get = async ({ url }) => {
  try {
    const params = new URLSearchParams(url.search);

    const options = {
      offset: parseInt(params.get('offset')) || null,
      limit: parseInt(params.get('limit')) || postsPerPage,
    };

    const { posts } = await fetchPosts(options);

    return {
      status: 200,
      body: {
        posts,
      },
    };
  } catch (error) {
    return {
      status: 500,
      body: {
        error: 'Could not fetch posts. ' + error,
      },
    };
  }
};
