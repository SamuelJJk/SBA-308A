//fetch request
const body = document.querySelector('body')
const CPContainer = document.querySelector('.catPic') 
const CFContainer = document.querySelector('.catFact')
const DPContainer =document.querySelector('.dogPic')
const DFContainer = document.querySelector('.dogFact')

import {randNum} from "./func.mjs"
import {getRandomFact as myDogFacts} from './data.mjs'
import defaultFunc from './data.mjs'

export async function getCatPic(){
    const reponse = await fetch("https://api.thecatapi.com/v1/images/search")
    const catPic = await reponse.json();
    // console.log(catPic);
    // console.log(catPic[0].url);
    let image = document.createElement('img');
    image.setAttribute('src', catPic[0].url)
    CPContainer.appendChild(image)

}

export async function catFacts(){
    fetch('https://catfact.ninja/facts')
        .then((reponse) => reponse.json())
        .then((json) => {
            // console.log(json)
            CFContainer.append(json.data[randNum()].fact)
        })
    .catch ((error) => {
        console.log('error with fetch')
    })
}

export async function getDogPic(){
    let data = await fetch('https://dog.ceo/api/breeds/image/random')
    let doggiePic = await data.json();
    // console.log(doggiePic.message)
    let image = document.createElement('img')
    image.setAttribute('src',doggiePic.message)
    DPContainer.appendChild(image)
}

export async function getDogFact (){
    fetch('http://dog-api.kinduff.com/api/facts')   
        .then((reponse) => reponse.json)
        .then((json) =>{
            console.log(json)
        })
    .catch((error)=> {
        //note to grader, the dog's fact api is not working so this just fact I found on the internet
        DFContainer.append(defaultFunc())
    })
}
