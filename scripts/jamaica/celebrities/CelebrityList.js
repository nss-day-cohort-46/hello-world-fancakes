import {useCeleb} from "./CelebrityDataProvider.js"
import {Celebrity} from "./Celebrity.js"

export const CelebrityList = () => {

 const contentElement = document.querySelector(".contentContainer__listOfCitizens")
    const celebs = useCeleb()
    

let celebHTMLRepresentations = ""
for (const celeb of celebs) {

    celebHTMLRepresentations += Celebrity(celeb)
}

// console.log("CelebList",celebHTMLRepresentations)

contentElement.innerHTML += `
<section class="contentContainer__listOfCitizens">
<h2>Famous People</h2>
    ${celebHTMLRepresentations}
    </section>
`

}
