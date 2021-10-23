"use strict"

// let destinationVariable
// let randomNumber0to9=Math.floor(Math.random() * 10)
// function randomDestination(theRandomNumber, destination){            // Tested function. Works properly.
//     if(theRandomNumber===0){
//         destination="Houston"
//         return destination
//     }
//     else if(theRandomNumber===1){
//         destination="Chicago"
//         return destination
//     }
//     else if(theRandomNumber===2){
//         destination="Duluth"
//         return destination
//     }
//     else if(theRandomNumber===3){
//         destination="San Diego"
//         return destination
//     }
//     else if(theRandomNumber===4){
//         destination="Salem"
//         return destination
//     }
//     else if(theRandomNumber===5){
//         destination="Miami"
//         return destination
//     }
//     else if(theRandomNumber===6){
//         destination="Phoenix"
//         return destination
//     }
//     else if(theRandomNumber===7){
//         destination="Cleveland"
//         return destination
//     }
//     else if(theRandomNumber===8){
//         destination="New York City"
//         return destination
//     }
//     else{
//         destination="Jacksonville"
//         return destination
//     }
// }
// let randomDestination10=randomDestination(randomNumber0to9, destinationVariable)

// let restaurantVariable
// let randomNumber0to7=Math.floor(Math.random() * 8)
// function randomRestaurant(theRandomNumber, restaurant){                
//     if(theRandomNumber===0){
//         restaurant="McDonald's"
//         return restaurant
//     }
//     else if(theRandomNumber===1){
//         restaurant="Wendy's"
//         return restaurant
//     }
//     else if(theRandomNumber===2){
//         restaurant="Burger King"
//         return restaurant
//     }
//     else if(theRandomNumber===3){
//         restaurant="Taco Bell"
//         return restaurant
//     }
//     else if(theRandomNumber===4){
//         restaurant="Subway"
//         return restaurant
//     }
//     else if(theRandomNumber===5){
//         restaurant="Jack in the Box"
//         return restaurant
//     }
//     else if(theRandomNumber===6){
//         restaurant="White Castle"
//         return restaurant
//     }
//     else{
//         restaurant="Buffalo Wild Wings"
//         return restaurant
//     }
// }
// let randomRestaurant8=randomRestaurant(randomNumber0to7, restaurantVariable)

// let transportationArray=["Rental Car", "Biking", "Uber", "Walking"]
// let randomNumber0to3=Math.floor(Math.random() * 4)
// function randomTransportation(array){ 
//     randomNumber0to3             
//     if(randomNumber0to3===0){
//         return array[0]
//     }
//     else if(randomNumber0to3===1){
//         return array[1]
//     }
//     else if(randomNumber0to3===2){
//         return array[2]
//     }
//     else{
//         return array[3]
//     }
// }
// let randomTransportation4=randomTransportation(transportationArray)

// let entertainmentVariable
// let randomNumber0to4=Math.floor(Math.random() * 5)
// function randomEntertainment(entertainment){ 
//     randomNumber0to4          
//     if(randomNumber0to4===0){
//         entertainment="Sight Seeing"
//         return entertainment
//     }
//     else if(randomNumber0to4===1){
//         entertainment="Bowling"
//         return entertainment
//     }
//     else if(randomNumber0to4===2){
//         entertainment="Comedy Show"
//         return entertainment
//     }
//     else if(randomNumber0to4===3){
//         entertainment="Dancing"
//         return entertainment
//     }
//     else{
//         entertainment="Movie Theatre"
//         return entertainment
//     }
// }
// let randomEntertainment5=randomEntertainment(entertainmentVariable)

// let tripDetails=`1. Destination: ${randomDestination10}
// 2. Restaurant: ${randomRestaurant8}
// 3. Transportation: ${randomTransportation4}
// 4. Entertainment: ${randomEntertainment5}`

// let firstPrompt=prompt(`Your trip looks like this:

// ${tripDetails}

// Would you like to change it? "Yes" or "No"`)              // First prompt is working and looks good.

// if(firstPrompt==="Yes"){
//     let newPrompt=prompt(`What would you like to change? Enter 1, 2, 3, or 4
    
//     1. Destination: ${randomDestination10}
//     2. Restaurant: ${randomRestaurant8}
//     3. Transportation: ${randomTransportation4}
//     4. Entertainment: ${randomEntertainment5}
    
//     Enter "OK" to finish selection`)
//     while(newPrompt>=1 && newPrompt<=4){
//         if(newPrompt==1){
//             newPrompt=prompt(`What would you like to change? Enter 1, 2, 3, or 4
    
//     1. Destination: ${randomDestination10}
//     2. Restaurant: ${restaurantVariable}
//     3. Transportation: ${transportationVariable}
//     4. Entertainment: ${entertainmentVariable}
    
//     Enter "OK" to finish selection`)
//         }
//         else if(newPrompt==2){
//             newPrompt=prompt(`What would you like to change? Enter 1, 2, 3, or 4
    
//     1. Destination: ${destinationVariable}
//     2. Restaurant: ${randomRestaurant8}
//     3. Transportation: ${transportationVariable}
//     4. Entertainment: ${entertainmentVariable}
    
//     Enter "OK" to finish selection`)
//         }
//         else if(newPrompt==3){
//             newPrompt=prompt(`What would you like to change? Enter 1, 2, 3, or 4
    
//     1. Destination: ${destinationVariable}
//     2. Restaurant: ${restaurantVariable}
//     3. Transportation: ${randomTransportation4}
//     4. Entertainment: ${entertainmentVariable}
    
//     Enter "OK" to finish selection`)
//         }
//         else if(newPrompt==4){
//             newPrompt=prompt(`What would you like to change? Enter 1, 2, 3, or 4
    
//     1. Destination: 
//     2. Restaurant: 
//     3. Transportation:
//     4. Entertainment: ${randomEntertainment5}
    
//     Enter "OK" to finish selection`)
//         }
//         else{}
//     }
//     if(newPrompt==="OK"){
//         prompt("Your trip has been finalized. Have fun!")
        
//     }
// }


let firstPrompt
let secondPrompt
let restaurantPlaceHolder=["Type 'Next' to continue"]
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

firstPrompt=prompt(`Hello, type 'Next' to continue
${randomRestaurantSelector(restaurantArray, restaurantPlaceHolder)}`)

secondPrompt=prompt(`Press 1, 2, 3, or 4, then OK

${randomRestaurantSelector(restaurantArray, restaurantPlaceHolder)}`)
firstPrompt=99
while(secondPrompt>=1 && secondPrompt<=4){
    secondPrompt=prompt(`Press 1, 2, 3, or 4, then OK

    ${randomRestaurantSelector(restaurantArray, restaurantPlaceHolder)}`)
}








