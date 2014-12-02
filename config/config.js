//var app = window.app;
/*
* $scope.configs, $scope.branch and $scope.pluginConfig, among others are available from the parent scope
* */
app.controller('StriderCucumberCtrl', ['$scope', function ($scope) {
	$scope.saving = false;
	$scope.config = $scope.pluginConfig('strider-cucumber') || {};



	$scope.save = function () {
		$scope.saving = true;
		$scope.pluginConfig('strider-cucumber', $scope.config, function () {
			$scope.saving = false;
		});
	};

}]);