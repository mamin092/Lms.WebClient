var App;
(function (App) {
    var Student = /** @class */ (function () {
        function Student() {
        }
        return Student;
    }());
    App.Student = Student;
    var StudentRequestModel = /** @class */ (function () {
        function StudentRequestModel() {
        }
        return StudentRequestModel;
    }());
    App.StudentRequestModel = StudentRequestModel;
    var StudentController = /** @class */ (function () {
        function StudentController(studentService) {
            this.student = new Student();
            this.studentService = studentService;
            console.log("I am in Student Controller");
        }
        StudentController.prototype.add = function () {
            var self = this;
            var success = function (respons) {
                console.log(respons);
                self.reset();
            };
            var error = function (errorRespon) {
                console.log(errorRespon);
            };
            this.studentService.save(self.student).then(success, error);
        };
        StudentController.prototype.reset = function () {
            this.student = new Student();
        };
        StudentController.$inject = ["StudentService"];
        return StudentController;
    }());
    angular.module('app').controller("StudentController", StudentController);
    var StudentsConroller = /** @class */ (function () {
        function StudentsConroller(studentService) {
            this.studentService = studentService;
            var self = this;
            self.students = [];
            self.searchRequest = new StudentRequestModel();
            self.searchRequest.parge = 1;
            var success = function (respon) {
                self.students = respon.data;
                console.log(self.students);
            };
            var error = function (errorRespon) {
                alert(errorRespon);
            };
            console.log('i am in Students controller constructor');
            this.studentService.search(self.searchRequest).then(success, error);
        }
        StudentsConroller.prototype.search = function () {
            var self = this;
            var success = function (response) {
                console.log(response);
                self.students = response.data;
            };
            var error = function (errorRespons) {
                console.log(errorRespons);
            };
            this.studentService.search(self.searchRequest).then(success, error);
        };
        StudentsConroller.prototype.sort = function (property) {
            var self = this;
            self.searchRequest.orderBy = property;
            self.searchRequest.isAscending = !self.searchRequest.isAscending;
            self.search();
        };
        StudentsConroller.prototype.next = function () {
            var self = this;
            self.searchRequest.parge = self.searchRequest.parge + 1;
            self.search();
        };
        StudentsConroller.prototype.previous = function () {
            var self = this;
            if (self.searchRequest.parge > 1) {
                self.searchRequest.parge = self.searchRequest.parge - 1;
                self.search();
            }
        };
        StudentsConroller.$inject = ["StudentService"];
        return StudentsConroller;
    }());
    angular.module('app').controller("StudentsController", (StudentsConroller));
})(App || (App = {}));
//# sourceMappingURL=StudentControllers.js.map