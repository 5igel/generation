'use strict';

function routeConfig($urlRouterProvider, $mdThemingProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/');
}

export default angular.module('index.routes', []).config(routeConfig);
