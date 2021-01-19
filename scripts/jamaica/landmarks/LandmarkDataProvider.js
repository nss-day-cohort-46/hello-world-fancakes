const jamaicaLandmarks = [


    {
        name: "Bob Marley Museum",
       
    },
    
    {
        name: "St. James Parish Church",
        
    },
    
    {
        name: "Dunn's River Falls & Park",
        
    }
]

// exports useCity function; when called  (in a different comp) will return a copy of jamaicaCities in a new array. the state of the original data will not change.

export const useLandmark = () => {
    return jamaicaLandmarks.slice()
}

// console.log("landmarks", jamaicaLandmarks)
