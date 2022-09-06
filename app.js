// Code goes here

var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope){
	console.log("My controller.....");
		
		
		$scope.users = [
			{name: "OngKhacQue", email: "queok@vnpt.vn", fullname: "OKQ"},
			{name: "Cao Kim hạnh", email: "Caohanh@vnpt.vn", fullname: "Cao Kim Hanh"},
			{name: "Nguyen Duc Quyen", email: "quyennd@fpt.com", fullname: "quyen ND"}
		];

	$scope.addUser = function(){
		$scope.users.push($scope.newUser);
		$scope.newUser = {};
		$scope.message = "New User Added successfully";
	};
	
	$scope.selectUser = function(user){
		console.log(user);
		$scope.clickedUser = user;
	};

	$scope.editUser = function(){
		$scope.message = "User Edited successfully";
	};

	$scope.deleteUser = function(){
		$scope.users.splice($scope.users.indexOf($scope.clickedUser));
		$scope.message = "User Deleted successfully";
	};

	$scope.clearMessage = function(){
		$scope.message = "";
	};

});