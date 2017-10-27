var App;
(function (App) {
    var TeacherService = /** @class */ (function () {
        function TeacherService(http, q) {
            this.http = http;
            this.q = q;
        }
        TeacherService.prototype.save = function (teacher) {
            var self = this;
            var deffered = self.q.defer();
            var f1 = function (successresponse) {
                console.log(successresponse);
                deffered.resolve(successresponse);
            };
            var f2 = function (errorresponse) {
                console.log(errorresponse);
                deffered.reject(errorresponse);
            };
            self.http.post("http://localhost:30285/api/teacher", teacher).then(f1, f2);
            return deffered.promise;
        };
        TeacherService.prototype.search = function (request) {
            var self = this;
            var deffered = self.q.defer();
            var f1 = function (successresponse) {
                console.log(successresponse);
                deffered.resolve(successresponse);
            };
            var f2 = function (errorresponse) {
                console.log(errorresponse);
                deffered.reject(errorresponse);
            };
            self.http.post("http://localhost:30285/api/TeacherQuery", request).then(f1, f2);
            return deffered.promise;
        };
        TeacherService.$inject = ["$http", "$q"];
        return TeacherService;
    }());
    App.TeacherService = TeacherService;
    angular.module('app').service("TeacherService", TeacherService);
})(App || (App = {}));
//# sourceMappingURL=TeacherService.js.map