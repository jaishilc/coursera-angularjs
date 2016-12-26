(function () {
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject=['$scope','$filter'];

function LunchCheckController ($scope,
                       $filter
                       ) {

  $scope.onClickHandler= function (menu) {

            var comma = ',';
            var arrayOfStrings= menu.split(comma);
             if(arrayOfStrings.length==1  && arrayOfStrings[0].length>0  &&  arrayOfStrings[0] == /((\s)+)/ )
             $scope.messageText="Please enter data first";
            else if (arrayOfStrings.length==1 && arrayOfStrings[0].length==0)
             $scope.messageText="Please enter data first";
            else if(arrayOfStrings.length==1)
            $scope.messageText="Enjoy!"
            else if(arrayOfStrings.length<=3 && arrayOfStrings.length>1)
             $scope.messageText= "Enjoy!";
            else if (arrayOfStrings.length>3)
             $scope.messageText="Too Much";
 }

}
})();
