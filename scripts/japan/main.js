import { useCelebrities } from './celebrities/CelebrityDataProvider.js'
import { useCities } from './cities/CityDataProvider.js'
import { useLandmarks } from './landmarks/LandmarkDataProvider.js'


const allTheCelebrities = useCelebrities()

for (const celeb of allTheCelebrities) {
    console.log(celeb)
}

const allTheCities = useCities()

for (const city of allTheCities) {
    console.log(city)
}

const allTheLandmarks = useLandmarks()

for (const landmark of allTheLandmarks) {
    console.log(landmark)
}