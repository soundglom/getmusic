import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngMaterial from 'angular-material';
// import Common from './common/common';
// import Data from './data/data';
import Components from './components/components';
import AppComponent from './app.component';

import 'normalize.css';

console.log('hello')

angular.module('app', [
    uiRouter,
    ngAnimate,
    ngMaterial,
    // foundation.dynamicRouting,
    // foundation.dynamicRouting.animations,
    // Common.name,
    // Data.name,
    Components.name
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .component('app', AppComponent);
  // AppComponent.$inject = ['angular-foundation']
