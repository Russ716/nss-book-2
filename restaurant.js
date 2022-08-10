const { mongerInventory } = require("./fishMonger.js")
let fishForSale = mongerInventory()
let fishBudget = 5
const fishPurchased = []
/*
//iterate fishForSale 
  //  find fish under chefBudget
    //    buy half of available quantity. 
pull the name of the fish into an array
chef creates 3 meals from each fish in array
    XXX Soup
    XXX Sandwich
    Grilled XXX
use the array.length to write the menu lines
    use for loop to create 3 entrees for each fish
        * "for (fish of fishForSale)" 
            *string += `<section class="menu__item">${fish} Soup</section>`
            *string += `<section class="menu__item">${fish} Sandwich</section>`
            *string += `<section class="menu__item">Grilled ${fish}</section>`

*/

for (const saleFish of fishForSale) {
    if (saleFish.price < fishBudget) {
        amountPurchased = saleFish.amount / 2
        fishPurchased.push(saleFish)
    }
}
for (const buy of fishPurchased) {
    buy.amount = amountPurchased
}
// console.log(fishPurchased) 
let menuToday = "<h1>Menu</h1>"

    for (const plate of fishPurchased) {
        menuToday += `<article class="menu">
        <h2>${plate.species}</h2>
        <section class="menu__item">${plate.species} Soup</section>
        <section class="menu__item">${plate.species} Sandwich</section>
        <section class="menu__item">Grilled ${plate.species}</section>
    </article>`
    }

const fishMenu = () => {
    return menuToday
}
module.exports = { fishMenu }