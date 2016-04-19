import angular from 'angular';




if (module.hot) {
  module.hot.accept();
  
  module.hot.dispose(function() {
    while (rootContainer.lastChild) {
      rootContainer.removeChild(rootContainer.lastChild)
    } 
  });      
}