const nameSum = require("../types/name-sum");

describe('Testing name-sum condition function',() =>{
    it('should return true if the user’s first name doesn’t start with ‘Q’', () => {    
        expect(nameSum.isMeetingConditions("No Q", 1990)).toBeTruthy();
    });
    it('should return true if the user’s first name doesn’t start with ‘Q’', () => {    
        expect(nameSum.isMeetingConditions("Good Name", 2020)).toBeTruthy();
    });
    it('should return false if the user’s first name start with ‘Q’', () => {    
        expect(nameSum.isMeetingConditions("Quinci Queen", 1990)).toBeFalsy();
    });
    it('should return false if the user’s first name start with ‘Q’', () => {    
        expect(nameSum.isMeetingConditions("Quinella", 2010)).toBeFalsy();
    });
});