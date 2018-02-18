(function()
{
    'use strict';
    angular.module('carListingApp')
           .controller('listingController',listingController);

    listingController.$inject = ['$scope','carListingFactory'];
    function listingController($scope,carListingFactory)
    {
       $scope.cars;

       carListingFactory.getCars().success(function(data)
       {
           $scope.cars = data;
       }).error(function(error)
       {
           console.log('error');
       });

    }
})();
