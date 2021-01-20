const headerCollection =[
    {
        destination: "./index.html",
        text: "Home",
    },
    {
        destination:"./australia.html",
        text: "Australia"
    },
    {
        destination: "./canada.html",
        text: "Canada",
    },
    {
        destination: "./jamaica.html",
        text: "Jamaica",
    },
    {
        destination: "./japan.html",
        text: "Japan",
    },
]
export const useHeader = () => {
    return headerCollection.slice()
}