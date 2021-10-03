const chuckNorris = require("../types/chuck-norris");

describe('Testing chuck-norris condition function',() =>{
    it('should return true if the birth year is less or equal to 2000', () => {    
        expect(chuckNorris.isMeetingConditions("Alon", 2000)).toBeTruthy();
    });
    it('should return true if the birth year is less or equal to 2000', () => {    
        expect(chuckNorris.isMeetingConditions("My Name", 1990)).toBeTruthy();
    });
    it('should return false if the birth year is greater than 2000', () => {    
        expect(chuckNorris.isMeetingConditions("First Last", 2001)).toBeFalsy();
    });
    it('should return false if the birth year is greater than 2000', () => {    
        expect(chuckNorris.isMeetingConditions("Tomer", 2020)).toBeFalsy();
    });
});
