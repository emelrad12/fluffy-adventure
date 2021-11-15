import express from "express"
import {UserOrder} from "./userOrder";
import {Discounts} from "./discounts";
import {Prices} from "./prices";

const app = express()
const port = 8080
app.use(express.json())

app.post('/checkout', function (req, res) {
    try {
        let body = req.body
        let order = new UserOrder()
        order.applyFromArray(body)
        let testDiscounts = new Discounts()
        let discountedOrder = testDiscounts.applyDiscounts(order)
        let testPrices = new Prices()
        let finalPrice = testPrices.applyPrices(discountedOrder)
        res.send({price: finalPrice, error: null})
    } catch (e) {
        res.status(400);
        console.log(e)
        res.send({price: -1, error: e})
    }

})

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})
