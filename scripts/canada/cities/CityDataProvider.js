const cityCollection =[
    {
        name: "Toronto", 
    },
    {
        name: "Vancouver", 
    },
    {
        name: "Montreal", 
    },
]
export const useCity = () => {
    return cityCollection.slice()
}