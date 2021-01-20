import { useCelebrities } from './celebrities/CelebrityDataProvider.js'
import { useCities } from './cities/CityDataProvider.js'
import { useLandmarks } from './landmarks/LandmarkDataProvider.js'
import { CelebrityList } from './celebrities/CelebrityList.js'
import { CityList } from './cities/CityList.js'
import { LandmarkList } from './landmarks/LandmarkList.js'


CityList()
LandmarkList()
CelebrityList()


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