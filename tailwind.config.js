const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js, jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'courier': ['Courier', ...defaultTheme.fontFamily.sans],
      },
      width: {
        '89': '336px',
        'full-extend': 'calc(100% + 80px)',
      },
      minWidth: {
        '89': '336px',
      }
    }
  },
  plugins: [],
};
