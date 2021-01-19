export const Celebrity = (celeb) => {
    return `
    <section class="contentContainer__listOfCitizens">
            <h2>Famous People</h2>
            <ul>
                <li>${celeb.name}</li>
            </ul>
        </section>`
}