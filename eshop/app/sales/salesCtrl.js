(
	function(){
    'use strict';
	angular.module('eshop.sales')
		.controller("salesCtrl",["$scope","salesFact",function($scope,salesFact){

				 function init(){
                 salesFact.getSales()
                        .then(function(response){
                          $scope.sales=response.data.sales;
                        }).catch(function(response){
                          console.log("Error occured");
                        });
                    }
                    init();
		}]);
	}
)();