angular.module('directiveAsComponent')
.controller('DirectiveAsComponentController', function($scope) {
  
})
.service('OrderController', function() {
  this.load = function() {
    return {
      id: 120003,
      delivered: false,
      products: [
        { id: 100, name: 'Hammastahna', qty: 2}, 
        { id: 200, name: 'Polkupyörä', qty: 4}, 
        { id: 300, name: 'Mankeli', qty: 1}
      ]
    };
  };

  this.save = function(order) {};
})
.controller('ParentOrderController', function($scope, OrderController) {
  $scope.errorMessage = null;
  $scope.order = OrderController.load();

  $scope.save = function() {
  	$scope.errorMessage = null;
    if($scope.order.products.length === 0) {
    	$scope.errorMessage = 'Tilauksella pitää olla vähintään yksi tuote!';
    	return;
    }
    OrderController.save($scope.order);
  };
})
.controller('ChildProductsController', function($scope) {
  $scope.removeProduct = function(product) {
  	var index = $scope.order.products.indexOf(product);
  	$scope.order.products.splice(index, 1);
  	$scope.save();
  };
})
.controller('ParentOrderController2', function($scope, OrderController) {
  $scope.errorMessage = null;
  $scope.order = OrderController.load();

  $scope.$on('ChildProductsController2.productRemoved', function() {
	$scope.save();  	
  });

  $scope.save = function() {
  	$scope.errorMessage = null;
    if($scope.order.products.length === 0) {
    	$scope.errorMessage = 'Tilauksella pitää olla vähintään yksi tuote!';
    	return;
    }
    OrderController.save($scope.order);
  };
})
.directive('orderProducts', function() {
  return {
  	templateUrl: 'templates/directiveAsComponent/products2.html',
  	scope: {
      products: "="
  	}
  };
})
.controller('ChildProductsController2', function($scope) {
  $scope.removeProduct = function(product) {
  	var index = $scope.products.indexOf(product);
  	$scope.products.splice(index, 1);
  	$scope.$emit('ChildProductsController2.productRemoved', product);
  };
});