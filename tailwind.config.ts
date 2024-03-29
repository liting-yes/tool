import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      typography: () => ({
        DEFAULT: {
          css: {
            'blockquote p:first-of-type::before': {
              content: '',
            },
            'blockquote p:last-of-type::after': {
              content: '',
            },
            'code': {
              'border-radius': '4px',
              'padding': '4px',
            },
            'code::before': {
              content: '',
            },
            'code::after': {
              content: '',
            },
          },
        },
      }),
    },
  },
}
