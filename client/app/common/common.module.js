import angular from 'angular';

import navbar from './nav/nav'

let commonModule = angular.module('app.common', [
    navbar,
])
.name;

export default commonModule;