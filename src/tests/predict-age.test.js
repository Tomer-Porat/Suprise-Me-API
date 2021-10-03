const predictAge = require("../types/predict-age");

describe('Testing predict-age condition function',() =>{
    it('should return true if the user’s name length is greater than 3', () => {    
        expect(predictAge.isMeetingConditions("Tomer Porat", 1990)).toBeTruthy();
    });
    it('should return true if the user’s name length is greater than 3', () => {    
        expect(predictAge.isMeetingConditions("Elinor Mashu", 1990)).toBeTruthy();
    });
    it('should return true if the user’s name length is greater than 3', () => {    
        expect(predictAge.isMeetingConditions("Very Long", 2010)).toBeTruthy();
    });
    it('should return false if the user’s name length is less than 3', () => {    
        expect(predictAge.isMeetingConditions("El", 2020)).toBeFalsy();
    });
});