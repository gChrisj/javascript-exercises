const palindromes = function (words) {
    if(words.length < 2){
        return true;
    }

    let str = words.replace(/[^0-9a-z]/gi, '').toLowerCase();
    let revStr = str.split('').reverse().join('');

    return str == revStr;


};

// Do not edit below this line
module.exports = palindromes;
