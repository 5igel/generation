'use strict';

/**
 * SiteDataService
 * @class
 */
class SiteDataService {
  /**
   * @constructor
   * @param  {Logger} $log [description]
   * @param  {Object} urlsMap [description]
   */
  constructor($log, urlsMap) {
    $log.debug('site data init');
    this._urlsMap = urlsMap;
  }

  /**
   * [menuItems description]
   * @readonly
   * @return {string[]} menu item
   */
  get menuItems() {
    return [
      {
        href: this._urlsMap.HOME,
        label: 'Главная',
      },
      {
        href: this._urlsMap.TOURNAMENT,
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
    return this._urlsMap;
  }
}

/** @param {Application} app */
export default (app) => {
  app.factory('pgSiteDataService', ['$log', 'urlsMap', ($log, urlsMap) => {
    return new SiteDataService($log, urlsMap);
  }]);
};
