angular.module('sioWebApp.common').factory('admobService', function(configuration) {

	var LOG = logger.getInstance('admobService');

    var admobService = {};

	admobService.createBanner = function() {
		LOG.info("createBanner");
		if( !window.plugins || !window.plugins.AdMob ) {
			alert('AdMob plugin not available/ready.');
			return;
		}

		am.createBannerView(
				{
					'publisherId': configuration.admobBannerKey,
					'adSize': am.AD_SIZE.BANNER,//SMART_BANNER
					'bannerAtTop': false,
					'overlap': false
				},
				function() {
					am.requestAd(
							{ 'isTesting':!configuration.isProd },
							function(){
								am.showAd( true );
							},
							function(){ alert('failed to request ad'); }
					);
				},
				function(){ alert('failed to create banner view'); }
		);
    };

	admobService.createInterstitial = function() {
		LOG.info("createInterstitial");
		if (!window.plugins || !window.plugins.AdMob) {
			alert('AdMob plugin not available/ready.');
			return;
		}

		var am = window.plugins.AdMob;
		am.createInterstitialView(
				{
					'publisherId': configuration.admobInterKey
				},
				function() {
					am.requestInterstitialAd( { 'isTesting':!configuration.isProd }, function() {}, function() { alert('failed to request ad'); });
				},
				function() {
					alert("Interstitial failed");
				}
		);
	}

	document.addEventListener('onReceiveAd', function(msg){ LOG.info("onReceiveAd: {0}",[msg]) });
	document.addEventListener('onFailedToReceiveAd', function(msg){ LOG.info("onFailedToReceiveAd: {0}",[msg]) });
	document.addEventListener('onPresentAd', function(msg){ LOG.info("onPresentAd: {0}",[msg]) });
	document.addEventListener('onDismissAd', function(msg){ LOG.info("onDismissAd: {0}",[msg]) });
	document.addEventListener('onLeaveToAd', function(msg){ LOG.info("onLeaveToAd: {0}",[msg]) });
});