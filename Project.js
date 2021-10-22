"use strict"

let randomNumber0to9=Math.floor(Math.random() * 10)
function randomDestination(theRandomNumber){            // Tested function. Works properly.
    if(theRandomNumber===0){
        return "Houston"
    }
    else if(theRandomNumber===1){
        return "Chicago"
    }
    else if(theRandomNumber===2){
        return "Duluth"
    }
    else if(theRandomNumber===3){
        return "San Diego"
    }
    else if(theRandomNumber===4){
        return "Salem"
    }
    else if(theRandomNumber===5){
        return "Miami"
    }
    else if(theRandomNumber===6){
        return "Phoenix"
    }
    else if(theRandomNumber===7){
        return "Cleveland"
    }
    else if(theRandomNumber===8){
        return "New York City"
    }
    else{
        return "Jacksonville"
    }
}
let randomDestination10=randomDestination(randomNumber0to9)

let randomNumber0to7=Math.floor(Math.random() * 8)
function randomRestaurant(theRandomNumber){               // Tested function. Works properly.
    if(theRandomNumber===0){
        return "McDonald's"
    }
    else if(theRandomNumber===1){
        return "Wendy's"
    }
    else if(theRandomNumber===2){
        return "Burger King"
    }
    else if(theRandomNumber===3){
        return "Taco Bell"
    }
    else if(theRandomNumber===4){
        return "Subway"
    }
    else if(theRandomNumber===5){
        return "Jack in the Box"
    }
    else if(theRandomNumber===6){
        return "White Castle"
    }
    else{
        return "Buffalo Wild Wings"
    }
}
let randomRestaurant8=randomRestaurant(randomNumber0to7)

let randomNumber0to3=Math.floor(Math.random() * 4)
function randomTransportation(theRandomNumber){             // Tested function. Works properly.
    if(theRandomNumber===0){
        return "Rental Car"
    }
    else if(theRandomNumber===1){
        return "Biking"
    }
    else if(theRandomNumber===2){
        return "Uber"
    }
    else{
        return "Walking"
    }
}
let randomTransportation4=randomTransportation(randomNumber0to3)

let randomNumber0to4=Math.floor(Math.random() * 5)
function randomEntertainment(theRandomNumber){          // Tested function. Works properly.
    if(theRandomNumber===0){
        return "Sight Seeing"
    }
    else if(theRandomNumber===1){
        return "Bowling"
    }
    else if(theRandomNumber===2){
        return "Comedy Show"
    }
    else if(theRandomNumber===3){
        return "Dancing"
    }
    else{
        return "Movie Theatre"
    }
}
let randomEntertainment5=randomEntertainment(randomNumber0to4)

let tripDetails=`1. Destination: ${randomDestination10}
2. Restaurant: ${randomRestaurant8}
3. Transportation: ${randomTransportation4}
4. Entertainment: ${randomEntertainment5}`

let firstPrompt=prompt(`Your trip looks like this:

${tripDetails}

Would you like to change it? "Yes" or "No"`)              // First prompt is working and looks good.

if(firstPrompt==="Yes"){
    let 
    newPrompt=prompt("What would you like to change? )
}
else if(firstPrompt==="No"){
    prompt(`Your trip is complete. Have fun!
    
    Trip details:
    
    `)
}