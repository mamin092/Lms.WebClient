var App;
(function (App) {
    var UrlService = /** @class */ (function () {
        function UrlService() {
            this.student = "Student";
            this.teacher = "Teacher";
            this.course = "Course";
            this.content = "Content";
            this.enrollment = "Enrollment";
            this.account = "Account";
            this.role = "Role";
            this.resource = "Resource";
            this.permission = "Permission";
        }
        return UrlService;
    }());
    App.UrlService = UrlService;
    angular.module('app').service('UrlService', UrlService);
})(App || (App = {}));
//# sourceMappingURL=UrlService.js.map