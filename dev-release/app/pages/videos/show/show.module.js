(function () {
    'use strict';

    angular.module('BlurAdmin.pages.videos.show', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('videos.show', {
                url: '/show',
                templateUrl: 'app/pages/videos/show/show.html',
                title: 'Mes vidéos',
                sidebarMeta: {
                    order: 0,
                },
            });
    }

})();
