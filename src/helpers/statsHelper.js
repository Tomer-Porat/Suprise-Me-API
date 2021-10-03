const fs = require('fs');
const {responseTypesList} = require('../types/index.js');
const filePath = 'stats.json'

let requests = 0;
let response = function(type, count) {
    this.type = type;
    this.count = count;
   return this;
};

let distribution = [];
for (const responseListElement of responseTypesList){
    distribution.push(new response(responseListElement.type, 0));
}

function updateStats(responseTypeToUpdate){
    requests += 1;
    for (const response of distribution){
        if(response.type == responseTypeToUpdate){
            response.count += 1;
        }
    }
    writeStatsToFile(distribution,requests);
}

const readStats = () => {
    let result = {}
    if(requests == 0) return {requests, distribution: []};
    return JSON.parse(fs.readFileSync(filePath));
}

const writeStatsToFile = (distribution,requests) => {
    fs.writeFileSync(filePath, JSON.stringify({requests, distribution}), { flag: 'w+' })
}

module.exports = {distribution, updateStats, readStats};