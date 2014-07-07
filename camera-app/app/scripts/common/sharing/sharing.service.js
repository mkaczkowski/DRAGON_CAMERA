angular.module('sioWebApp.common').factory('sharingService', function(configuration, $cordovaSocialSharing, notificationService, logger) {

	var LOG = logger.getInstance('sharingService');

	var shareService = {};

    shareService.shareViaFacebook = function(image) {
        var link = configuration.url;
        var message = "Magic Camera APP";
        $cordovaSocialSharing.shareViaFacebook(message, image, link).then(function(result) {
			LOG.error("shareViaFacebook result:{0}",[result]);
        }, function(err) {
			LOG.error("shareViaFacebook error:{0}",[err]);
            notificationService.showError("Ooops. Something went wrong.");
        });
    };

    return shareService;
});

