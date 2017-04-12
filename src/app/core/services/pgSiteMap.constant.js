'use strict';

/**
 * [SiteMap description]
 * @enum
 * @type {String}
 */
const SiteMap = {
  HOME: '/',
};

export default function (app) {
    app.constant('pgSiteMap', SiteMap);
}
