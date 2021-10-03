const axios = require('axios');
const type = 'predict-age';

function isMeetingConditions(name, birth_year){
    return (name.length > 3);
}

async function getResponseResult(req)  {
    try{
        const response = await axios.get('https://api.agify.io/?name=' + req.query.name);
        if(!response.data.age) return "You have a special name, congrats. no predictions yet..."
        return String(`Based on Agify.io your age is: ${response.data.age}, the prediction is ${isPredictionCorrect(req.query.birth_year, response.data.age)}`);
    } catch (error) {
        console.log(error);
    }
}
function isPredictionCorrect(birth_year, predicted_age){
    return ((new Date().getFullYear() - birth_year) == predicted_age);
}

module.exports = {type, isMeetingConditions, getResponseResult};