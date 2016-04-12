(
	function(){
		angular.module("eshop.register")
			   .controller("registerCtrl",['$scope','countriesFact','statesFact',function($scope,countriesFact,statesFact){

          function init(){
            getCountries();
            getStates();
            $scope.registerUser={
                      firstName:"",
                      lastName:"",
                      gender:"",
                      age:"",
                      email:"",
                      address:{
                          country:"",
                          state:"",
                          city:"",
                          //streetName:"",
                          //zipCode:""
                      },
                      phone:""
                    };
            }
			   		
            function getCountries(){
              countriesFact.getCountries()
              .success(function(response){
                console.log(response);
                $scope.countries= response.countries;
              }).error(function(response){
                console.log(response);
              });
            }
            function getStates(){
              statesFact.getStates()
                        .then(function(response){
                          $scope.statesFromJson=response.data.states;
                        }).catch(function(response){
                          console.log("Error occured");
                        });
            }
            /*var states = [{name:"Telangana", countrycode:"IN",statecode:"TL"},
                             {name:"Andhrapradesh",countrycode:"IN",statecode:"AP"},
                             {name:"Florida",countrycode:"US",statecode:"FL"},
                             {name:"Oregon",countrycode:"US",statecode:"OR"},
                             {name:"Texas",countrycode:"US",statecode:"TX"}
                            ];
*/

            var cities = [{name:"Hyderabad",code:"TL"},
                            {name:"Vijayawada",code:"AP"},
                            {name:"Boca Raton",code:"FL"},
                            {name:"Irving",code:"TX"}

                          ];
			   	
			   		
            console.log($scope.registerUser);
            /*$scope.countryChanged= function(){
                  console.log($scope.selectedCountry)
            };*/
            $scope.register= function(){
                  $scope.registerUser.address.country= $scope.selectedCountry.code;
                  $scope.registerUser.address.state= $scope.selectedState.statecode;
                  console.log($scope.registerUser)
                  $scope.isRegister=true;
            };
            //function to change the state based on country selection
            $scope.countryChanged = function(){
              $scope.states=[];

              angular.forEach($scope.statesFromJson,function(item){
                if(item.countrycode==$scope.selectedCountry.code){
                  $scope.states.push(item);
                }
              });
            };
            $scope.stateChanged = function(){
              $scope.cities=[];
              angular.forEach(cities,function(item){
                if(item.code==$scope.selectedState.statecode){
                  $scope.cities.push(item);
                }
              });
            }
            init();
			   }]);

	}

)();