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
    var TeacherController = /** @class */ (function (_super) {
        __extends(TeacherController, _super);
        function TeacherController(service) {
            var _this = _super.call(this, service) || this;
            _this.model = new App.Teacher();
            return _this;
        }
        TeacherController.prototype.reset = function () {
            this.model = new App.Teacher();
        };
        TeacherController.$inject = ["TeacherService"];
        return TeacherController;
    }(App.BaseController));
    angular.module('app').controller("TeacherController", (TeacherController));
    var TeachersController = /** @class */ (function (_super) {
        __extends(TeachersController, _super);
        function TeachersController(service) {
            return _super.call(this, service) || this;
        }
        TeachersController.prototype.reset = function () {
        };
        TeachersController.$inject = ["TeacherService"];
        return TeachersController;
    }(App.BaseController));
    angular.module('app').controller("TeachersController", (TeachersController));
})(App || (App = {}));
//# sourceMappingURL=TeacherControllers.js.map