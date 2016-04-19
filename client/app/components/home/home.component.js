import ngMaterial from 'angular-material';
import 'angular-material/angular-material.css'
import template from './home.html';
import controller from './home.controller';
// import foundation from 'foundation';
// import './home.styl';

let homeComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default homeComponent;
