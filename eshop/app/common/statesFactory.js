(function(){
	angular.module('eshop.common')
		   .factory('statesFact',["$http",function($http){
		   	return{
		   		getStates:function(){
		   		return $http.get("app/data/states.json")
		   		}
		   	}	
		   }])
	})
();