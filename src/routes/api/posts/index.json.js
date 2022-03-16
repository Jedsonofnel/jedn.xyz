import moment from "moment";

export const get = async () => {
  try {
    let posts = await Promise.all(
      Object.entries(import.meta.glob('../../../posts/*.md')).map(
        async ([path, page]) => {
          const { metadata } = await page();
          const slug = path.split('/').pop().split('.').shift();
          return { ...metadata, slug };
        }
      )
    );

    let sortedPosts = posts.sort(
      (a, b) =>
        moment(b.publish_date, 'DD-MM-YYYY') -
        moment(a.publish_date, 'DD-MM-YYYY')
    );

    return {
      status: 200,
      body: sortedPosts,
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
