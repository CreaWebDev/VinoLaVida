/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    // extend: {},
    colors: {
      // vino la vida:
      turq: '#9FEDD7',
      petro: '#026670',
      soft: '#FEF9C7',
      softPink: '#F4D9DD',
      yellow: '#FCE181',
      red: '#842A37',
      gray: '#EDEAE5',
      // other
      golden: '#806543',
      black: "#000000",
      white: "#FFFFFF"
    },
    fontFamily: {
      'sans': ['Arial'],
      'display': ['Annie Use Your Telescope']
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite'
      },
      backgroundImage: {
        'bg-img-mobile': "url('/images/bg/bg_mobile.svg')",
        'bg-img': "url('/images/bg/bg.svg')",
      }
    },
  },
  plugins: [],
}

