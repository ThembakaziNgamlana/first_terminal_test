export function transportFee(price){
    switch(price){
      case "morning":
        return "R20";
      case "afternoon":
        return  "R10";
      default:
        return "free";
      }            
    }