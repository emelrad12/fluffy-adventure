# fluffy-adventure

# Install
Simply clone and run npm i

# Start

Run npm start, that will automatically start nodemon and reload the server on change

# Use

To use the api, make a post request at http://localhost:8080/checkout
The data must be a json array of product ids ex:

[
"001",
"002",
"001",
"004",
"003"
]

# Testing

Use npm test that will run once the test, it will display "Passed all tests" if it is successful and will throw
assertion errors if not Tests include testing each part "UserOrder, Discounts, Prices", and testing if it successfully
catches garbage data, and not return some bogus price

