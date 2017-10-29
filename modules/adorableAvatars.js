/*global angular*/

var adorableAvatarsModule = angular.module("adorableAvatars", []);

adorableAvatarsModule.provider("avatar", function () {
    "use strict";
    this.$get = function () {
        return {
            generate: function (input) {
                return "https://api.adorable.io/avatars/90/" + input;
            }
        };
    };
});
