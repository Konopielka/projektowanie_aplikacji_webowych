window.onload = function(){

setTimeout(function(){

let newElement = document.createElement('div')
newElement.textContext = '5';
document.getElementById('big-box').appendChild(newElement);
}, 2000);

console.log('jakiś tekst');
setTimeout(function(){
let element = document.getElementById('box-two');
let parent = document.getElementById('big-box');

parent.removeChild(element);

}, 4000)
}