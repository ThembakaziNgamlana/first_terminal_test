import assert from "assert";
import { greet } from "../js/greet.js";

describe('The greet function', function(){
   it('should greet Themby correctly', function(){
      const result = greet('Themby');
    assert.equal(result, 'Hello, Themby!');
       
    });
    it('should greet Ebby correctly', function(){
        const result = greet('Ebby');
        assert.equal(result, 'Hello, Ebby!');
    });
});