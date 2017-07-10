(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dish = "";
 $scope.input = "";
 $scope.message = "";
 $scope.messageClass = "text-success";

  $scope.check = function () {
    $scope.message = messageForDish($scope.dish);
    $scope.messageClass = classForMessage($scope.dish);
    $scope.input = classForInput($scope.dish);
  }

    $scope.reset = function() {
     $scope.inputClass = "";
     $scope.message = "";
     $scope.messageClass = "text-success";
   }

  };

  function classForInput(dish) {
      if (dish.trim() == "") {
        return "has-error";
      }
      else {
        return "has-success";
      }
    }

    function numberOfDishes(dish) {
      var items = dish.split(",");
      var numberOfItems = 0;
      for (var i = 0; i < items.length; i++) {
        if (items[i].trim() != "") {
          numberOfItems ++;
        }
      }
      return numberOfItems;
    }

    function messageForDish(dish) {
        if (dish.trim() == "") {
          return "Please enter data first";
        }
        else if (numberOfDishes(dish) <= 3) {
          return "Enjoy!";
        }
        else {
          return "Too much!";
        }
      }
      function classForMessage(dishes) {
          if (dishes.trim() == "") {
            return "text-danger";
          }
          else {
            return "text-success";
          }
        }





})();
