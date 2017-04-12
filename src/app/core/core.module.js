'use strict';

const shared = angular.module('core.shared', []);

import validationTestDirective from './directives/validation-test/validation-test.directive';

import constants from './services/constants';
import storeFactory from './services/store.factory';
import resolverProvider from './services/resolver.provider';
import pgSiteDataService from './services/pgSiteData.service';
import pgSiteMap from './services/pgSiteMap.constant';

validationTestDirective(shared);

constants(shared);
storeFactory(shared);
resolverProvider(shared);
pgSiteMap(shared);
pgSiteDataService(shared);

export default shared;
