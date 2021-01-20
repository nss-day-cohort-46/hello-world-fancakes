import { useNavData } from "./NavDataProvider.js"
import { Nav } from './Nav.js'

export const NavList = () => {
    const contentElement = document.querySelector(".headerContainer")
    const navs = useNavData()

    let navHTMLRepresentations = ""
    for (const nav of navs) {
        navHTMLRepresentations += Nav(nav)
    }

    contentElement.innerHTML += `
    <nav class="nav-bar">
        ${navHTMLRepresentations}
    </nav>
    `
}
