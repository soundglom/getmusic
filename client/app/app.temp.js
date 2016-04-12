import angular from 'angular';
import './app2.js';
// console.log(angular);



if (module.hot) {
  module.hot.accept();
  
    module.hot.dispose(function() {
      while (rootContainer.lastChild) {
        rootContainer.removeChild(rootContainer.lastChild)
      } 
    });      
}