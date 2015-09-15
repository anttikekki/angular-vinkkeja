angular.module('suorituskyky')
.controller('SuorituskykyController1', function($scope) {
  $scope.customers = [];
  $scope.orders = [];
  $scope.getOrderValueCallCount = 0;
  $scope.getOrderValueCallCountMessage = '';

  var count = 1;
  while(count < 50) {
  	var orderCount = 1;
  	while(orderCount < 5000) {
  	  $scope.orders.push({
  	  	customerId: count,
  	  	value: orderCount * count
  	  });
  	  orderCount++;
  	}

  	$scope.customers.push({
  	  id: count,
  	  name: 'Asiakas '+count
  	});
  	count++;
  }

  $scope.getOrderValue = function(customerId) {
  	$scope.getOrderValueCallCount++;
  	if($scope.getOrderValueCallCount % 100 == 0) {
  	  $scope.getOrderValueCallCountMessage = $scope.getOrderValueCallCount + '+';
  	}

  	var orderValue = 0;
  	$scope.orders
  	.filter(function(o) { return o.customerId === customerId})
  	.forEach(function(o) { orderValue += o.value });
  	return orderValue;
  };

});