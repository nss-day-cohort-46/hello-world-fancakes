import { useCelebrities } from "./CelebrityDataProvider.js"
import { celebrityLi } from "./Celebrity.js"

export const celebrityList = () => {
    const element = document.querySelector(".contentContainer")
    const celebrities = useCelebrities()

    let htmlRep = ""
    for (const celeb of celebrities) {
        htmlRep += celebrityLi(celeb)
    }
    
    return element.innerHTML += `
        <section>
            <ul>
                ${htmlRep}
            </ul>
        </section>
    ` 

}
