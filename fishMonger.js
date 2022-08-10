const { boatInventory } = require("./fishingBoat.js")
let fishCaught = boatInventory()
let chefBudget = 5
let fishBought = []
for (const fish of fishCaught) {
    if (fish.amount > 10) {
        //^ if the amount of fish X in the catchOfTheDay array is more than ten, then:
        if (fish.price < 7.5) {
            //^ if it is also not expensive, then:
            if (fish.price <= chefBudget) {
                //^ if it is ALSO within the chef's budget, then:
                fishBought.push(fish)
                //^ buy the fish
            }
        }
    }
}

for (const purchase of fishBought) {
    purchase.amount = 10
    //^ makes sure that we show we bought ten.
    // TODO probably subtract ten from the original catchOfTheDay array

}

// Example... do not copy pasta this. Write your own.
const mongerInventory = () => {
    return fishBought
}
module.exports = { mongerInventory }

// function to return an array of fish objects meeting criteria
//! for loop to iterate through the array of fish
// fishmonger buys 10 cheap fish
    // ^ if fish quantity is less than 10, skip
    //! if loop to check fish.quantity > 10
    //^ if price is greater than 7.5, skip
    //! nested if loop to also check price, in this case < 5.01
    //^ if fish exceeds chefBudget, skip
        //^ example: chefBudget = $5/fish
// push fish to new array with quantity 10, instead of caught quantity.
// fishBought.push(criteria) with new fish.quantity = 10
