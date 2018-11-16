
let house = {
        areas: {
            livingRoom: {
                items: ['tv','sofa']},
            bedroomOne: {
                items: ['bed','washing machine'],
                windows: 3},
            bedroomTwo:{
                items: ['bed','bed','desk'],
                windows: 4},
            kitchen:{
                items: ['fridge','broken chair']}
    },
            garden: [true, 'Red Rose'],
            garage: {
                car: {
                    color: 'red',
                    wheels: 4,
                    honk: ()=>{alert("Beep")}
    }
    }
    }

// 1. Find total number of areas in the house - Need help with this one
console.log("Number of areas in the house", house.areas.length)

// 2. Add a dining table to the living room
for(let counter=''; counter<1; counter++) {
    house.areas.livingRoom.items.push("Dining Table"+ (counter))
}

console.log(house.areas.livingRoom.items)

// 3. Add a stove to the kitchen
for(let counter=''; counter<1; counter++) {
    house.areas.kitchen.items.push("Stove" + (counter))
}

console.log(house.areas.kitchen.items)

// 4. Remove the washing machine from bedroomOne
for(let counter=''; counter<1; counter++) {
    house.areas.bedroomOne.items.pop()
}

console.log(house.areas.bedroomOne.items)

// 5. Find the total number of beds in all rooms - Need help with this

// var count = 0;
// for(var i = 0; i < array.length; ++i){
//     if(array[i] == bed)
//         count++;
// }

// 6. Change the color of the car to blue - Need help with this one

// garage.car.color.splice(1,0,Blue)

// console.log(house.areas.garage.car.color)

// 7. Add a another car to the garage with a honk function - Need help with this one
// for(let counter='1'; counter<1; counter++) {
//     house.areas.garage.push("Car 2" + (counter))
// }

// console.log(house.areas.garage)

// 8. Make the new car honk
// 9. Change the 'broken chair' in the kitchen to 'new chair'

house.areas.kitchen.items.splice(1,1,"New Chair")

console.log(house.areas.kitchen.items)

// 10. If the house has a garden, console.log the name of the flower