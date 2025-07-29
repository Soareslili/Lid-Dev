/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
  extend: {
    animation: {
      'gradient-x': 'gradientX 6s ease infinite',
    },
     maxWidth: {
        container: "1280px",
      },
       animation: {
        marquee: 'marquee var(--duration) linear infinite',
      },
     
    keyframes: {
      gradientX: {
        '0%, 100%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
      },
    },
    backgroundSize: {
      '200': '200% 200%',
    },
  },
},
}
