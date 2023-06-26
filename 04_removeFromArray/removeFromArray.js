const removeFromArray = function(arr, ...args) {

    for(let k = 0; k < args.length; k++){

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === args[k]){
            arr.splice(i, 1);
        }
    }
}
   console.log(args[0])
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
