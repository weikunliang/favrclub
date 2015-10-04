angular.module('starter.controllers', [])

.controller('FavorsCtrl', function($scope) {
  $scope.favors = [
    { username: 'Weikun', id: 1, item: 'Colgate 360 Optic White Toothbrush ', price: '10', location: '1069 Morewood Avenue, Pittsburgh PA' },
    { username: 'Justin', id: 2, item: 'Cooler', price: '20', location: '5000 Forbes Avenue' },
    { username: 'Akash', id: 3, item: 'Eyedrops', price: '7', location: 'Beeler, Pittburgh PA' },
    { username: 'Akash', id: 4, item: 'IS Shirt', price: '20', location: 'Beeler, Pittburgh PA' },
    { username: 'Akash', id: 5, item: 'Pack of 10 pencils', price: '10', location: 'Beeler, Pittburgh PA' },
    { username: 'Weikun', id: 6, item: 'Stapler', price: '3', location: '1069 Morewood Avenue, Pittsburgh PA' }
  ];
})

.controller('FavorCtrl', function($scope, $stateParams) {
});
