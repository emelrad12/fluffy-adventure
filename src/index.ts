import express from "express"
const app = express()
const port = 8081

app.post('/checkout', function (req, res) {
    res.send('Fancy data')
})

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})
