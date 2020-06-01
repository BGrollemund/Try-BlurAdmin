(function () {
    'use strict';

    angular.module('BlurAdmin.pages.videos')
        .controller('VideosPageCtrl', VideosPageCtrl);

    /** @ngInject */
    function VideosPageCtrl($scope, $filter, editableOptions, editableThemes, $location) {

        $scope.videos = [
            {
                id: 1,
                title: 'La vie',
                category: 4,
                description: 'Description 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                image: 'app/profile/Alexander.png',
            },
            {
                id: 2,
                title: 'Le lac des requins',
                category: 2,
                description: 'Description 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                image: 'app/profile/Andrey.png',
            },
            {
                id: 3,
                title: 'Reviens vite',
                category: 4,
                description: 'Description 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                image: 'app/profile/Kostya.png',
            },
            {
                id: 4,
                title: 'Conte de Noël',
                category: 'Romance',
                description: 'Description 4 : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                image: 'app/profile/Nasta.png',
            },
            {
                id: 5,
                title: 'Août débarque !',
                category: 1,
                description: 'Description 5 : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                image: 'app/profile/Nick.png',
            },
            {
                id: 6,
                title: 'Les aventuriers',
                category: 2,
                description: 'Description 6 : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                image: 'app/profile/Vlad.png',
            },
            {
                id: 7,
                title: 'Frères et Loupes',
                category: 1,
                description: 'Description 7 : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                image: 'app/profile/Andrey.png',
            },
            {
                id: 8,
                title: 'Sabrina',
                category: 3,
                description: 'Description 8 : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                image: 'app/profile/Nick.png',
            },
            {
                id: 9,
                title: 'Qui est là ?',
                category: 2,
                description: 'Description 9 : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                image: 'app/profile/Nasta.png',
            },
        ];

        $scope.categories = [
            {id: 1, text: 'Science-Fiction'},
            {id: 2, text: 'Aventure'},
            {id: 3, text: 'Romance'},
            {id: 4, text: 'Histoire vraie'}
        ];

        $scope.showCategory = function(video) {
            let selected = [];
            if(video.category) {
                selected = $filter('filter')($scope.categories, {id: video.category});
            }
            return selected.length ? selected[0].text : 'Not set';
        };

        $scope.addVideo = function(video, category) {
            if( !video || !video.title || !category.id || !video.description ) {
                console.log('error: empty fields');
                return;
            }

            $scope.inserted = {
                id: $scope.videos.length+1,
                title: video.title,
                category: category.id,
                description: video.description,
                image: 'app/profile/Nasta.png',
            };
            $scope.videos.push($scope.inserted);
            $location.url('/videos/show');
            alert('Video ajoutée avec succès!')
        };

        $scope.removeVideo = function(index) {
            $scope.videos.splice(index, 1);
        };

        editableOptions.theme = 'bs3';
        editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
        editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';

    }

})();
