(
function(){
	'use strict';
	angular.module("eshop.sales")
			.factory("salesFact",["$http",function($http){
				return {
					   getSales: function(){
					   return $http.get("app/data/sales.json");
				}
			}

			}]);
}

)();