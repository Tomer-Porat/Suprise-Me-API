const axios = require('axios');
const type = 'chuck-norris';

function isMeetingConditions(name, birth_year){
    return (birth_year <= 2000);
}

async function getResponseResult(req)  {
    try{
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        return response.data.value;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {type, isMeetingConditions, getResponseResult};
