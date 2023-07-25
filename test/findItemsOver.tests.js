import assert from "assert";
import { findItemsOver } from "../js/findItemsOver.js";


describe('Test findItemsOver function' , function(){
    it("should return items that are greater than threshold", function(){
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];

       var results = [
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
      ];

        assert.deepEqual(results, findItemsOver(itemList, 20))
    });

    it("should return item empty string if thresold is equal to 100", function(){
        var itemList2 = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 25},
            {name : 'apples', qty : 3},
        ];

       var results2 = [
        {name : 'pears', qty : 100},
      ];

      assert.deepEqual([],findItemsOver(itemList2, 100));
    });

    it("should  return one item that is greater than threshold", function(){
        var itemList3 = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 20},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];

    var results3 = [
        {name : 'bananas', qty : 27},
    ];
      assert.deepEqual(results3,findItemsOver(itemList3 , 20));
      });



});