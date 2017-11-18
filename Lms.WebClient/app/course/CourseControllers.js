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
    var CourseController = /** @class */ (function (_super) {
        __extends(CourseController, _super);
        function CourseController(service) {
            var _this = _super.call(this, service) || this;
            _this.model = new App.Course();
            console.log('i am in course controller');
            return _this;
        }
        CourseController.prototype.reset = function () {
            this.model = new App.Course();
        };
        CourseController.$inject = ["CourseService"];
        return CourseController;
    }(App.BaseController));
    angular.module('app').controller("CourseController", (CourseController));
    var CoursesController = /** @class */ (function (_super) {
        __extends(CoursesController, _super);
        function CoursesController(service) {
            var _this = _super.call(this, service) || this;
            console.log('i am in course controller constroctor');
            return _this;
        }
        CoursesController.prototype.reset = function () {
        };
        CoursesController.$inject = ["CourseService"];
        return CoursesController;
    }(App.BaseController));
    angular.module('app').controller("CoursesController", (CoursesController));
})(App || (App = {}));
//# sourceMappingURL=CourseControllers.js.map