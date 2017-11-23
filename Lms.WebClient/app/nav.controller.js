var Vta;
(function (Vta) {
    "use strict";
    var NavController = /** @class */ (function () {
        function NavController() {
            var self = this;
            self.isSignedIn = true;
        }
        NavController.$inject = [];
        return NavController;
    }());
    Vta.NavController = NavController;
    angular.module("app").controller("NavController", (NavController));
})(Vta || (Vta = {}));
//# sourceMappingURL=nav.controller.js.map