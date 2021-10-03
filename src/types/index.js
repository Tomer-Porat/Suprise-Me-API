let responseTypesList = [];

// Iterate thorough all the files in 'types' directory and add each response type to the list:
require("fs").readdirSync("./types").forEach((file) => {
    if(file != "index.js"){
        responseTypesList.push(require("./" + file));
    }
});

function getSelectedResponse(req){
    const possibleResponses = getPossibleResponses(req.query.name, req.query.birth_year);
    return returnRandomResponse(possibleResponses);
}

function getPossibleResponses(name, birth_year){
    let possibleResponses = []
    for (const responseType of responseTypesList){
        if(responseType.isMeetingConditions(name, birth_year)){
            possibleResponses.push(responseType);
        }
    }
    return possibleResponses;
}

function returnRandomResponse(possibleResponses){
    return possibleResponses[Math.floor(Math.random()*possibleResponses.length)];
}

module.exports = {getSelectedResponse, responseTypesList};
