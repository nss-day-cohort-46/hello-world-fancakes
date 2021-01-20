export const Header = (header) => {
    return `
    <a class="nav-bar__item" href="${header.destination}">${header.text}</a>
    `
}