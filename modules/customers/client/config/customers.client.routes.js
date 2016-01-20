'use strict';

//Setting up route
angular.module('customers').config(['$stateProvider',
  function($stateProvider) {
    // Customers state routing
    $stateProvider.
    state('customers', {
      abstract: true,
      url: '/customers',
      template: '<ui-view/>'
    }).
    state('customers.list', {
      url: '',
      templateUrl: 'modules/customers/client/views/list-customers.client.view.html'
    }).
    state('customers.create', {
      url: '/create',
      templateUrl: 'modules/customers/client/views/create-customer.client.view.html'
    }).
    state('customers.view', {
      url: '/:customerId',
      templateUrl: 'modules/customers/client/views/view-customer.client.view.html'
    }).
    state('customers.edit', {
      url: '/:customerId/edit',
      templateUrl: 'modules/customers/client/views/edit-customer.client.view.html'
    });
  }
]);
