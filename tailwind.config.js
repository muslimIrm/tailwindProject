/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],  // تأكد أن المسار صحيح
    theme: {
      extend: {
        colors: {
          primary: "#F53838",
          secondary: "rgba(245, 56, 56, 0.35)",
          primaryText: "#4F5665",
          headingText: "#0B132A",
        },
      },
    },
    plugins: [],
  };
  