import angular from 'angular';
import Navbar from './navbar/navbar';
// import Hero from './hero/hero';
import Data from './data/data'
import User from './user/user';

let commonModule = angular.module('app.common', [
  Navbar.name,
  // Hero.name,
  User.name,
  // Data.name,
  // Apis.name
]);

export default commonModule;
