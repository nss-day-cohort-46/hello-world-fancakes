export const Navigation = (nav) => {
    return `
    <a class="nav-bar__item" href=${nav.url}>${nav.name}</a>
    `
}