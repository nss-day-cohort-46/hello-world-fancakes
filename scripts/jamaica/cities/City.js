// / Renders individual city object as HMTL , City function is exported and pass in city object(1 parameter); when called it will return HTML for 1 single city object
// the return is a string containing HTML

export const City = (city) => {
    return `

        <li>
        ${city.name}
        </li>
       
    
    `
}
