export const navSection = (navObj) => {
    return `
    <a class="nav-bar__item" href=${navObj.link}>${navObj.name}</a>
    `
}