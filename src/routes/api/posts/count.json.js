export const get = async () => {
  try {
    const posts = import.meta.glob(`../../../lib/posts/*.md`);
    return {
      status: 200,
      body: {
        count: Object.keys(posts).length,
      },
    };
  } catch {
    return {
      status: 500,
      body: {
        error: 'Could not retrieve total number of posts.',
      },
    };
  }
};
