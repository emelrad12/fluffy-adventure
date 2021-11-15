export class UserOrder {
    items: Record<string, number>

    constructor() {
        this.items = {}
    }

    applyFromArray(data: Array<string>) {
        data.forEach((item) => {
            if (!this.items[item]) this.items[item] = 0
            this.items[item]++
        })
    }
}