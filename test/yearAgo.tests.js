import assert from "assert";
import { yearsAgo } from "../js/yearAgo.js";

describe('yearsAgo', function(){
    it("should return 0 for the current year", function(){
       const currentYear = new Date().getFullYear();
       assert.equal(yearsAgo(currentYear), 0)
})
    it("it should return the current corrent number of years for a past year ", function(){
        assert.equal(yearsAgo(2000), 23) ;
        assert.equal(yearsAgo(1976), 47) ;
    });
    it("it should return zero when no year is enterted", function(){
      assert.equal(yearsAgo(2023), 0);
    });


    
});