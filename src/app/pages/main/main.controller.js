'use strict';
import logo from '_images/logo.png';

/**
 * MainController
 * @param {Logger} $log [description]
 * @param {SiteDataService} pgSiteDataService [description]
 */
function MainController($log, pgSiteDataService) {
  'ngInject';
  $log.debug('Hello from main controller!');
  this.logo = logo;
  this.menuItems = pgSiteDataService.menuItems;
  this.links = pgSiteDataService.siteMap;
}

export default MainController;
