// Module declaration. creating a custom module by the name (in this case myApp) which can be used on the page. Passing 2 args to the module creates a new module as opposed to fetching a built in module.
var app = angular.module("myApp", []); //similar to C# main function

//Hanging a controller off of the "parent" module. Can also hang services, filters, directives.... same rules as parent module: two args creates custom, 1 arg tries to fetch built in.
app.controller("myController", function() {
    window.console.log("myController run");

    this.Initialize = function() {
        console.log("myController Initialized");
    };
})

app.directive("myDirective", function() {
    var directiveObject = {
        template: "<div>This is a template directive</div>"
    };
    return directiveObject;
})


app.directive("myOtherDirective", function() {
    var directiveObject = {
        templateUrl: "template.html"
    };
    return directiveObject;
})
