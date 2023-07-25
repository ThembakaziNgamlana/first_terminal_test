import assert from "assert";
import { fromWhere } from "../js/fromWhere.js";

describe('Test fromWhere function' , function(){
    it("should return  Belliville if registration number starts with 'CY'", function(){
       assert.equal('Bellville',fromWhere('CY'));
    });
    it("should return paarl if the registration number starts 'CJ", function(){
      assert.equal('Paarl',fromWhere('CJ'));
    });

    it("should return Cape Town if the registration number starts with 'CA'", function(){
        assert.equal('Cape Town',fromWhere('CA'));
      });

     it("should return Some other place when the registration number does not starts with 'CY' or 'CJ' or 'CA'", function(){
        assert.equal('Some other place!',fromWhere('ZN'));
      });


});