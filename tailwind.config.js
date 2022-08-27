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
      gridTemplateColumns: {
        dailyForecast: 'repeat(auto-fit, 128px)',
        appMedium: '400px 1fr',
        appDesktop: '500px minmax(0, 1fr)',
        todaysWeatherDetails: 'repeat(2, minmax(0, 380px))',
      },
      gridTemplateRows: {
        appDesktop: 'auto 1fr',
      },
      screens: {
        desktop: '1350px',
      },
    },
  },
  plugins: [],
};
