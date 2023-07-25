export function mostProfitableDepartment(salesData){
  
    let departmentSales = {};
    for(var i=0; i< salesData.length;i++) {
     let currentDep = salesData[i].department;
      
     if (departmentSales[currentDep] === undefined){
      departmentSales[currentDep] = 0;
     }
       departmentSales[currentDep] += salesData[i].sales;
      }
    
    let max = "";
    let maxDepartment = 0;
    
    for(var dep in  departmentSales){
     if(departmentSales[dep] > maxDepartment) {
       
          maxDepartment = departmentSales[dep];
         max = dep;
    } 
      }
       return max;
    
     }