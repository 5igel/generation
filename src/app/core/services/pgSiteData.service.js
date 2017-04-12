'use strict';

/**
 * SiteDataService
 * @class
 */
class SiteDataService {
  /**
   * @constructor
   * @param  {Logger} $log [description]
   */
  constructor($log, pgSiteMap) {
    $log.debug('site data init');
    this._pgSiteMap = pgSiteMap;
  }

  /**
   * [menuItems description]
   * @readonly
   * @return {string[]} menu item
   */
  get menuItems() {
    return [
      {
        href: this._pgSiteMap.HOME,
        label: 'Главная',
      },
      {
        href: 'tyrnir',
        label: 'Турнир',
      },
      {
        href: 'foto',
        label: 'Галерея',
      },
      {
        href: '/',
        label: 'Информация',
      },
      {
        href: '/',
        label: 'Команда',
      },
    ];
  }

  /**
   * @readonly
   * @return {SiteMap} [description]
   */
  get siteMap() {
    return this._pgSiteMap;
  }
}

/** @param {Application} app */
export default (app) => {
  app.factory('pgSiteDataService', ['$log', 'pgSiteMap', ($log, pgSiteMap) => {
    return new SiteDataService($log, pgSiteMap);
  }]);
};
