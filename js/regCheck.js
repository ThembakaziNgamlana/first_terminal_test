export function regCheck(regNo, regEnd){
    return regNo.endsWith(regEnd);
    
    }
    console.log(regCheck('Gp'));
    console.log(regCheck('L'));            
    console.log(regCheck('EC'));           
    console.log(regCheck('Mp'));   