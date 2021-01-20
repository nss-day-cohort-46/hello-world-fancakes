const navBar = [
    {
       name: "Home",
        url: "./index.html"         
    },

    {
        name: "Australia",
        url: "./australia.html"         
     },

     {
        name: "Canada",
        url: "./canada.html"         
     },

     {
        name: "Jamaica",
        url: "./jamaica.html"         
     },

     {
        name: "Japan",
        url: "./japan.html"         
     }
]

export const useNav = () => {
    return navBar.slice()
}