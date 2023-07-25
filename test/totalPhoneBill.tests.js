import assert from "assert";
import { totalPhoneBill} from "../js/totalPhoneBill.js";


describe('Test totalPhoneBill function' , function(){
    it("should return the total bill of the 3 calls made and 2 sms made", function(){
       assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
    it("should return the total bill  1 call  made and 1 sms by the user", function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });

    it("should return the total bill for 2 sms made by the user", function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
      });



});