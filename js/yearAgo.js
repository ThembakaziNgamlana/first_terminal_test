export function yearsAgo(year){
    var theDate = new Date()
    console.log(theDate)
   return theDate.getFullYear() - year
  }