import { useCelebrities } from "./CelebrityDataProvider"

export const CelebrityList = () => {
    const contentElement = document.querySelector(".contentContainer")
    const celebrities = useCelebrities()

    contentElement.innerHTML += `
    <article class ="celebList">
    <h2>Famous People</h2>
    <ul>
        <li>${celeb.name}</li>
    </ul>
    </article>
    `
}