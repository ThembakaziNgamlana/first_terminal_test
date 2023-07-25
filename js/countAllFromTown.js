export function countAllFromTown(regNumb,townLocation){
    var town = regNumb.split(","); 
     console.log(town);
    var townReg = [];
   for (var i = 0;i<town.length;i++){
      if (town[i].trim().startsWith(townLocation)){
        townReg.push(town[i].trim())
      } 
   }
         return townReg.length;
   
         

        
   }
