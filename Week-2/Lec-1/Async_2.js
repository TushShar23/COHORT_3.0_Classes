//functional arguments and callbacks
function sum(a,b){
    return Number(a)+Number(b);
}
function subtract(a,b){
    return Number(a)-Number(b);
}
function multiply(a,b){
    return Number(a)*Number(b);
}
function divide(a,b){
    return Number(a)/Number(b);
}

function callOp(a,b,operation){
    return operation(a,b);
}

const val = callOp(2,3,sum);
console.log(val);
//what is happening is that we have defined four basic math functions and then a GENERIC function "callOp" which has (a,b,operation) as parameter.Whenever we call that function we need to pass 3 arguments in this case (2,3,sum) so a=2,b=3,operation=sum; means sum() will be called with the arguments(2,3);