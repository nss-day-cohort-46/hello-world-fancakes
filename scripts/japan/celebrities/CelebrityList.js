import { useCelebrities } from "./CelebrityDataProvider.js"
import { Celebrity } from './Celebrity.js'

export const CelebrityList = () => {
    const contentElement = document.querySelector(".contentContainer")
    const celebrities = useCelebrities()

    let celebHTMLRepresentations = ""
    for (const celeb of celebrities) {
        celebHTMLRepresentations += Celebrity(celeb)
    }

    contentElement.innerHTML += `
    <section class ="celebList">
        <h2>Famous People</h2>
        <ul>
            ${celebHTMLRepresentations}
        </ul>
    </section>
    `
}