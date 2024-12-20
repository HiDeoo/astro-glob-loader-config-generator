import { defineConfig } from 'astro/config'
import expressiveCode from 'astro-expressive-code'

export default defineConfig({
  integrations: [
    expressiveCode({
      themes: ['houston'],
      styleOverrides: {
        borderColor: 'var(--color-zinc-600)',
        borderRadius: '0',
        borderWidth: 'var(--size-px)',
        codeBackground: 'var(--color-zinc-800)',
        frames: {
          editorActiveTabBackground: 'var(--color-zinc-800)',
          editorActiveTabIndicatorTopColor: 'var(--color-purple-400)',
          editorTabBarBackground: 'var(--color-zinc-700)',
          frameBoxShadowCssValue: 'none',
        },
      },
    }),
  ],
  site: 'https://astro-glob-loader-config-generator.netlify.app/',
})
