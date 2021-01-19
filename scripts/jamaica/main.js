
import {useCeleb} from './celebrities/CelebrityDataProvider.js'
import {useCity} from './cities/CityDataProvider.js'
import { CityList } from './cities/CityList.js'
import {useLandmark} from './landmarks/LandmarkDataProvider.js'

const allTheCeleb = useCeleb ()
// console.log("new array of celebs", allTheCeleb)

const allTheCity = useCity ()
// console.log("new array of cities", allTheCity)

const alltheLandmark = useLandmark()
// console.log("new array of landmarks", alltheLandmark)

CityList ()