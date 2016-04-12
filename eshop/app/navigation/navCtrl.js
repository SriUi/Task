(
	function(){
		'use strict';
		function navCtrlFn($scope){
			$scope.brandName="e-Shop";
		}
		angular.module("eshop.navigation")
			   .controller('navCtrl',['$scope',navCtrlFn]);
	}


	)();