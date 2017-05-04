'use strict';

import tournamentTpl from './tournament.html';
import tournamentController from './tournament.controller';

function routeConfig($stateProvider, urlsMap) {
  'ngInject';

  $stateProvider
    .state(urlsMap.TOURNAMENT, {
      url: urlsMap.TOURNAMENT,
      templateUrl: tournamentTpl,
      controller: tournamentController,
      controllerAs: 'main'
    });
}

export default ['$stateProvider', 'urlsMap', routeConfig];
