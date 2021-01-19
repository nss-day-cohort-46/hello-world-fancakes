import {useCelebrity} from "/scripts/canada/celebrities/CelebrityDataProvider.js"
import {Celebrity} from "/scripts/canada/celebrities/Celebrity.js"

export const celebrityList = () => {
    const contentElement = document.querySelector(".contentContainer")
    const allTheCelebrities = useCelebrity()
    let celebrityHTMLRepresentations= ""
    for (const celebrityObject of allTheCelebrities){
        celebrityHTMLRepresentations+=Celebrity(celebrityObject)
    }

    contentElement.innerHTML += `
    <section class="contentContainer__listOfCitizens">
        <h2>Famous People</h2>
            <ul>  
                ${celebrityHTMLRepresentations}
            </ul>
    </section>
    `
}