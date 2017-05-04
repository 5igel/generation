'use strict';
import logo from '_images/logo.png';

/**
 * MainController
 * @param {Logger} $log [description]
 * @param {SiteDataService} pgSiteDataService [description]
 */
function TournamentCtrl($log, pgSiteDataService) {
  'ngInject';
  $log.debug('TournamentCtrl!');
  this.logo = logo;
  this.menuItems = pgSiteDataService.menuItems;
  this.links = pgSiteDataService.siteMap;
}

export default TournamentCtrl;
