import { useCelebrities } from "./CelebrityDataProvider"

export const CelebrityList = () => {
    const contentElement = document.querySelector(".contentContainer")
    const celebrities = useCelebrities()

    contentElement.innerHTML += `
    <article class ="celebList">
        
    </article>
    `
}