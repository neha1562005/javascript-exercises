const palindromes = function (str) {
    const aphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanedStr = str
    .toLowerCase()
    .split('')
    .filter((ch) => aphanumerical.includes(ch))
    .join('');
    const revCleanedStr = cleanedStr.split('').reverse().join('');

    return revCleanedStr === cleanedStr;
};

// Do not edit below this line
module.exports = palindromes;
