'use strict';

import mainTpl from './main.html';
import mainController from './main.controller';

function routeConfig($stateProvider, pgSiteMap) {
  'ngInject';

  console.log(pgSiteMap);
  $stateProvider
    .state('main', {
      url: pgSiteMap.HOME,
      //url: '/',
      templateUrl: mainTpl,
      controller: mainController,
      controllerAs: 'main'
    });
}

export default ['$stateProvider', 'pgSiteMap', routeConfig];
