/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
     "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors:{'pure-red':'#FF0000','sachu':'#5D4037'},
       backgroundImage:{'oh':"url('/5blog/src/photos/lake.jpg')"},
      fontWeight:{
        'bb':600
      }
    },
    fontFamily:{
      bebas:['bebas Neue','sans-serif'],
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia',],
      mono: ['ui-monospace', 'SFMono-Regular', ],
      redhat:[],
      display: ['Oswald', ],
      body: ['"Open Sans"',],
    },
   screens:{
      'new':'400px',
      'tab': '640px',
      // => @media (min-width: 640px) { ... }

      'lap': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
   }
  },
  plugins: [],
  darkMode:"selector"
}

