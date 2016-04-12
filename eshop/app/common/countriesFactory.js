(
	function(){
		angular.module("eshop.common")
			   .factory('countriesFact',['$http',function($http){
			   	return{
			   		getCountries:function(){
			   			return $http.get('app/data/countries.json');
			   		}
			   	};

			   }]);
	}


)();