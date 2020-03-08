// What season?
// Your task is to implement the function getSeason(date) that accepts Date object and returns the time of the year that matches it. 
//Time of the year must be string.
// If the date argument was not passed, the function must return the string 'Unable to determine the time of year!'. 
//If the date argument is invalid, the function must throw an Error.
// Shh! An enemy scout has lurked among the arguments that come into this function.
// Disguised
// He is guided by the famous proverb: 
//“If it looks like a duck, swims like a duck and quacks like a duck, 
//then it probably is a duck (who cares what it really is)”. 
//He is expertly disguised as a real date, but a clever javascript developer can catch him and throw an Error just in time!


module.exports = function getSeason(date) {
  if (date == undefined) return 'Unable to determine the time of year!';
  else if (isNaN(date)) throw new UserException("the date argument is invalid");
  else {
    var month = date.getMonth();
    if (month == 11 || month == 0 || month == 1) return 'winter';
    else if (month == 2 || month == 3 || month == 4) return 'spring';
    else if (month == 5 || month == 6 || month == 7) return 'summer';
    else if (month == 8 || month == 9 || month == 10) return 'fall';
  }
};
