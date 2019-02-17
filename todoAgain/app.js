var app = angular.module("myApp", []);
app.controller("todoCtrl", [
    "$scope",
    function($scope) {
        $scope.newTodo = {
            name: "",
            done: false
        };
        $scope.todos = [{ name: "sdf", done: true }];
        $scope.addTodo = function() {
            $scope.todos.push({ name: $scope.newTodo.name, done: false });

            $scope.newTodo = {
                name: "",
                done: false
            };
        };
    }
]);
