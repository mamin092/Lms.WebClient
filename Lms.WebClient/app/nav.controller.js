var App;
(function (App) {
    "Use strict";
    var NavController = /** @class */ (function () {
        function NavController() {
            var self = this;
            self.isSignedId = true;
        }
        NavController.$inject = [];
        return NavController;
    }());
    App.NavController = NavController;
    angular.module('app').controller("NavController", (NavController));
})(App || (App = {}));
//# sourceMappingURL=nav.controller.js.map