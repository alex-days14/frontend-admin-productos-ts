/** @type {import('tailwindcss').Config} */
 
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
        'sans': ["ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        'serif': ["ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        'mono': ['ui-monospace', 'SFMono-Regular', "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"]
    },
    extend: {
        colors:{
            slate: {
                50: "rgb(248 250 252)",
                100: "rgb(241 245 249)",
                200: "rgb(226 232 240)",
                300: "rgb(203 213 225)",
                400: "rgb(148 163 184)",
                500: "rgb(100 116 139)",
                600: "rgb(71 85 105)",
                700: "rgb(51 65 85)",
                800: "rgb(30 41 59)",
                900: "rgb(15 23 42)",
            },
            indigo: {
                50: "#eef2ff",
                100: "#e0e7ff",
                200: "#c7d2fe",
                300: "#a5b4fc",
                400: "#818cf8",
                500: "#6366f1",
                600: "#4f46e5",
                700: "#4338ca",
                800: "#3730a3",
                900: "#312e81",
            }
        }
    },
  },
  plugins: [],
};
