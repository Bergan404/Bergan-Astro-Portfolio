import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import { templateCompilerOptions } from '@tresjs/core';

// https://astro.build/config
export default defineConfig({
    integrations: [vue({ ...templateCompilerOptions }), tailwind()],
    site: 'https://berganoudshoorn.net',
});
