var app = angular.module('myApp',[]);

app.controller("mainController", function($scope, $http){
    $scope.results = [];
    $scope.filterText = null;
    $scope.availableDiscounts = [];
    $scope.discountFilter = null;

    var apiKey = '1tjo0fhDHKd1CTDaiZ-V8sOsBGkb5AK62dlZxaWO7zRE';

    $scope.init = function() {

    //$http.jsonp('http://spreadsheets.google.com/feeds/list/0An3Rz0qTgCysdFRtd182eGc2dFJGTjRCOWlQYjVvNlE/od6/public/values?alt=json-in-script' + '&callback=JSON_CALLBACK').success(function(data) {
    //$http.jsonp('http://spreadsheets.google.com/feeds/list/' + '1tjo0fhDHKd1CTDaiZ-V8sOsBGkb5AK62dlZxaWO7zRE' + '/od6/public/values?alt=json-in-script' + '&callback=JSON_CALLBACK').success(function(data) {
    $http.jsonp('http://spreadsheets.google.com/feeds/list/' + apiKey + '/od6/public/values?alt=json-in-script' + '&callback=JSON_CALLBACK').success(function(data) {

        angular.forEach(data, function(value, index){
                angular.forEach(value.entry, function(classes, index){
                    $scope.results.push(classes);
                    angular.forEach(classes.gsx$discount, function(discount, index){
                        var exists = false;
                        angular.forEach($scope.availableDiscounts, function(avDsc, index){
                            if (avDsc == discount) {
                                exists = true;
                            }
                        });
                        if (exists === false) {
                            $scope.availableDiscounts.push(discount);

                        }
                    });

                });

            });

        }).error(function(error) {

        });

    };

    $scope.setDiscountFilter = function(discount) {
    $scope.discountFilter = discount;

    }

});
