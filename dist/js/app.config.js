angular.module('generationApp', ['ngMaterial'])
  .config(['$mdThemingProvider', '$stateProvider', function($mdThemingProvider, $stateProvider) {
    $mdThemingProvider.theme('altTheme')
    .primaryPalette('purple');

    const helloState = {
      name: 'hello',
      url: '/hello',
      template: '<h3>hello world!</h3>'
    };

    const aboutState = {
      name: 'about',
      url: '/about',
      template: '<h3>Its the UI-Router hello world app!</h3>'
    };

    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
  }]);
