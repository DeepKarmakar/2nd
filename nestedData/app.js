var app = angular.module("nestedData", []);

app.controller("nestedDataCtrl", [
    "$scope",
    "$http",
    function($scope, $http) {
        $http({
            method: "GET",
            url: "data.json"
        }).then(
            function(res) {
                $scope.folders = res.data.folders;
            },
            function(res) {
                console.log(res.statusText);
            }
        );
    }
]);

app.directive("folder", function() {
    return {
        restrict: "EA",
        templateUrl: "folder.html"
    };
});
