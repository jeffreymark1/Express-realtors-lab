# JSDR213

For our final lab of the class, we are going to create an express server that contains some JSON data we will create

#### Part 1

- Initialize a basic Express app using your usual templated steps, adding in a basic GET landing page

```js
app.get('/', (req, res) => {
  res.send("welcome!")
})
```

 ____

#### Part 2

- Create a file called apartments.js that has an array of objects of local apartments. Each apartment should have values such as 'sqFt', 'price', 'address', and anything else you'd like to include such as 'isPetFriendly', 'waterfrontView', and others. Feel free to add as much data in as you would like

- Create a route called Apartments that returns this array of apartments

#### Part 3

- Take the app one step further by creating a second route called Houses that returns an array of similar objects, but with Houses instead of Apartments. These objects can have properties such as "numberOfBedrooms", "numberOfBathrooms", "hasPorch", and anything else you'd want to see in a housing listing

#### Part 4

- using our Request Params, create Detail pages that only show one specific apartment or house, based off of the object's index of the array (hint, since arrays start at 0 you may need to do some math to make our params match up our indexes better

#### Part 5 - Bonus

- Once you have your List and Show routes working with the full array of apartments & houses, plus details of the individual ones showing, lets build our first Full Stack application!
- Run your server at localhost:3001, make sure you have CORS installed and set up in your .js file, and the CORS extension running on your browser
- Create and scaffold an HTML, CSS, and JS file, and using the Axios library (which you'll add in to the head of your HTML file) make a call to your localhost:3001 server, pulling in the data that you would like!
