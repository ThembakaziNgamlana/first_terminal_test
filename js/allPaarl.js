export function allPaarl(regNumber){
    
     if(regNumber === ''){
 
         return "empty dataset"
     }
 
 else{
     var splitRegNumber = regNumber.split(", ");
     var cjRegNumber = [];
     for(var i = 0; i < splitRegNumber.length; i++){
           if(splitRegNumber[i].startsWith("CJ")){
                 cjRegNumber.push(splitRegNumber[i]);
             } 
             
         else if( splitRegNumber ==! regNumber){
            return " registration  number is not from paarl"
         }
     }
        //console.log(regNumber
       //console.log(cjRegNumber)
     return cjRegNumber;
       
 }
  
 
 
     } 