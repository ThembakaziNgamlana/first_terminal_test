import assert from "assert";
import { transportFee } from "../js/transportFee.js";

describe('Test transportFee function' , function(){
    it("should return  R20 when the shift is a morning shift", function(){
       assert.equal('R20',transportFee('morning'));
    });
    it("should return R10 when the shift is a afternoon shift", function(){
      assert.equal('R10',transportFee('afternoon'));
    });

    it("should return free when the shift is a night shift ", function(){
        assert.equal('free',transportFee('night'));
      });



});