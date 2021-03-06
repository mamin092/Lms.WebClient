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
    var ContentController = /** @class */ (function (_super) {
        __extends(ContentController, _super);
        function ContentController(service, courseService) {
            var _this = _super.call(this, service) || this;
            _this.categoryList = [];
            _this.courseService = courseService;
            _this.reset();
            _this.loadCourses();
            _this.loadCategoryList();
            return _this;
        }
        ContentController.prototype.loadCourses = function () {
            var self = this;
            var successCallBack = function (response) {
                self.courses = response.data;
            };
            var errorCallBack = function (response) {
                console.error(response);
            };
            var requestModel = new App.BaseRequestModel();
            requestModel.page = -1;
            requestModel.orderBy = "Title";
            requestModel.isAscending = true;
            self.courseService.search(requestModel).then(successCallBack, errorCallBack);
        };
        ContentController.prototype.loadCategoryList = function () {
            var self = this;
            self.categoryList.push(new App.Category(1, "Video"));
            self.categoryList.push(new App.Category(2, "Audio"));
            self.categoryList.push(new App.Category(3, "Document"));
        };
        ContentController.prototype.addContent = function () {
            var self = this;
            var successCallback = function (response) {
                alert('Content added successfully');
                self.reset();
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            self.model.courseId = self.selectedCourse.id;
            self.model.category = self.selectedCategory.id;
            self.model.url = self.model.url.replace('watch?v=', 'embed/');
            self.service.save(self.model).then(successCallback, errorCallback);
        };
        ContentController.prototype.reset = function () {
            var self = this;
            self.model = new App.Content();
        };
        ContentController.$inject = ["ContentService", "CourseService"];
        return ContentController;
    }(App.BaseController));
    App.ContentController = ContentController;
    angular.module('app').controller('ContentController', (ContentController));
})(App || (App = {}));
//# sourceMappingURL=ContentController.js.map