'use strict';

/**
 * Config function
 * @param  {LogProvider} $logProvider       [description]
 * @param  {CompileProvider} $compileProvider   [description]
 * @param  {MdThemingProvider} $mdThemingProvider [description]
 */
function config($logProvider, $compileProvider, $mdThemingProvider) {
  'ngInject';

  $logProvider.debugEnabled(true);

  if (NODE_ENV === 'production') {
    $logProvider.debugEnabled(false);
    $compileProvider.debugInfoEnabled(false);
  }

  $mdThemingProvider.theme('indigo')
    .primaryPalette('blue');
}

export default config;
