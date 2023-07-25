import assert from "assert";
import { regCheck } from "../js/regCheck.js";

describe('Test regCheck function' , function(){
    it("should return true if the registration number ends with 'GP' or 'EC' or 'MP' or 'L'", function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
        assert.equal(regCheck('5566 L', 'L'), true); 
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
})
    it("should return false if the registration number ends with 'ND' or 'CY' or 'CA'", function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    });

    it("should return false if there is no registration number  enterted and is  empty string", function(){
        assert.equal(false ,regCheck(","))
    });



    
});