var userControllers = angular.module('userControllers', []);


app.controller('SignInCtrl', function ($scope, $routeParams, users){

	$scope.signin = function() {    
    };


});


app.controller('SignUpCtrl', function ($scope, $routeParams, users, $window){


	
	  $scope.credentials = {
		    username: '',
		    password: '',
		    email: ''
		 };


	$scope.signup = function(credentials) {
    	var key = users.signup(credentials);
    	 $scope.setCurrentUser(key);
    	 console.log(key);
    	 $window.location.href = '#!/';
    };

    //console.log($scope.currentUser);

	

});