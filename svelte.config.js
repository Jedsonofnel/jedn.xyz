import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
  },

  extensions: ['.svelte', '.md'],

  preprocess: [
    sveltePreprocess({
      scss: {
        prependData: `@use 'src/lib/styles/vars.scss' as v;`,
      },
      postcss: {
        plugins: [autoprefixer],
      },
    }),
    mdsvex({
      extensions: ['.md'],
    }),
  ],
};

export default config;
