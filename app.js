(function () {
    "use strict";

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
                    stars: 5,
                    author: "j.loiacano55@gmail.com",
                    body: "I love this product!!!"
                }
            ]
    },
        {
            name: "Pentagonal Gem",
            price: 5.95,
            description: "The origin of the pentagonal gem is unknown.",
            canPurchase: true,
            outOfStock: true,
            image: 'images/gem-02.gif',
            reviews: [
                {
                    stars: 1,
                    author: "byrd55@aol.com",
                    body: "what a piece of junk!"
                }
            ]
    }
];

    // Module declaration. creating a custom module by the name (in this case myApp) which can be used on the page. Passing 2 args to the module creates a new module as opposed to fetching a built in module.
    var app = angular.module("myApp", []); //similar to C# main function

    //Hanging a controller off of the "parent" module. Can also hang services, filters, directives.... same rules as parent module: two args creates custom, 1 arg tries to fetch built in.
    app.controller("myController", function ($scope) {
        $scope.Initialized = function () {
            $scope.models = gems;
        }
    });

    app.controller("panelController", function ($scope) {
        $scope.SelectTab = function (tab) {
            $scope.tab = tab;
        }
    });

    app.directive("storePanels", function () {
        var directiveObject = {
            templateUrl: "templates/store-panels.html",
            controller: function ($scope) {
                $scope.SelectTab = function (tab) {
                    $scope.tab = tab;
                }
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

                    // clears out newReview for next use
                    $scope.newReview = {};
                }
            }
        };
        return directiveObject;
    });





}());
