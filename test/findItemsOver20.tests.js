import assert from "assert";
import { findItemsOver20} from "../js/findItemsOver20.js";

describe('Test findItemsOver20 function' , function(){
   
    it("should return items that have the quantity over 20 ", function(){
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
    
         var results=[
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
         ];
    
       assert.deepEqual(results,findItemsOver20(itemList));
      });

  

    it("should return items 1 that have quantity more than 20 ", function(){

        var itemList2 = [
            {name : 'apples', qty : 10},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];

     var results2=[
        {name : 'bananas', qty : 27},  
        ];

     assert.deepEqual(results2,findItemsOver20(itemList2));
      });
  
    
    

    it("should return  2 items with the  same name different quantity than over 20", function(){


         var itemList3 = [
            {name : 'apples', qty : 22},
            {name : 'pears', qty : 3},
            {name : 'bananas', qty : 7},
            {name : 'apples', qty : 33},
        ];

        var results3 = [
            {name : 'apples', qty : 22},
            {name : 'apples', qty : 33},
        ];

    assert.deepEqual(results3,findItemsOver20(itemList3));
      });




});