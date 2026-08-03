module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"] ,
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
        accent: '#06b6d4'
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
}
