import { useLandmarks } from "./LandmarkDataProvider.js"
import { Landmark } from './Landmark.js'

export const LandmarkList = () => {
    const contentElement = document.querySelector(".contentContainer")
    const landmarks = useLandmarks()

    let landmarkHTMLRepresentations = ""
    for (const landmark of landmarks) {
        landmarkHTMLRepresentations += Landmark(landmark)
    }

    contentElement.innerHTML += `
    <section class ="celebList">
        <h2>Landmarks to Visit</h2>
        <ul>
            ${landmarkHTMLRepresentations}
        </ul>
    </section>
    `
}