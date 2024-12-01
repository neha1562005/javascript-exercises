const leapYears = function(year) {
 const isDivisibleByFour = year % 4 === 0;
 const isCentury = year % 100 === 0;
 const isDivisbileByFourHundred = year % 400 === 0;

 if (isDivisibleByFour && (!isCentury || isDivisbileByFourHundred)) return true;
 else return false;

};

// Do not edit below this line
module.exports = leapYears;
