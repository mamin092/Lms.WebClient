var App;
(function (App) {
    var Teacher = /** @class */ (function () {
        function Teacher() {
        }
        return Teacher;
    }());
    App.Teacher = Teacher;
    var TeacherRequestModel = /** @class */ (function () {
        function TeacherRequestModel() {
        }
        return TeacherRequestModel;
    }());
    App.TeacherRequestModel = TeacherRequestModel;
    var TeacherController = /** @class */ (function () {
        function TeacherController(teacherService) {
            this.teacher = new Teacher();
            this.teacherService = teacherService;
            console.log("I am in teacher controller");
        }
        TeacherController.prototype.add = function () {
            var self = this;
            var success = function (respons) {
                console.log(respons);
                self.reset();
            };
            var error = function (errorRespon) {
                console.error(errorRespon);
            };
            this.teacherService.save(self.teacher).then(success, error);
        };
        TeacherController.prototype.reset = function () {
            this.teacher = new Teacher();
        };
        TeacherController.$inject = ["TeacherService"];
        return TeacherController;
    }());
    angular.module('app').controller("TeacherController", (TeacherController));
    var TeachersController = /** @class */ (function () {
        function TeachersController(teacherService) {
            this.teacherService = teacherService;
            var self = this;
            self.teachers = [];
            self.searchRequest = new TeacherRequestModel();
            self.searchRequest.page = 1;
            var success = function (response) {
                self.teachers = response.data;
                console.log(self.teachers);
            };
            var error = function (errorResponse) {
                alert(errorResponse);
            };
            console.log("I am in Teachers controller constructor");
        }
        TeachersController.prototype.search = function () {
            var self = this;
            var success = function (response) {
                console.log(response);
                self.teachers = response.data;
            };
            var error = function (errorRespon) {
                console.error(errorRespon);
            };
            this.teacherService.search(self.searchRequest).then(success, error);
        };
        TeachersController.prototype.sort = function (property) {
            var self = this;
            self.searchRequest.orderBy = property;
            self.searchRequest.isAscending = !self.searchRequest.isAscending;
            self.search();
        };
        TeachersController.prototype.next = function () {
            var self = this;
            self.searchRequest.page = self.searchRequest.page + 1;
            self.search();
        };
        TeachersController.prototype.previous = function () {
            var self = this;
            if (self.searchRequest.page > 1) {
                self.searchRequest.page = self.searchRequest.page - 1;
                self.search();
            }
        };
        TeachersController.$inject = ["TeacherService"];
        return TeachersController;
    }());
    angular.module('app').controller("TeachersController", (TeachersController));
})(App || (App = {}));
//# sourceMappingURL=TeacherControllers.js.map