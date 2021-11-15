import {UserOrder} from "./userOrder";
import {Discounts} from "./discounts";
import {Prices} from "./prices";
//Simplified testing suite
import assert from 'assert/strict';

let testUserOrders = () => {
    let order = new UserOrder()
    let testOrder = ["001", "002", "003", "002", "002", "004", "002"]
    order.applyFromArray(testOrder)
    assert.deepEqual(order.items["001"], 1)
    assert.deepEqual(order.items["002"], 4)
    assert.deepEqual(order.items["003"], 1)
    assert.deepEqual(order.items["004"], 1)
    //In case it added some weird keys
    assert.deepEqual(Object.keys(order.items).length, 4)
}

let testApplyDiscounts = () => {
    let order = new UserOrder()
    let testOrder = ["001", "001", "001", "001", "001",]
    order.applyFromArray(testOrder)
    let testDiscounts = new Discounts()
    let discountedOrder = testDiscounts.applyDiscounts(order)
    assert.deepEqual(discountedOrder.items["001"], 2)
    assert.deepEqual(discountedOrder.items["-001"], 1)
}

let testPriceApplication = () => {
    let order = new UserOrder()
    let testOrder = ["001", "001", "001", "001", "001", "004"]
    order.applyFromArray(testOrder)
    let testDiscounts = new Discounts()
    let discountedOrder = testDiscounts.applyDiscounts(order)
    let testPrices = new Prices()
    let finalPrice = testPrices.applyPrices(discountedOrder)
    assert.deepEqual(finalPrice, 200 + 2 * 100 + 30)
}

// In theory you are not supposed to use this outside testing
let convertArrayToPrice = (data: Array<string>): number => {
    let order = new UserOrder()
    order.applyFromArray(data)
    let testDiscounts = new Discounts()
    let discountedOrder = testDiscounts.applyDiscounts(order)
    let testPrices = new Prices()
    let finalPrice = testPrices.applyPrices(discountedOrder)
    return finalPrice
}

let garbageInputTests = () => {
    try {
        // @ts-ignore
        convertArrayToPrice("garbage string")
        assert.fail()
    } catch (e) {
    }
    try {
        // @ts-ignore
        convertArrayToPrice(["001", "001", "8h9nu4tt3"])
        assert.fail()
    } catch (e) {
    }
    try {
        // @ts-ignore
        convertArrayToPrice(["001", "001", "055"])
        assert.fail()
    } catch (e) {
    }
}

testUserOrders()
testApplyDiscounts()
testPriceApplication()
garbageInputTests()
console.log("Passed all tests")