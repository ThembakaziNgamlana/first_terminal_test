export function  findItemsOver20(itemList){
    const results = [];
    for(var i=0; i< itemList.length;i++){
      const list = itemList[i]
    if(list.qty > 20){
        results.push(list)
    }
      
    }
    return  results
      
    }