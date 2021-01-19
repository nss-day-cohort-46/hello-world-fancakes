import { useLandmarks } from "./LandmarkDataProvider.js"
import { landmarkLi } from "./Landmark.js"

export const landmarkList = () => {
    const element = document.querySelector(".contentContainer")
    const landmarks = useLandmarks()

    let htmlRep = ""
    for (const landmark of landmarks) {
        htmlRep += landmarkLi(landmark)
    }
    
    return element.innerHTML += `
        <section class="contentContainer__listOfLandmarks">
            <h2>Landmarks to Visit</h2>
            <ul>
                ${htmlRep}
            </ul>
        </section>
    ` 

}
