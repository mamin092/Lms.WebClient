var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var App;
(function (App) {
    var RoleController = /** @class */ (function (_super) {
        __extends(RoleController, _super);
        function RoleController(service) {
            var _this = _super.call(this, service) || this;
            _this.reset();
            return _this;
        }
        RoleController.prototype.addRole = function () {
            var self = this;
            var successCallback = function (response) {
                alert('Role added successfully');
                self.reset();
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            self.service.save(self.model).then(successCallback, errorCallback);
        };
        RoleController.prototype.reset = function () {
            var self = this;
            self.model = new App.Role();
        };
        RoleController.$inject = ["RoleService"];
        return RoleController;
    }(App.BaseController));
    App.RoleController = RoleController;
    angular.module('app').controller("RoleController", (RoleController));
})(App || (App = {}));
//# sourceMappingURL=RoleController.js.map