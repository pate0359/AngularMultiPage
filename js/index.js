var app = angular.module('AngularToDo', ['LocalStorageModule', 'ngRoute']);

app.config(function ($routeProvider, $locationProvider, localStorageServiceProvider) {
	$routeProvider
		.when('/list/:listID', {
			templateUrl: 'list.html',
			controller: 'ListController'
		})
		.when('/', {
			redirectTo: '/list/1'
		});
	$routeProvider.otherwise({
		redirectTo: '/'
	});

	localStorageServiceProvider
		.setPrefix('AngularMultipage-pate0359')
		.setNotify(true, true)
});

//Tab controller
app.controller("PanelController", function () {

	this.tab = 1;
	this.selectTab = function (setTab) {
		this.tab = setTab;
	};
	this.isSelected = function (checkTab) {
		return this.tab === checkTab;
	}
});

//List Controller
app.controller('ListController', function ($scope, $routeParams, localStorageService) {

	if (!localStorageService.isSupported) {

		alert("Local Storage not supported");
		return;
	}

	var id = $routeParams.listID;
	$scope.listTitle = "List " + id;
	$scope.listItems = localStorageService.get("listItem" + id);
	if (!$scope.listItems) {
		$scope.listItems = [];
	}

	$scope.addValue = function () {
		var item = '{"title":"' + $scope.newValue + '"}';
		var obj = JSON.parse(item);
		$scope.listItems.push(obj);
		$scope.newValue = "";
		//Set local storage
		localStorageService.set("listItem" + id, $scope.listItems);
	}

	$scope.removeValue = function ($index, item) {
		//alert("remove");
		$scope.listItems.splice($index, 1);
		localStorageService.set("listItem" + id, $scope.listItems);
	}
});