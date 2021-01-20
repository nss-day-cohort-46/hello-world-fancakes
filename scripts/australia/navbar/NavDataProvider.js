const navDetails = [
    {
       name: "Home",
       link: "./index.html"         
    },

    {
        name: "Australia",
        link: "./australia.html"         
     },

     {
        name: "Canada",
        link: "./canada.html"         
     },

     {
        name: "Jamaica",
        link: "./jamaica.html"         
     },

     {
        name: "Japan",
        link: "./japan.html"         
     }
]

export const useNav = () => {
    return navDetails.slice()
}