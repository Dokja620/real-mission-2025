import { paraglideVitePlugin } from '@inlang/paraglide-js';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from '@zerodevx/svelte-img/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit(),
    imagetools({
      profiles: {
        xs: new URLSearchParams('w=250;250;640&format=webp;jpg'),
        sm: new URLSearchParams('w=320;640;720&format=webp;jpg'),
        lg: new URLSearchParams('w=640;1280;1920&format=webp;jpg')
      }
    }),
    paraglideVitePlugin({
      project: './project.inlang',
      outdir: './src/lib/paraglide'
    })
  ]
});
