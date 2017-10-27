module App {
    export class TeacherService {

        http: angular.IHttpService;
        q: angular.IQService;

        teachers: Teacher[];
        static $inject = ["$http", "$q"];
        constructor(http: angular.IHttpService, q: angular.IQService) {
            this.http = http;
            this.q = q;
        }

        save(teacher: Teacher): angular.IPromise<any> {

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
        }

        search(request: TeacherRequestModel): angular.IPromise<any> {
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

            return deffered.pr
        }
    }

    angular.module('app').service("TeacherService", TeacherService);
}