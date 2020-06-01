(function () {
    'use strict';

    angular.module('BlurAdmin.pages.videos', [
        'BlurAdmin.pages.videos.show',
        'BlurAdmin.pages.videos.add',
    ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('videos', {
                url: '/videos',
                template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
                abstract: true,
                controller: 'VideosPageCtrl',
                title: 'Videos',
                sidebarMeta: {
                    icon: 'ion-android-laptop',
                    order: 100,
                },
            });
    }

})();

