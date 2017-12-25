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
    var ResourseController = /** @class */ (function (_super) {
        __extends(ResourseController, _super);
        function ResourseController(service) {
            var _this = _super.call(this, service) || this;
            _this.resourceTypeList = [];
            _this.reset();
            _this.loadResourseTypeList();
            return _this;
        }
        ResourseController.prototype.loadResourseTypeList = function () {
            var self = this;
            self.resourceTypeList.push(new App.ResourceType("WebPage", "WePage"));
            self.resourceTypeList.push(new App.ResourceType("Div", "Div"));
            self.resourceTypeList.push(new App.ResourceType("UI-Control", "UI-Control"));
        };
        ResourseController.prototype.reset = function () {
            throw new Error("Method not implemented.");
        };
        ResourseController.$inject = ["ResourceService"];
        return ResourseController;
    }(App.BaseController));
    App.ResourseController = ResourseController;
    angular.module('app').controller("ResourseController", (ResourseController));
})(App || (App = {}));
//# sourceMappingURL=ResourceController.js.map