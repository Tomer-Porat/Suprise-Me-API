const kanyeQuote = require("../types/kanye-quote");

describe('Testing kanye-quote condition function',() =>{
    it('should return true if the user’s birth year is greater than 2000 and the user’s first name doesn’t start with ‘A’ or ‘Z’', () => {
        expect(kanyeQuote.isMeetingConditions("Tomer Porat", 2001)).toBeTruthy();
    });
    it('should return true if the user’s birth year is greater than 2000 and the user’s first name doesn’t start with ‘A’ or ‘Z’', () => {    
        expect(kanyeQuote.isMeetingConditions("Bob", 2013)).toBeTruthy();
    });
    it('should return false if the user’s birth year is less than 2000 and the user’s first name doesn’t start with ‘A’ or ‘Z’', () => {    
        expect(kanyeQuote.isMeetingConditions("Kanye", 1999)).toBeFalsy();
    });
    it('should return false if the user’s birth year is less than 2000 and the user’s first name start with ‘A’', () => {    
        expect(kanyeQuote.isMeetingConditions("Ani Bodek", 2002)).toBeFalsy();
    });
    it('should return false if the user’s birth year is greater than 2000 and the user’s first name start with ‘Z’', () => {    
        expect(kanyeQuote.isMeetingConditions("Zoey Sdom", 2003)).toBeFalsy();
    });
});
