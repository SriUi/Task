(
function(){
	'use strict';
	angular.module('eshop')
			.controller('mainCtrl',['$scope',function($scope){
				$scope.content="This is eshop Content";
				$scope.brandName="e-Shops"
				$scope.navUrl= "/app/navigation/navigation.tpl.html";
				$scope.handleclick= function(){
					$scope.content="This is new eshop Content";
					console.log("New Content");
				};
				$scope.loadContent= function(type){
					if(type =='register'){
						$scope.contentUrl = "/app/register/register.tpl.html"
					}
					if(type =='login'){
						$scope.contentUrl = "/app/login/login.tpl.html"
					}
					if(type == 'sales'){
						$scope.contenUrl = "/app/sales/sales.tpl.html"
					}
					console.log(type);
				};
			}]);
}
)();