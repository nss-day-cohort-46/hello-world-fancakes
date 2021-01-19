const jamaicaCities = [


    {
        name: "Kingston",
       
    },
    
    {
        name: "Montego Bay",
        
    },
    
    {
        name: "Negril",
        
    }
]

// exports useCity function; when called  (in a different comp) will return a copy of jamaicaCities in a new array. the state of the original data will not change.

export const useCity = () => {
    return jamaicaCities.slice()
}

// console.log("cites", jamaicaCities)
