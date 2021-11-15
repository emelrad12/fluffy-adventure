import assert from "assert/strict";

export class UserOrder {
    items: Record<string, number>

    constructor() {
        this.items = {}
    }

    applyFromArray(data: Array<string>) {
        assert(Array.isArray(data), "Provided non array input")
        data.forEach((item) => {
            let itemAsNumber = +item
            assert.equal(typeof (itemAsNumber), "number")
            assert(!isNaN(itemAsNumber), `item is not valid: ${item}`)
            if (!this.items[item]) this.items[item] = 0
            this.items[item]++
        })
    }
}