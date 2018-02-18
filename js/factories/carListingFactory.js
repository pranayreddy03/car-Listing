(function()
{
    'use strict';

    angular.module('carListingApp')
           .factory('carListingFactory',carListingFactory);

   function carListingFactory($http) {

        function getCars()
        {
            return $http.get('../data/data.json');
        }

        return {
            getCars : getCars
        }
    }


})();
