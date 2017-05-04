'use strict';

/** @param {Application} app */
export default function(app) {
  app.constant('ROUTE_ERRORS', {auth: 'Authorization has been denied.'});
}
