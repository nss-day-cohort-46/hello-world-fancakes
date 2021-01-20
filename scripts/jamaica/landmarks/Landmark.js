
// / Renders individual landmark object as HMTL , Landmark function is exported and pass in landmark object(1 parameter); when called it will return HTML for 1 single landmark object
// the return is a string containing HTML

export const Landmark = (landmark) => {
    return `

        <li>
        ${landmark.name}
        </li>
    `
}