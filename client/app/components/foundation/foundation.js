import angular from 'angular';
import foundation from 'foundation';

const foundationModule = angular.module('foundation', [foundation])
.component('foundation', foundationModule);

export default foundationModule