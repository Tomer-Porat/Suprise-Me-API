const axios = require('axios');
const type = 'kanye-quote';

function isMeetingConditions(name, birth_year)
{
    return (birth_year > 2000 && !(name.startsWith('A')) && !(name.startsWith('Z')));
}

async function getResponseResult(req)  {
    try{
        const response = await axios.get('https://api.kanye.rest/');
        return response.data.quote;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {type, isMeetingConditions, getResponseResult};

