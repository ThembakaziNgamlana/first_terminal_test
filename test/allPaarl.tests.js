import assert from "assert";
import { allPaarl } from "../js/allPaarl.js";

describe('Test allPaarl function' , function(){
    it("should return  all registration number from paarl that starts with 'CJ' ", function(){
        //var regNumbersForPaarl = allPaarl(regNumbers);
        var regNumber = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';
        //allPaarl(regNumber)
        assert.deepEqual(["CJ 678 543","CJ 67890"],allPaarl(regNumber));
    });
    it("should return empty database when the registration number is not from paarl", function(){
        var regNumber = '';
        //allPaarl(regNumber)
        assert.equal("empty dataset", allPaarl(regNumber))
    });

   it("should return two registration number  starts with'CJ'", function(){
        var regNumber = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';
        assert.deepEqual(["CJ 678 543","CJ 67890"],allPaarl(regNumber))
        //assert.deepEqual(["CL 900", "CJ 678 543", "CA 34567", "CJ 67890", "CN 7864"], allPaarl(regNumber));
      });



});