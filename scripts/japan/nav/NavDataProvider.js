const navData = [
    {
        href: "./index.html",
        name: "Home"
    },
    {
        href: "./australia.html",
        name: "Australia"
    },
    {
        href: "./canada.html",
        name: "Canada"
    },
    {
        href: "./jamaica.html",
        name: "Jamaica"
    },
    {
        href: "./japan.html",
        name: "Japan"
    }
]


export const useNavData = () => {
    return navData.slice()
}

