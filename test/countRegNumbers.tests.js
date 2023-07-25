import assert from "assert";
import { countRegNumber } from "../js/countRegNumber.js";

describe('Test countRegNumber function' , function(){
    it("should return the number of registration number in that string", function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
    });
    it("should return one if there is one registation number", function(){
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    });
    it("should return one when a string  is empty no registration number entered", function(){
        var regCount = countRegNumber("");
        assert.equal(regCount,1);
    });

});