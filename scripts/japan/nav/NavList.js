import { useNavData } from "./NavDataProvider.js"
import { Nav } from './Nav.js'

export const NavList = () => {
    const contentElement = document.querySelector(".nav-bar")
    const navs = useNavData()

    let navHTMLRepresentations = ""
    for (const nav of navs) {
        navHTMLRepresentations += Nav(nav)
    }

    contentElement.innerHTML += `
                        <a class="nav-bar__item"${navHTMLRepresentations}</a>
    `
}

// <a class="nav-bar__item" href="./index.html">Home</a>
//                     <a class="nav-bar__item" href="./australia.html">Australia</a>
//                     <a class="nav-bar__item" href="./canada.html">Canada</a>
//                     <a class="nav-bar__item" href="./jamaica.html">Jamaica</a>
//                     <a class="nav-bar__item" href="./japan.html">Japan</a>