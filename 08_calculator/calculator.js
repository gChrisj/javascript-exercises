const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return Math.max(a, b) - Math.min(a, b);
};

const sum = function(arr) {
	if(arr.length < 1){
    return 0;
  }
  if(arr.length == 1){
    return arr[0];
  }
  if(arr.length == 2){
    return arr[0] + arr[1];
  }

  let result = 0;

  result = [...arr].reduce((x, y)=>x+y);

  return result;
};

const multiply = function(...arr) {
  if(arr.length < 1){
    return 0;
  }
  if(arr.length == 1){
    return arr[0];
  }
  if(arr.length == 2){
    return arr[0] * arr[1];
  }
  

  let result = 0;

  result = [...arr].reduce((x, y)=>x*y);

  return result;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	if(a == 0 || a == 1)return 1;
  let result = 1;
  for(let i = 1; i <= a; i++){
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
