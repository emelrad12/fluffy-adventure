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

# How & why

I chose node for the backend. Then instead of using the HTTP api I chose express because it is cleaner, even in this tiny example.
Then adding typescript because it makes the code even nicer.

I split the architecture in 3 parts, the userOrder which simply holds what the user selected. Optimally that should be in the front end. And the frontend operates on it. 

Then comes the discounts, which is simply converting non-discounted items into their discounted versions.
By replacing the discounts class we can accommodate anything without touching anything else in the code base.

The prices class does a simple conversion from products to a concrete price. Again we can define custom rules there without changing anything else.

Obviously this is not made for serverless lambda, but it can be easily modified to work on such, just replacing the index.ts
And the testing is a simple file that does it manually, instead of using a framework, as that is not needed in this example.

# Future plans and improvements

First thing would be making the prices class receive prices from a database and not hardcoded then would come
replacing the discounts class with some more sophisticated system that meets the business rules. 
And like earlier, making it fetch data from somewhere else.

Second would be making it run serverless on a lambda, which would be quite simple in on itself, 
but after applying change 1, then we would optimally cache the prices/discounts, so we don't spam the server. 
Of course that comes with the issue of keeping the data actual and not having some lambdas have the actual data but others having different data.

Third would be adding unit testing framework, which would be very useful later on, but out of scope for this tiny example.



