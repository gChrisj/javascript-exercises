const reverseString = function(st) {
    if(st.length < 1){
        return st;
    }
    return [...st].reduce((acc, x)=>x.concat(acc));
};

// Do not edit below this line
module.exports = reverseString;
