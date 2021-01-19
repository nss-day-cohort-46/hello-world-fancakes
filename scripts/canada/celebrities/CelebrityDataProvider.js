const celebrityCollection =[
    {
        name: "Jim Carrey",
    },
    {
        name: "Keanu Reeves",
    },
    {
        name: "Pamela Anderson",
    }
]
export const useCelebrity = () => {
    return celebrityCollection.slice()
}