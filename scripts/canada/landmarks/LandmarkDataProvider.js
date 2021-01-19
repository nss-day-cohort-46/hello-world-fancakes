const landmarkCollection =[
    {
        name: "Baniff National Park",
    },
    {
        name: "CN Tower",
    },
    {
        name: "Stanley Park",
    },
]
export const useLandmark = () => {
    return landmarkCollection.slice()
}