import {useHeader} from "/scripts/canada/header/HeaderDataProvider.js"
import {Header} from "/scripts/canada/header/Header.js"

export const headerList = () => {
    const contentElement = document.querySelector(".headerContainer")
    const allTheHeader = useHeader()
    let headerHTMLRepresentation = ""
    for (const header of allTheHeader){
        headerHTMLRepresentation += Header(header)
    }
    contentElement.innerHTML += `
    <nav class="nav-bar"> 
            ${headerHTMLRepresentation}
    </nav>
    `
}