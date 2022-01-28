import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],

  preprocess: [
    sveltePreprocess({
      scss: {
        prependData: `@use 'src/lib/styles/vars' as v;`,
      },
      postcss: {
        plugins: [autoprefixer],
      },
    }),
    mdsvex({
      extensions: ['.md'],
    }),
  ],

  kit: {
    target: '#svelte',
    adapter: adapter(),
  },
};

export default config;
