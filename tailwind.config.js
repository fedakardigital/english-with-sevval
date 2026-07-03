/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFB6C1",
        primaryHover: "#FF9AA2",
        softBg: "#FFF9FB",
        textDark: "#4A4A4A",
      },
      // Kelebeğin uçuş hızını ve döngüsünü ayarlayan animasyon
      animation: {
        'fly': 'fly 10s linear infinite',
      },
      // Kelebeğin havada izleyeceği rotayı belirleyen keyframe yapıları
      keyframes: {
        fly: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(100px, -50px) rotate(10deg)' },
          '50%': { transform: 'translate(200px, 0) rotate(0deg)' },
          '75%': { transform: 'translate(100px, 50px) rotate(-10deg)' },
        },
      },
    },
  },
  plugins: [],
};