/*global angular*/

(function () {
    "use strict";

    //For now, just hard-coding a model!
    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'Some gems have hidden qualities beyond their lustre, beyond their shine... Dodecahedron is one of those gems',
            canPurchase: true,
            outOfStock: false,
            image: 'images/gem-01.gif',
            reviews: [
                {
                    stars: 2,
                    author: 'ripalp@codingtemple',
                    body: 'I hate this product!'
                },
                {
                    stars: 5,
                    author: 'josephj@codingtemple',
                    body: 'I love this product!'
                }
            ]
        }, {
            name: "Pentagonal Gem",
            price: 5.95,
            description: "The origin of the pentagonal gem is unknown.",
            canPurchase: true,
            outOfStock: true,
            image: 'images/gem-02.gif'
        }
    ];
    //Module declaration - I'm creating a new custom module called "myApp" which I can now use on the page. If I pass one argument to the module method, I'm "Fetching" an existing module. If I pass two arguments to the module method, I'm creating a new module.  In this instance, I'm saving the app module to a variable as I'll reuse it often throughout the page
    var app = angular.module("myApp", []);
    //Once I have a reference to the app module, I can add other services, controllers, filters, and directives to it using built-in functions.  In this case, passing two arguments to the controller method will create a new controller
    app.controller("myController", function ($scope) {
        $scope.Initialized = function () {
            $scope.models = gems;
        };

    });

    app.directive("storePanels", function () {
        var directiveObject = {
            templateUrl: "templates/store-panels.html",
            controller: function ($scope) {
                $scope.SelectTab = function (tab) {
                    $scope.tab = tab;
                };
            }
        };
        return directiveObject;
    });

    app.directive("storeReviews", function () {
        var directiveObject = {
            templateUrl: "templates/store-reviews.html",
            controller: function ($scope) {
                $scope.AddReview = function (product) {
                    //Just to be safe, make sure to add a reviews array if it doesn't already exist
                    if (!product.reviews) {
                        product.reviews = [];
                    }
                    product.reviews.push($scope.newReview);

                    //This resets the review
                    $scope.newReview = {};

                    $scope.reviewForm.$setPristine();
                };

                $scope.StarsInvalid = function () {
                    return $scope.reviewForm.stars.$invalid && $scope.reviewForm.stars.$dirty;
                };

                $scope.BodyInvalid = function () {
                    return $scope.reviewForm.body.$invalid && $scope.reviewForm.body.$dirty;
                };

                $scope.AuthorInvalid = function () {
                    return $scope.reviewForm.author.$invalid && $scope.reviewForm.author.$dirty;
                };

                $scope.FormInvalid = function () {
                    return $scope.StarsInvalid() || $scope.BodyInvalid() || $scope.AuthorInvalid();
                };
            }
        };
        return directiveObject;
    });


    //I can also attach directives to modules:
    //app.directive("myDirective", function(){
    //    var directiveObject = {
    //        template: "<div>This is a template directive.</div>"
    //    };
    //    return directiveObject;
    //});
    //A better template directive
    //app.directive("myOtherDirective", function(){
    //    var directiveObject = {
    //        templateUrl: "template.html"
    //    };
    //    return directiveObject;
    //});

}());
