module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        front: '#1E213A',
        background: '#100E1D',
        white: '#E7E7EB',
        yellow: '#FFEC65',
        gray: '#88869D',
        deepGray: '#6E707A',
        purple: '#3C47E9',
      },
      fontFamily: {
        raleway: 'Raleway',
      },
      backgroundImage: {
        cloud: "url('/src/assets/Cloud-background.png')",
      },
      backgroundPosition: {
        test: '0% 20%',
      },
    },
  },
  plugins: [],
};
