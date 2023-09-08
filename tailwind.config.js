import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,svelte,js,ts}'],
  theme: {
    colors: {
      orange: 'hsl(25, 97%, 53%)',
      white: 'hsl(0, 0%, 100%)',
      'light-grey': 'hsl(217, 12%, 63%)',
      'medium-grey': 'hsl(216, 12%, 54%)',
      's-dark-blue': 'hsl(213, 19%, 14%)',
      'dark-blue': 'hsl(213, 19%, 18%)',
      'very-dark-blue': 'hsl(216, 12%, 8%)',
    },
    fontFamily: {
      overpass: ['Overpass', ...defaultTheme.fontFamily.sans],
    },
  },
};
