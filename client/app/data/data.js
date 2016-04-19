import angular from 'angular';
import Eventbrite from './eventbrite/eventbrite';

const dataModule = angular.module('app.data', [
  Eventbrite.name
]);

export default dataModule;
