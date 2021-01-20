import {useCity} from "./CityDataProvider.js"
import {City} from "./City.js"

export const CityList = () => {

 const contentElement = document.querySelector(".contentContainer__listOfCities")
    const cities = useCity()
    

let cityHTMLRepresentations = ""
for (const city of cities) {

    cityHTMLRepresentations += City(city)
}

// console.log("CityList",cityHTMLRepresentations)

contentElement.innerHTML += `
<section class="contentContainer__listOfCities">
<h2>Must-See Cities</h2>
    ${cityHTMLRepresentations}
    </section>
`

}
