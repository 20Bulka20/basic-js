//Your task is to implement the function dateSample(sampleActivity) that calculates sample approximate age (in years). 
//Please use given MODERN_ACTIVITY and HALF_LIFE_PERIOD.
//Function parameter sampleActivity is a string. 
//Calculated sample age must be number. 
//Age must be integer. 
//Age must be rounded up. 
//In case of wrong input parameter type or inadequate activity value or absence of argument function must return false.

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  let sa = parseFloat(sampleActivity);
  
    if((typeof(sampleActivity)!=='string')|| (sampleActivity<=0) || (sampleActivity > MODERN_ACTIVITY) || (sa!==sa) ) return false; 
    else{
    
    let a = (Math.log(MODERN_ACTIVITY/sa)) * (HALF_LIFE_PERIOD/0.693); 
     return Math.ceil(a); 
    }  
};
