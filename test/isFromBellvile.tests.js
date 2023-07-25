import assert from "assert";
import { isFromBellville } from "../js/isFromBellvile.js";

describe('Test isFromBellville function' , function(){
    it("should return true when  the registration number starts with 'CY'", function(){
       assert.equal(true,isFromBellville('CY 123'));
    });
    it("should return false when the registration numbers is not from Bellville", function(){
      assert.equal(false,isFromBellville('CJ 123'));
    });

    it("should return false when the registration number starts with 'CJ'", function(){
        assert.equal(false,isFromBellville('CJ 123'));
      });



});