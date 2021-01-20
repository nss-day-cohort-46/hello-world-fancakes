const navData = [
    {
        href: "./index.html",
        name: "Home"
    },
    {
        href: "./australia.html",
        name: "Australia"
    },
    {
        href: "./canada.html",
        name: "Canada"
    },
    {
        href: "./jamaica.html",
        name: "Jamaica"
    },
    {
        href: "./japan.html",
        name: "Japan"
    }
]


export const useNavData = () => {
    return navData.slice()
}


// <nav>
//                 <ul class="nav-bar">
//                     <a class="nav-bar__item" href="./index.html">Home</a>
//                     <a class="nav-bar__item" href="./australia.html">Australia</a>
//                     <a class="nav-bar__item" href="./canada.html">Canada</a>
//                     <a class="nav-bar__item" href="./jamaica.html">Jamaica</a>
//                     <a class="nav-bar__item" href="./japan.html">Japan</a>
//                 </ul>
//             </nav>