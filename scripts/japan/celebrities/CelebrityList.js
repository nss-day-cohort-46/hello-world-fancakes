import { useCelebrities } from "./CelebrityDataProvider"
import { Celebrity } from './celebrities/Celebrity.js'

export const CelebrityList = () => {
    const contentElement = document.querySelector(".contentContainer")
    const celebrities = useCelebrities()

    let celebHTMLRepresentations = ""
    for (const celeb of celebrities) {contentElement.innerHTML += `
    <article class ="celebList">
    <h2>Famous People</h2>
    <ul>
        <li>${celebHTMLRepresentations}</li>
    </ul>
    </article>
    `}

    
}