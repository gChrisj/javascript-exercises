const sumAll = function(a, b) {
    if((isNaN(a) || isNaN(b)) || (a < 0 || b < 0) || (typeof(a) == "string" || typeof(b) == "string")){
        return "ERROR"
    }
    if(typeof(a) == String || typeof(b) == String){
        console.log("whoops")
    }
    let result = 0;
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    for(let i = min; i <= max; i++){
       result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
