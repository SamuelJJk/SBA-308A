//fetch request
const body = document.querySelector('body')
const CPContainer = document.querySelector('.catPic') 
const CFContainer = document.querySelector('.catFact')

import { randNum} from "./func.mjs"

export async function getCatPic(){
    const reponse = await fetch("https://api.thecatapi.com/v1/images/search")
    const catPic = await reponse.json();
    // console.log(catPic);
    // console.log(catPic[0].url);
    let image = document.createElement('img');
    image.setAttribute('src', catPic[0].url)
    CPContainer.appendChild(image)

}

export async function catFacts() {
    fetch('https://catfact.ninja/facts')
        .then((reponse) => reponse.json())
        .then((json) => {
            console.log(json)
            CFContainer.append(json.data[randNum()].fact)
        })
    .catch ((error) => {
        console.log('error with fetch')
    })
}