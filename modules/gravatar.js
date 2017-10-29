/*global angular*/

var gravatarModule = angular.module("gravatars", []);

gravatarModule.provider("avatar", function () {
    "use strict";
    this.$get = function () {
        return {
            generate: function (input) {
                return "https://www.gravatar.com/avatar/" + CryptoJS.MD5(input).toString() + "?size=90";
            }
        };
    };
});
