(function () {
    'use strict';

    angular.module('BlurAdmin.pages.videos.add', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('videos.add', {
                url: '/add',
                templateUrl: 'app/pages/videos/add/add.html',
                title: 'Ajouter une vidéo',
                sidebarMeta: {
                    order: 1000,
                },
            });
    }

})();
