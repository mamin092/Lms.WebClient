var App;
(function (App) {
    var HomeController = /** @class */ (function () {
        function HomeController() {
            var self = this;
            console.log("I am in home controller");
            this.now = new Date().toString();
        }
        HomeController.$inject = [];
        return HomeController;
    }());
    angular.module("app").controller("HomeController", (HomeController));
})(App || (App = {}));
//# sourceMappingURL=HomeControllers.js.map