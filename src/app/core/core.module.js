'use strict';

const shared = angular.module('core.shared', []);

import validationTestDirective from './directives/validation-test/validation-test.directive';

import constants from './services/constants';
import storeFactory from './services/store.factory';
import resolverProvider from './services/resolver.provider';
import pgSiteDataService from './services/pgSiteData.service';
import urlsMap from './services/urlsMap.constant';

validationTestDirective(shared);

constants(shared);
storeFactory(shared);
resolverProvider(shared);
urlsMap(shared);
pgSiteDataService(shared);

export default shared;
