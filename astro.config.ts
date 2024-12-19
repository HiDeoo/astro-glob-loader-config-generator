import { defineConfig } from 'astro/config'
import expressiveCode from 'astro-expressive-code'

export default defineConfig({
  integrations: [
    expressiveCode({
      // TODO(HiDeoo)
      themes: ['dracula'],
    }),
  ],
  site: 'https://astro-glob-loader-config-generator.netlify.app/',
})
