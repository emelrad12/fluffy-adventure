// including discounted items
import {UserOrder} from "./userOrder";
import assert from "assert/strict";

export class Prices {
    data: Record<string, number>

    constructor() {
        this.data = {
            "001": 100,
            "002": 80,
            "003": 50,
            "004": 30,
            "-001": 200,
            "-002": 120,
        }
    }

    applyPrices = (order: UserOrder): number => {
        return Object.keys(order.items).reduce((prev, productName) => {
            let productCount = order.items[productName]
            let pricePerProduct = this.data[productName]
            assert(pricePerProduct, `No price for product:${productName}`)
            let finalPrice = prev + productCount * pricePerProduct
            return finalPrice
        }, 0)
    }
}
