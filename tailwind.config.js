module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       fontFamily:{
       "Maven":['Maven Pro', 'sans-serif'] 
       },
       colors:{
         textColor:"#5b5b5b",
         secondryColor:"#47465A",
         grey:"#EEEEEE",

       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
   
   outline: false,
  }
}