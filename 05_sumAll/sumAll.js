const sumAll = function(num1, num2) {
    if (num1 > 0 && num2 > 0 && Number.isInteger(num1) && Number.isInteger(num2)) {
        let sum = 0;
        let i = Math.min(num1, num2)
    
        while(i < Math.max(num1, num2) + 1) {
            sum = sum + i;
            i++;
        } return sum;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
