/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "r1/2" : "48%"
      },
      keyframes : {
        "fadInUp": {
          from : {
            opacity: 0,
            transform: "translateY(30px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0px)",
          }
        }
      },
      animation : {
        "fadInUp" : "fadInUp 700ms ease-in-out forwards"
      }
    },
  },
  plugins: [],
}

