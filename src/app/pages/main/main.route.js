'use strict';

import mainTpl from './main.html';
import mainController from './main.controller';

function routeConfig($stateProvider, urlsMap) {
  'ngInject';

  $stateProvider
    .state('main', {
      url: urlsMap.HOME,
      templateUrl: mainTpl,
      controller: mainController,
      controllerAs: 'main'
    });
}

export default ['$stateProvider', 'urlsMap', routeConfig];
