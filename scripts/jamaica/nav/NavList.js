import { useNav } from "./NavDataProvider.js"
import {Navigation} from "./NavBar.js"

export const NavList = () => {
    const contentElement = document.querySelector(".headerContainer")
    const navs = useNav()

    let navHtmlRepresentations = ""
    for (const nav of navs) {
        navHtmlRepresentations += Navigation(nav)



    }

  
    
   contentElement.innerHTML += `
       
        <div class="headerContainer">
            <h1>Jamaica</h1>
            <nav class="nav-bar">  
                ${navHtmlRepresentations}
            <nav>
        </div>
    `
}
