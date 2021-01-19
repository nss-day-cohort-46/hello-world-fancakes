const jamaicaCelebs = [


    {
        name: "Usain Bolt",
       
    },
    
    {
        name: "Grace Jones",
        
    },
    
    {
        name: "Bob Marley",
        
    }
]

// exports useCeleb function; when called  (in a different comp) will return a copy of jamaicaCelebs in a new array. the state of the original data will not change.

export const useCeleb = () => {
    return jamaicaCelebs.slice()
}

// console.log("celebs", jamaicaCelebs)
