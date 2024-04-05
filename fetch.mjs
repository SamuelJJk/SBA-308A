//fetch request
const body = document.querySelector('body')

export async function getCatPic(){
    const reponse = await fetch("https://api.thecatapi.com/v1/images/search")
    const catPic = await reponse.json();
    console.log(catPic);
    console.log(catPic[0].url);

}

export async function catFacts() {
    fetch('https://catfact.ninja/facts')
        .then((reponse) => reponse.json())
        .then((json) => {
            console.log(json)
        })
    .catch ((error) => {
        console.log('error with fetch')
    })
}