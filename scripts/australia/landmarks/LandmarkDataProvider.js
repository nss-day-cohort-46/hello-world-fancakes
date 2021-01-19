const landmarkData = [
    {
        name: "Sydney Opera House"
    },

    {
        name: "Australian Outback"
    },

    {
        name: "Royal Botanic Gardens"
    }
]

export const useLandmarks = () => {
    return landmarkData.slice()
}