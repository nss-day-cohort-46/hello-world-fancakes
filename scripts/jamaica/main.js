
import {useCeleb} from './celebrities/CelebrityDataProvider.js'
import { CelebrityList } from './celebrities/CelebrityList.js'
import {useCity} from './cities/CityDataProvider.js'
import { CityList } from './cities/CityList.js'
import {useLandmark} from './landmarks/LandmarkDataProvider.js'
import { LandmarkList } from './landmarks/LandmarkList.js'
import {NavList} from './nav/NavList.js'

const allTheCeleb = useCeleb ()
// console.log("new array of celebs", allTheCeleb)

const allTheCity = useCity ()
// console.log("new array of cities", allTheCity)

const alltheLandmark = useLandmark()
// console.log("new array of landmarks", alltheLandmark)

NavList ()
CityList ()
LandmarkList ()
CelebrityList ()