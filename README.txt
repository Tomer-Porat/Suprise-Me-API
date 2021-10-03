# Surprise me! API

The purpose of the API is to return a surprising response, according to the parameters passed by the client.
To make adding new responses 

## Installation

To run this project, install it locally using npm:
```
$ cd ../src
$ npm install
$ node index.js
```

## Usage

Using web browser navigate to http://localhost:3000/api/surprise?name={NAME}&birth_year={BIRTH_YEAR}
And enter the desired parameters replacing {NAME} and {BIRTH_YEAR}.
For example:
http://localhost:3000/api/surprise?name=Tomer%20Porat&birth_year=1995

To access the statistics of the requests navigate to http://localhost:3000/api/stats

## Adding new response types

To make adding new responses as generic and modular as possible each response is in a separated file in './SupriseMeAPI/src/type'.
Each file is automatically added to the response types list, and each response should have:
1.string type 
2.function isMeetingConditions(name, birth_year) - returning true/false
3.async function getResponseResult(req) - returning string

## Requests statistics

Because the scope of this project I haven't used database, 
so I stored the /api/stats data in JSON file located in './SupriseMeAPI/src/stats.json'.

## Bonus

Try to enter a name with length greater than 3.

## Tests

To run the unit testing:
```
$ cd ../src
$ npm test
``` 
## Technologies

Project is created with:
* axios version: 0.21.1
* express version: 4.17.1
* jest version: 27.0.6


Sincerely,
Tomer Porat