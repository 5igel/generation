'use strict';

import components from './index.components';
import config from './index.config';
import run from './index.run';

import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import coreModule from './core/core.module';
import indexComponents from './index.components';
import indexRoutes from './index.routes';
import mainModule from './pages/main/main.module';

const App = angular.module('generation', [
  // plugins
  ngMaterial,
  uiRouter,
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngMessages',
  'ngAria',

  // core
  coreModule.name,

  // components
  indexComponents.name,

  // routes
  indexRoutes.name,

  // pages
  mainModule.name

]);

App.config(config).run(run);

export default App;
