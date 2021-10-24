"use strict"

let firstPrompt
let secondPrompt

let destinationPlaceHolder=["Destination"]
let destinationArray=["Houston", "Chicago", "Duluth", "San Diego", "Salem", "Miami", "Phoenix", "Cleveland", "New York City", "Jacksonville"]
function randomDestinationSelector(arrayOne,arrayTwo){
    let randomNumber=Math.floor(Math.random() * arrayOne.length)
    if(firstPrompt=="Next" || secondPrompt=="1"){
        arrayTwo.push(arrayOne[randomNumber])
        return arrayOne[randomNumber]
    }
    else{
        return arrayTwo[arrayTwo.length-1]
    }
}

let restaurantPlaceHolder=["Restaurant"]
let restaurantArray=["McDonald's", "Wendy's", "Burger King", "White Castle"]
function randomRestaurantSelector(arrayOne,arrayTwo){
    let randomNumber=Math.floor(Math.random() * arrayOne.length)
    if(firstPrompt=="Next" || secondPrompt=="2"){
        arrayTwo.push(arrayOne[randomNumber])
        return arrayOne[randomNumber]
    }
    else{
        return arrayTwo[arrayTwo.length-1]
    }
}

let transportationPlaceHolder=["Transportation"]
let transportationArray=["Rental Car", "Biking", "Walking", "Uber"]
function randomTransportationSelector(arrayOne,arrayTwo){
    let randomNumber=Math.floor(Math.random() * arrayOne.length)
    if(firstPrompt=="Next" || secondPrompt=="3"){
        arrayTwo.push(arrayOne[randomNumber])
        return arrayOne[randomNumber]
    }
    else{
        return arrayTwo[arrayTwo.length-1]
    }
}

let entertainmentPlaceHolder=["Entertainment"]
let entertainmentArray=["Sight seeing", "Bowling", "Comedy Show", "Dancing", "Movie Theater"]
function randomEntertainmentSelector(arrayOne,arrayTwo){
    let randomNumber=Math.floor(Math.random() * arrayOne.length)
    if(firstPrompt=="Next" || secondPrompt=="4"){
        arrayTwo.push(arrayOne[randomNumber])
        return arrayOne[randomNumber]
    }
    else{
        return arrayTwo[arrayTwo.length-1]
    }
}

firstPrompt=prompt(`This is the Random Day Trip Generator.

${randomDestinationSelector(destinationArray, destinationPlaceHolder)}
${randomRestaurantSelector(restaurantArray, restaurantPlaceHolder)}
${randomTransportationSelector(transportationArray, transportationPlaceHolder)}
${randomEntertainmentSelector(entertainmentArray, entertainmentPlaceHolder)}

Type 'Next' to continue`)

while(firstPrompt!=="Next"){
    alert("Error! Invalid syntax")
    firstPrompt=prompt(`This is the Random Day Trip Generator.

${randomDestinationSelector(destinationArray, destinationPlaceHolder)}
${randomRestaurantSelector(restaurantArray, restaurantPlaceHolder)}
${randomTransportationSelector(transportationArray, transportationPlaceHolder)}
${randomEntertainmentSelector(entertainmentArray, entertainmentPlaceHolder)}

Type 'Next' to continue`)
}

secondPrompt=prompt(`Your trip looks like this:

1. Destination: ${randomDestinationSelector(destinationArray, destinationPlaceHolder)}
2. Restaurant: ${randomRestaurantSelector(restaurantArray, restaurantPlaceHolder)}
3. Transportation: ${randomTransportationSelector(transportationArray, transportationPlaceHolder)}
4. Entertainment: ${randomEntertainmentSelector(entertainmentArray, entertainmentPlaceHolder)}

Type 1, 2, 3, or 4 to make changes. When satisfied, type 'OK'`)

firstPrompt="Anything, but 'Next'"

while(secondPrompt!=="1" && secondPrompt!=="2" && secondPrompt!=="3" && secondPrompt!=="4" && secondPrompt!=="OK"){
    alert("Error! Invalid syntax")
    secondPrompt=prompt(`Your trip looks like this:

1. Destination: ${randomDestinationSelector(destinationArray, destinationPlaceHolder)}
2. Restaurant: ${randomRestaurantSelector(restaurantArray, restaurantPlaceHolder)}
3. Transportation: ${randomTransportationSelector(transportationArray, transportationPlaceHolder)}
4. Entertainment: ${randomEntertainmentSelector(entertainmentArray, entertainmentPlaceHolder)}

Type 1, 2, 3, or 4 to make changes. When satisfied, type 'OK'`)
}

while(secondPrompt!=="OK"){
    if(secondPrompt>=1 && secondPrompt<=4){
        secondPrompt=prompt(`Your trip looks like this:

1. Destination: ${randomDestinationSelector(destinationArray, destinationPlaceHolder)}
2. Restaurant: ${randomRestaurantSelector(restaurantArray, restaurantPlaceHolder)}
3. Transportation: ${randomTransportationSelector(transportationArray, transportationPlaceHolder)}
4. Entertainment: ${randomEntertainmentSelector(entertainmentArray, entertainmentPlaceHolder)}

Type 1, 2, 3, or 4 to make changes. When satisfied, type 'OK'`)
    }
    else{
        alert("Error! Invalid syntax")
        secondPrompt=prompt(`Your trip looks like this:

1. Destination: ${randomDestinationSelector(destinationArray, destinationPlaceHolder)}
2. Restaurant: ${randomRestaurantSelector(restaurantArray, restaurantPlaceHolder)}
3. Transportation: ${randomTransportationSelector(transportationArray, transportationPlaceHolder)}
4. Entertainment: ${randomEntertainmentSelector(entertainmentArray, entertainmentPlaceHolder)}

Type 1, 2, 3, or 4 to make changes. When satisfied, type 'OK'`)
    }
}

alert("Trip confirmed! Press OK and view your details in the console.")
console.log(`Destination: ${randomDestinationSelector(destinationArray, destinationPlaceHolder)}`)
console.log(`Restaurant: ${randomRestaurantSelector(restaurantArray, restaurantPlaceHolder)}`)
console.log(`Transportation: ${randomTransportationSelector(transportationArray, transportationPlaceHolder)}`)
console.log(`Entertainment: ${randomEntertainmentSelector(entertainmentArray, entertainmentPlaceHolder)}`)
