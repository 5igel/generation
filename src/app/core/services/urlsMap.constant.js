'use strict';

/**
 * [UrlsMap description]
 * @enum
 * @type {String}
 */
const UrlsMap = {
  HOME: '/',
  TOURNAMENT: 'tyrnir',
};

/** @param {Application} app */
export default function(app) {
  app.constant('urlsMap', UrlsMap);
}
