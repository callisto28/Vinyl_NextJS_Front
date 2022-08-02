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
    fontSize: {
      xxxs: '0.5rem',
      xxs: '0.625rem',
      xs: '0.8rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      xxl: '1.5rem',
      xxxl: '1.875rem',
      xxxxl: '2.25rem',
    },


    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      philosopher: ['philosopher', 'sans-serif'],
      chelsea: ['Chelsea Market', 'cursive'],
    },

    extend: {
      backgroundImage: {
        "background": "#FBFCF8",
        "bg": "url('/bg.jpg')",
      },
      spacing: {
        '128': '32rem',
        '144': '40rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        'sable': '#e47911',
        'rougeCC': '#B86549',
        'blueCC': '#46A3E7',
        'blueNav': '#242650',
        'frost': {
          'start': '#000428',
          'end': '#004e92',
        },
        'green': {
          'start': '#e1eff6',
          'end': '#dfeaee',
        },
        'frost': {
          'start1': '#000428',
          'end1': '#004e92',
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
