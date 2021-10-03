const express = require('express');
const router = express.Router();
const isValidInput = require('../validations/queryParamValidation');
const {getSelectedResponse} = require('../types/index');
const {updateStats} = require('../helpers/statsHelper');

router.get('/',isValidInput, async (req, res) => {
    const responseToReturn = getSelectedResponse(req);
    updateStats(responseToReturn.type);
    const result = await responseToReturn.getResponseResult(req);
    return res.json({type: responseToReturn.type, result});
});
 
module.exports = router;