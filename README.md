using tailwind css in react flow these step 
1. Go google and search tailwind css
2. Click on get started
3. go to framework guide
4. click on vite
5. use these command synchronously

Installation

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

6. after installing the pakages
7. go to tailwind.config.js

change theme

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

Alert 

if you dont change the setting the tailwind was not applied on react

8. go to css file paste this

@tailwind base;
@tailwind components;
@tailwind utilities;

9. then restart the website using this command

npm run dev