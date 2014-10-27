var app = angular.module('myApp',[]);

app.controller("mainController", function($scope, $http){
    $scope.results = [];
    $scope.filterText = null;
    $scope.availableCategories = [];
    $scope.categoryFilter = null;

    $scope.init = function() {

    //$http.jsonp('http://spreadsheets.google.com/feeds/list/0An3Rz0qTgCysdFRtd182eGc2dFJGTjRCOWlQYjVvNlE/od6/public/values?alt=json-in-script' + '&callback=JSON_CALLBACK').success(function(data) {
    $http.jsonp('http://spreadsheets.google.com/feeds/list/1tjo0fhDHKd1CTDaiZ-V8sOsBGkb5AK62dlZxaWO7zRE/od6/public/values?alt=json-in-script' + '&callback=JSON_CALLBACK').success(function(data) {
    //0An3Rz0qTgCysdFRtd182eGc2dFJGTjRCOWlQYjVvNlE

        angular.forEach(data, function(value, index){
                angular.forEach(value.entry, function(classes, index){
                    $scope.results.push(classes);
                    angular.forEach(classes.gsx$categorie, function(category, index){
                        var exists = false;
                        angular.forEach($scope.availableCategories, function(avCat, index){
                            if (avCat == category) {
                                exists = true;
                            }
                        });
                        if (exists === false) {
                            $scope.availableCategories.push(category);

                        }
                    });

                });

            });

        }).error(function(error) {

        });

    };

    $scope.setCategoryFilter = function(category) {
    $scope.categoryFilter = category;

    }

});
