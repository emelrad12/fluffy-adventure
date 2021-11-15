// Discount applicator converts items into discounted versions aka
// 2x 002 is converted to 1x -002
// - is chosen to make it clear that this is not a real product but discount

import {UserOrder} from "./userOrder";

export class Discounts {
    data: Record<string, Array<number>>

    constructor() {
        this.data = {"001": [3, 200], "002": [2, 120]}
    }

    // Making discounts deserves its own framework, but that is out of scope
    // Still adding a proper handling of discounts involves only replacing this function
    applyDiscounts = (order: UserOrder): UserOrder => {
        let returnValue = new UserOrder()
        Object.keys(order.items).forEach((productName) => {
            let discountedCount = order.items[productName]
            let discount = this.data[productName]
            if (discount) {
                discountedCount /= discount[0]
                // This is how many units of non discounted merch remained
                // We remove the discounted merch, then multiply back
                let remained = discountedCount % 1 * discount[0]
                // Because floating points are non associative, and for some cases instead of remaining 1 or 2 items you will get 1.99996 items
                // Also that is why we should be using big int instead of floats, but being banking correct is out of scope
                // round should catch all errors until we start moving millions of units
                remained = Math.round(remained)
                // and this is how much units remained discounted
                discountedCount = Math.floor(discountedCount)
                // naming is simply adding a -
                let discountedName = "-" + productName
                if (discountedCount != 0) returnValue.items[discountedName] = discountedCount
                returnValue.items[productName] = remained
            } else {
                returnValue.items[productName] = discountedCount
            }
        })
        return returnValue
    }
}