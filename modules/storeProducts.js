/*global angular*/

(function () {
    "use strict";

    var storeProducts = angular.module("storeProducts", ["gravatars"]);

    storeProducts.directive("storePanels", function () {
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

    storeProducts.directive("storeReviews", function () {
        var directiveObject = {
            templateUrl: "templates/store-reviews.html",
            controller: function ($scope, avatar) {
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

                $scope.GenerateAvatarUrl = function (review) {
                    review.avatarUrl = avatar.generate(review.author);
                };
            }
        };
        return directiveObject;
    });

}());
