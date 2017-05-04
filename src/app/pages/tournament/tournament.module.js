'use strict';

import route from './tournament.route';

const tournamentPageModule = angular.module('tournament-module', [
  'core.shared',
  'ui.router'
]);

tournamentPageModule
    .config(route);

export default tournamentPageModule;
