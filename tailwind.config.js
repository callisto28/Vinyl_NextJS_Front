const plugin = require('tailwindcss/plugin')

// tailwind.config.js

module.exports = {

  content: [
    './pages/**/*.{html,js,ts,tsx}',
    './components/**/*.{html,js,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],

  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1281px'
    },

    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      philosopher: ['philosopher', 'sans-serif'],
      chelsea: ['Chelsea Market', 'cursive'],
    },

    extend: {
      backgroundImage: {
        "background": "#fff",
      },
      spacing: {
        '128': '32rem',
        '144': '40rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        'sable': '#E1CDA1',
        'turquoise': '#3ADCDC',
        'blueCC': '#46A3E7',
        'blueNav': '#242650',
        'frost': {
          'start': '#000428',
          'end': '#004e92',
        },
        'green': {
          'start': '##D3CCE3',
          'end': '#E9E4F0',
        },
        'frost': {
          'start': '#000428',
          'end': '#004e92',
        },
      }
    },

    variants: {
      extend: {
        backgroundColor: ['active'],
        backgroundImage: ['active'],
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('flowbite/plugin'),

      plugin(function ({ addBase, theme }) {
        addBase({
          'h1': { fontSize: theme('text-blue') },
          'h2': { fontSize: theme('fontSize.xl') },
          'label': { fontSize: theme('fontSize.lg') },
        })
      })
    ]

  },

}
