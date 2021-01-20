import { useNav } from "./NavDataProvider.js"
import { navSection } from "./Nav.js"

export const navList = () => {
    const element = document.querySelector(".header")
    const nav = useNav()

    let navHtml = ""
    for (const navItem of nav) {
        navHtml += navSection(navItem)
    }
    return element.innerHTML += `
        <img class="logo" src="./images/HelloWorldLogo.png" alt="logo">
        <div class="headerContainer">
            <h1>Australia</h1>
            <nav class="nav-bar">  
                ${navHtml}
            <nav>
        </div>
    `
}
