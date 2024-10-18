# -ALAB-Promises-and-async-await


Data Fetching: This involves getting data from external sources (in this case, fake databases).
Promises: Promises are used to handle asynchronous operations. They represent a value that may be available now, or in the future, or never.
Async/Await: A syntax for working with Promises that makes asynchronous code easier to read and write.
Getting Started
Explore the CodeSandbox:
Look through the index.js and database.js files.
You’ll find predefined data and a function in index.js that sets up a dictionary object.
The database.js file simulates a database system that you’ll use.
Choose Your Development Environment:
Download the CodeSandbox to work locally, or
Fork the CodeSandbox to continue online.
Version Control:
Use Git for version control. Make commits every time you complete a small piece of functionality.
Part 1: Understanding the Scenario
You are simulating a situation where data is spread across different databases. Your job is to create a function that:
Takes a user ID as a parameter.
Fetches user information from various databases.
Returns a structured object with the user’s information.
Required User Data Structure
The function should return an object structured like this:



{
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
        "street": string,
        "suite": string,
        "city": string,
        "zipcode": string,
        "geo": {
            "lat": string,
            "lng": string
        }
    },
    "phone": string,
    "website": string,
    "company": {
        "name": string,
        "catchPhrase": string,
        "bs": string
    }
}
Database Overview
Central Database:
Returns which database to access for a given user ID.
Access it with const returnedValue = await central(id);.
User Databases (db1, db2, db3):
Contain basic user info (username, website, company).
If an error occurs, return a rejected promise.
Access them using the value returned from the central database.
Vault Database:
Contains sensitive personal information.
Access it using const returnedValue = await vault(id);.
Part 2: Implementing the Function
Function Requirements:
Create a function that:
Takes an id.
Fetches user information from the databases.
Assembles and returns the required object.
Asynchronous Handling:
Use Promise.all to fetch data from multiple databases concurrently.
Your function should complete in 200ms or less, even though the individual requests may take longer.
Testing:
Test your function with:
Valid IDs (1 to 10).
Invalid IDs (less than 1 or greater than 10).
Invalid data types (like strings, booleans).