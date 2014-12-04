//var app = window.app;
/*
* $scope.configs, $scope.branch and $scope.pluginConfig, among others are available from the parent scope
* */
app.controller('StriderCucumberCtrl', ['$scope', function ($scope) {
	$scope.saving = false;
	$scope.config = $scope.pluginConfig('strider-cucumber') || {};
  $scope.config.environment = '';
  $scope.config.prepare = '';
  $scope.config.deploy = '';
  $scope.config.cleanup = '';
	/*
	$scope.$watch('configs[branch.name].template.config', function (value) {
		$scope.config = value || {
			environment: 'Hi from `environment`',
			prepare: 'Hi from `prepare`',
			test: 'Hi from `test`',
			deploy: 'Hi from `deploy`',
			cleanup: 'Hi from `cleanup`'
		};
	});*/

	//$scope.scripts = $scope.panelData.striderCucumber;
	//console.log($scope.panelData);
	

	$scope.save = function () {
		$scope.saving = true;
		$scope.pluginConfig('strider-cucumber', $scope.config, function () {
			$scope.saving = false;
		});
	};

}]);