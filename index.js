window.taigaContribPlugins = window.taigaContribPlugins || [];

var decorator = function($delegate) {
    directive = $delegate[0];

    var controller = function($scope) {
        $scope.section = "dashboard";
    };

    directive.controller = ["$scope", controller];

    directive.templateUrl = "/plugins/taiga-override-directive-example/index.html";

    return $delegate;
};

window.addDecorator("tgWorkingOnDirective", ["$delegate", decorator]);
