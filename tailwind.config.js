/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '2xl': { max: '1280px' },

      xl: { max: '1024px' },

      lg: { max: '836px' },

      md: { max: '768px' },

      sm: { max: '500px' },

      xs: { max: '375px' },

      s: { max: '320px' },
    },
    extend: {
      colors: {
        cYellow: '#FDAF0A',
        cGreen: '#022726',
        cSearch: '#A0B0B0',
        cTextGreen: '#173C3C',
        cSubmitButton: '#FDBA2D',
        cGray: '#D2DBDB',
      },
    },
  },
  plugins: [],
}
