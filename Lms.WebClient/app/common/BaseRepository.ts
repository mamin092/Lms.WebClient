module App {

    export class BaseRepository {

       //  baseUrl: string;

        http: angular.IHttpService;
        q: angular.IQService;

        static $inject = ["$http", "$q"];
        constructor(http: angular.IHttpService, q: angular.IQService) {
            this.http = http;
            this.q = q;
           // this.baseUrl = "http://localhost:11620/api/";
        }

        post(url: string, data: any): angular.IPromise<any> {
            var self = this;
            var deffered = self.q.defer();                                                                          

            var successCallback = function (successresponse) {
                console.log(successresponse);
                deffered.resolve(successresponse);
            };

            var errorCallback = function (errorResponse) {
                console.log(errorResponse);
                deffered.reject(errorResponse);
            };

            self.http.post(url, data).then(successCallback, errorCallback);
            return deffered.promise;
        }

        postUrlencodedForm(url: string, data: string): angular.IPromise<any> {
            var self = this;
            var deffered = self.q.defer();
            var config: angular.IRequestShortcutConfig = {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            };
            var successCallback = function (successresponse) {
                deffered.resolve(successresponse);
            };
            var errorCallback = function (errorResponse) {
                deffered.reject(errorResponse);
            };

            self.http.post(url, data, config).then(successCallback, errorCallback);
            return deffered.promise;
        }
    }

    angular.module('app').service('BaseRepository', BaseRepository);
}