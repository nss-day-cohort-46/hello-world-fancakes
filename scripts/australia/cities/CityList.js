import { useCities } from "./CityDataProvider.js"
import { cityLi } from "./City.js"

export const cityList = () => {
    const element = document.querySelector(".contentContainer")
    const cities = useCities()

    let htmlRep = ""
    for (const city of cities) {
        htmlRep += cityLi(city)
    }
    
    return element.innerHTML += `
        <section class="contentContainer__listOfCities">
            <h2>Must-See Cities</h2>
            <ul>
                ${htmlRep}
            </ul>
        </section>
    ` 

}
