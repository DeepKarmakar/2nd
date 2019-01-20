var app = angular.module("myApp", []);
    app.controller('apiservice', ['$scope', '$http', '$log', function($scope, $http, $log){
        var ages = [];
        var calAge;
        $http.get('data.json')
            .then(function(data){
                $scope.apiData = data.data[0].students;
                var datas = $scope.apiData;
                datas.forEach(element => {
                    ages.push(element.age);
                });
                $scope.ageArr = ages;
                calAge = ages.reduce((a,b) => a + b);
                $scope.calAge = calAge;
                
            }, function(error){
                $log.info('data ' + error.statusText);
                
            })
        $scope.reCalculate = function(index){
            console.log(ages);
            // $scope.currentItem = this.item.age;
            // // $scope.calAge = $scope.calAge + this.item.age;
            // $scope.$watch('ageArr', function( newValue, oldValue ) {
            //     if(newValue != oldValue){
            //         console.log(newValue, oldValue);
            //     }
                
            // }, true);
        }
    }])
    app.filter('gender', function(){
        return function(gender){
            if(gender == 'male'){
                return 1;
            } else{
                return 0
            }
        }
    })