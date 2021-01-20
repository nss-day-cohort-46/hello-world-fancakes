import { useCities } from './CityDataProvider.js'
import { City } from './City.js'

export const CityList = () => {
    const contentElement = document.querySelector(".contentContainer")
    const cities = useCities()

    let cityHTMLRepresentations = ""
    for (const city of cities) {
        cityHTMLRepresentations += City(city)
    }

    contentElement.innerHTML += `
    <section class ="cityList">
        <h2>Must-See Cities</h2>
        <ul>
            ${cityHTMLRepresentations}
        </ul>
    </section>
    `
}