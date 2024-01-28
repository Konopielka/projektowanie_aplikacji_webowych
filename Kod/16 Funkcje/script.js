function simpleFunction(){
console.log('Wywołanie funkcji simpleFunction');
}
simpleFunction();

function rewriteIt(text){
console.log(text);
}
rewriteIt('Jakiś Tekst');

function sumOfTwo(a, b){
    let sum = a + b;
    console.log(a + ' + ' + b + ' = ' + sum);
}
sumOfTwo(2, 1);

function functionWithReturn(){
return 'jakiś zwrócony tekst';
}

function showReturned(){
console.log(functionWithReturn())
}
showReturned();

function f(p1, p2){
console.log('dwa parametry ' + p1 + ' ' + p2);
}
function f(p3){
console.log('jeden parametr ' + p3)
}

f(1,2);
