import angular from 'angular';
import './app2.js';
// console.log(angular);

const testing = 'testing 123';

// {
//   let newTest = '2'
//   console.log(newTest)
// }
var rootContainer = document.getElementById('root');
console.log(rootContainer); 

const title = document.createElement('h2')
title.textContent = 'Is this thing on?';

rootContainer.appendChild(title);
// console.log('this wordBreakks');
// console.log('this works again');
console.log('this works again and again');
// document.write('hello')
// document.write('testing 123')

const tryagain = 'is my ES6 working?'

// console.info(tryagain)

if (module.hot) {
  module.hot.accept();
  
    module.hot.dispose(function() {
      while (rootContainer.lastChild) {
        rootContainer.removeChild(rootContainer.lastChild)
      } 
    });      
}