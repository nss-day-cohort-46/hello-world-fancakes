import {useCity} from "/scripts/canada/cities/CityDataProvider.js"
import {City} from "/scripts/canada/cities/City.js"

export const cityList = () => {
    const contentElement = document.querySelector(".contentContainer")
    const allTheCities = useCity()
    console.log(allTheCities,"logging all cities")
    let cityHTMLRepresentations = ""
    for (const cityObject of allTheCities){
        cityHTMLRepresentations += City(cityObject) }
       
        contentElement.innerHTML += `
    <section class="contentContainer__listOfCities">
        <h2>Must-See Cities</h2>
            <ul>  
                ${cityHTMLRepresentations}
            </ul>
    </section>
        `
   
}
