const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const numberArray = [12,324,213,4,2,3,45,4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
function slice(start,end){
  newfoods=[]
  for (let i=start;i<end-1;i++){
    newfoods.push(foods[i])
  }
  return newfoods
}

// Progression 2:
function spliced(){
  foods.splice(2,0, 'noodles', 'icecream')
  return foods;
}

// Progression 3:
function isEven(number){
  return number%2===0?true:false
}
function isPrime(number){
  for (let j=2;j<number;j++){
    if (number%j===0){
      return false
    }
    
  }
  return true
}

function checkNumber(numberArray,operation){
  modifiednumber=numberArray.filter(operation);
  return modifiednumber;
}

// Progression 4:
function reject(numberArray){
  let numprime=[]
  numberArray.forEach((number)=>{
    isPrime(number) ? null : numprime.push(number)
  })
  return numprime
}
function nonPrime(numberArray){
  ans = reject(numberArray)
  return ans
};

// Progression 5:

const isEvenUsingLambda = number => number%2===0

// Progression 6:

function square(number){
  number*number
}
function findSquareOfNumbers(myArray){
  let ans= myArray.map((ele)=>{
    return ele*ele;
  })
  return ans
}

// Progression 7:

function multiply(myArray){
  return myArray.reduce((mul,num)=>{
    return mul*num
  })
}

function sumOfSquares(myArray){
  return findSquareOfNumbers(myArray).reduce((sum,num)=>{
    return sum+num
  })
}
