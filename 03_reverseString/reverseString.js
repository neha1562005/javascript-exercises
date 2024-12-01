const reverseString = function(string) {
    const arr = [...string];
    const reverseArr = arr.reverse();
    const ans = reverseArr.join("");
    return ans;
};

// Do not edit below this line
module.exports = reverseString;
