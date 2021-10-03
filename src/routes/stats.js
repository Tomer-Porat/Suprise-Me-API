const express = require('express');
const router = express.Router();
const {readStats} = require('../helpers/statsHelper');

router.get('/', (req, res) => {
    try{
        return res.json(readStats());
    }
    catch(err){
        console.log(`Error: ${err.stack}`);
        res(500).send(`Server Error: ${err.message}`);
    }
});

module.exports = router;
