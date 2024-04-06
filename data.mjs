import { randNum } from "./func.mjs"
const dogFacts = [
    'A dog’s nose print is unique, much like a person’s fingerprint.',
    'Forty-five percent of U.S. dogs sleep in their owner’s beds.',
    'Dogs’ noses can sense heat and thermal radiation, which explains why blind or deaf dogs can still hunt',
    'Dogs are not color-blind. They can see blue and yellow.',
    'According to Guinness World Records, a Great Dane named Zeus is the world’s tallest male dog. Zeus is 3 feet, 5.18 inches tall.',
    'Seventy percent of people sign their dog’s name on their holiday cards.',
    'According to Guinness World Records, the shortest dog ever recorded was Pearl the Chihuahua. She measures 3.59 inches tall.',
    'Dogs dream like people',
    'Tail wagging has its own language',
    'Dogs have a “sixth sense”'
]
export function getRandomFact(){
    console.log( dogFacts[randNum()])
    return dogFacts[randNum()]
   
}



export default function(){
    return dogFacts[randNum()]

}