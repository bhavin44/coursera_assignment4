(function() {
  'use strict';

  angular.module('MenuApp')
    .component('categories', {
      templateUrl: 'src/MenuItem/template/categories.template.html',
      bindings: {
        items: '<'
      }
    });

})();