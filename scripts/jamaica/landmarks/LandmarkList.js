import {useLandmark} from "./LandmarkDataProvider.js"
import {Landmark} from "./Landmark.js"

export const LandmarkList = () => {

 const contentElement = document.querySelector(".contentContainer__listOfLandmarks")
    const landmarks = useLandmark()
    

let landmarkHTMLRepresentations = ""
for (const landmark of landmarks) {

    landmarkHTMLRepresentations += Landmark(landmark)
}

// console.log("LandmarkList",landmarkHTMLRepresentations)

contentElement.innerHTML += `
<section class="contentContainer__listOfLandmarks">
<h2>Landmarks to Visit</h2>
    ${landmarkHTMLRepresentations}
    </section>
`

}
