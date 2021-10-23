"use strict"

let destinationVariable
let randomNumber0to9=Math.floor(Math.random() * 10)
function randomDestination(theRandomNumber, destination){            // Tested function. Works properly.
    if(theRandomNumber===0){
        destination="Houston"
        return destination
    }
    else if(theRandomNumber===1){
        destination="Chicago"
        return destination
    }
    else if(theRandomNumber===2){
        destination="Duluth"
        return destination
    }
    else if(theRandomNumber===3){
        destination="San Diego"
        return destination
    }
    else if(theRandomNumber===4){
        destination="Salem"
        return destination
    }
    else if(theRandomNumber===5){
        destination="Miami"
        return destination
    }
    else if(theRandomNumber===6){
        destination="Phoenix"
        return destination
    }
    else if(theRandomNumber===7){
        destination="Cleveland"
        return destination
    }
    else if(theRandomNumber===8){
        destination="New York City"
        return destination
    }
    else{
        destination="Jacksonville"
        return destination
    }
}
let randomDestination10=randomDestination(randomNumber0to9, destinationVariable)

let restaurantVariable
let randomNumber0to7=Math.floor(Math.random() * 8)
function randomRestaurant(theRandomNumber, restaurant){                
    if(theRandomNumber===0){
        restaurant="McDonald's"
        return restaurant
    }
    else if(theRandomNumber===1){
        restaurant="Wendy's"
        return restaurant
    }
    else if(theRandomNumber===2){
        restaurant="Burger King"
        return restaurant
    }
    else if(theRandomNumber===3){
        restaurant="Taco Bell"
        return restaurant
    }
    else if(theRandomNumber===4){
        restaurant="Subway"
        return restaurant
    }
    else if(theRandomNumber===5){
        restaurant="Jack in the Box"
        return restaurant
    }
    else if(theRandomNumber===6){
        restaurant="White Castle"
        return restaurant
    }
    else{
        restaurant="Buffalo Wild Wings"
        return restaurant
    }
}
let randomRestaurant8=randomRestaurant(randomNumber0to7, restaurantVariable)

let transportationVariable
let randomNumber0to3=Math.floor(Math.random() * 4)
function randomTransportation(theRandomNumber, transportation){              
    if(theRandomNumber===0){
        transportation="Rental Car"
        return transportation
    }
    else if(theRandomNumber===1){
        transportation="Biking"
        return transportation
    }
    else if(theRandomNumber===2){
        transportation="Uber"
        return transportation
    }
    else{
        transportation="Walking"
        return transportation
    }
}
let randomTransportation4=randomTransportation(randomNumber0to3, transportationVariable)

let entertainmentVariable
let randomNumber0to4=Math.floor(Math.random() * 5)
function randomEntertainment(theRandomNumber, entertainment){           
    if(theRandomNumber===0){
        entertainment="Sight Seeing"
        return entertainment
    }
    else if(theRandomNumber===1){
        entertainment="Bowling"
        return entertainment
    }
    else if(theRandomNumber===2){
        entertainment="Comedy Show"
        return entertainment
    }
    else if(theRandomNumber===3){
        entertainment="Dancing"
        return entertainment
    }
    else{
        entertainment="Movie Theatre"
        return entertainment
    }
}
let randomEntertainment5=randomEntertainment(randomNumber0to4, entertainmentVariable)

let tripDetails=`1. Destination: ${randomDestination10}
2. Restaurant: ${randomRestaurant8}
3. Transportation: ${randomTransportation4}
4. Entertainment: ${randomEntertainment5}`

let firstPrompt=prompt(`Your trip looks like this:

${tripDetails}

Would you like to change it? "Yes" or "No"`)              // First prompt is working and looks good.

if(firstPrompt==="Yes"){
    let newPrompt=prompt(`What would you like to change? Enter 1, 2, 3, or 4
    
    1. Destination: ${destinationVariable}
    2. Restaurant: ${restaurantVariable}
    3. Transportation: ${transportationVariable}
    4. Entertainment: ${entertainmentVariable}
    
    Enter "OK" to finish selection`)
    while(newPrompt>=1 && newPrompt<=4){
        if(newPrompt==1){
            newPrompt=prompt(`What would you like to change? Enter 1, 2, 3, or 4
    
    1. Destination: ${randomDestination10}
    2. Restaurant: ${restaurantVariable}
    3. Transportation: ${transportationVariable}
    4. Entertainment: ${entertainmentVariable}
    
    Enter "OK" to finish selection`)
        }
        else if(newPrompt==2){
            newPrompt=prompt(`What would you like to change? Enter 1, 2, 3, or 4
    
    1. Destination: ${destinationVariable}
    2. Restaurant: ${randomRestaurant8}
    3. Transportation: ${transportationVariable}
    4. Entertainment: ${entertainmentVariable}
    
    Enter "OK" to finish selection`)
        }
        else if(newPrompt==3){
            newPrompt=prompt(`What would you like to change? Enter 1, 2, 3, or 4
    
    1. Destination: ${destinationVariable}
    2. Restaurant: ${restaurantVariable}
    3. Transportation: ${randomTransportation4}
    4. Entertainment: ${entertainmentVariable}
    
    Enter "OK" to finish selection`)
        }
        else if(newPrompt==4){
            newPrompt=prompt(`What would you like to change? Enter 1, 2, 3, or 4
    
    1. Destination: ${destinationVariable}
    2. Restaurant: ${restaurantVariable}
    3. Transportation: ${transportationVariable}
    4. Entertainment: ${randomEntertainment5}
    
    Enter "OK" to finish selection`)
        }
        else{}
    }
    if(newPrompt==="OK"){

    }
}
