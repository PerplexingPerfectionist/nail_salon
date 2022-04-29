module.exports = {
  content: ['./*.html', './js/*.js'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brightPink: '#FF008E',
        darkPink: '#D22779',
        purple: '#612897',
        navyBlue: '#0C1E7F'
      },
      backgroundImage: {
        'split-trans-pink': 'linear-gradient(to right, transparent 40%, rgb(251 207 232) 40%)'
      }
    },
  },
  plugins: [],
}
