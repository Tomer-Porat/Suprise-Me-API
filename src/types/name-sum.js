const type = 'name-sum';

function isMeetingConditions(name, birth_year){
    return (!(name.startsWith('Q')));
}

function getResponseResult(req) {
    let sum = 0;
    let lowerCaseName = req.query.name.toLowerCase();
    for (i = 0; i < lowerCaseName.length; i++) {
        if(lowerCaseName.charAt(i) != ' '){
            sum += lowerCaseName.charCodeAt(i) - ('a').charCodeAt(0) + 1;
        }
    }
    return String(sum);
}

module.exports = {type, isMeetingConditions, getResponseResult};

