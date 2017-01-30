(function () {
  'use strict';

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/MenuItem/template/items.template.html',
    bindings: {
      items: '<'
    }
  });
})();