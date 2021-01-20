// / Renders individual celeb object as HMTL , Celebrity function is exported and pass in celeb object(1 parameter); when called it will return HTML for 1 single celeb object
// the return is a string containing HTML

export const Celebrity = (celeb) => {
    return `

        <li>
        ${celeb.name}
        </li>
    `
}