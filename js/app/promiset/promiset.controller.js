angular.module('promiset')
.controller('PromisetController1', function($scope, customerService) {
  $scope.customers = [];
  customerService.loadCustomers()
  .then(function(customers) {
    customers.forEach(function(c) { c.name += ' (' + c.type + ')' });
    return customers;
  })
  .then(function(customers) {
    customers.forEach(function(c) { c.name = '#' + c.id + ' ' + c.name });
    return customers;
  })
  .then(function(customers) {
    $scope.customers = customers;
  })
})
.controller('PromisetController2', function($q, $scope, customerService, orderService, productService) {
  $scope.infoRows = [];

  var customerPromise = customerService.loadCustomers()
  .then(function(customers) {
    customers.forEach(function(c) { c.name += ' (' + c.type + ')' });
    return customers;
  });

  var productsMapPromise = productService.loadProducts()
  .then(function(products) {
    var map = {};
    products.forEach(function(p) { map[p.id] = p });
    return map;
  });

  $q.all({
    customers: customerPromise,
    productsMap: productsMapPromise,
    orders: orderService.loadOrders()
  })
  .then(function(results) {
    $scope.generateInfoRows(results.customers, results.orders, results.productsMap);
  });

  $scope.generateInfoRows = function(customers, orders, productsMap) {
    customers.forEach(function(c) {
      var co = orders.filter(function(o) { return o.customerId === c.id});

      var value = 0;
      co.forEach(function(o) { 
        o.productIds.forEach(function(pId) { value += productsMap[pId].value });
      });

      $scope.infoRows.push(c.name + ': tilauksia ' + co.length + ' kpl, arvo: ' + value + ' €');
    });
  };
})
.service('customerService', function($q, $timeout) {
  this.loadCustomers = function() {
    var deferred = $q.defer();

    $timeout(function() {
      deferred.resolve([
        {id:1, name: 'Vantaa', type: 'julkishallinto'}, 
        {id:2, name: 'Apple', type: 'yritys'}]);
    }, 300);

    return deferred.promise;
  }
})
.service('orderService', function($q, $timeout) {
  this.loadOrders = function() {
    var deferred = $q.defer();

    $timeout(function() {
      deferred.resolve([
        {id:100, customerId: 1, productIds: [1000, 1002, 1005]},
        {id:102, customerId: 1, productIds: [1002, 1003]},
        {id:103, customerId: 2, productIds: [1000, 1004, 1005]},
        {id:104, customerId: 2, productIds: [1003]},
        {id:105, customerId: 2, productIds: [1005, 1005]}]);
    }, 500);

    return deferred.promise;
  }
})
.service('productService', function($q, $timeout) {
  this.loadProducts = function() {
    var deferred = $q.defer();

    $timeout(function() {
      deferred.resolve([
        {id:1000, value: 100},
        {id:1002, value: 340},
        {id:1003, value: 876},
        {id:1004, value: 426},
        {id:1005, value: 649}]);
    }, 700);

    return deferred.promise;
  }
});