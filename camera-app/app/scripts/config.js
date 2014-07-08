'use strict';
angular.module('sioWebApp.config', [])
		.constant('configuration', {
			name : 'Dragon Camera',
			barStyle : 'bar-energized',
			version : '1.0.0',
            marketUrl: 'com.dragon.camera2',
			admobBannerKey : 'ca-app-pub-6869992474017983/9375997553',
			admobInterKey : 'ca-app-pub-6869992474017983/9375997553',
			isProd: JSON.parse('true')
		}
);
