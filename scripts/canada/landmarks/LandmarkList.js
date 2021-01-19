import {useLandmark} from "/scripts/canada/landmarks/LandmarkDataProvider.js"
import {Landmark} from "/scripts/canada/landmarks/Landmark.js"

export const landmarkList = () => {
    const contentElement = document.querySelector(".contentContainer")
    const allTheLandmarks = useLandmark()
    let landmarkHTMLRepresentation = ""
    for (const landmark of allTheLandmarks){
        landmarkHTMLRepresentation += Landmark(landmark)
    }
    contentElement.innerHTML += `
    <section class="contentContainer__listOfCitizens">
        <h2>Famous People</h2>
        <ul>  
            ${landmarkHTMLRepresentation}
        </ul>
    </section>
    `
}