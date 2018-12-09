angular.module('appCdemo2', []).
    controller('demo2Ctrl', function ($scope) {
        $scope.add = function (a, b) {
            if(a&&b)
            return Number(a) + Number(b)
            return 0;
        }
    });