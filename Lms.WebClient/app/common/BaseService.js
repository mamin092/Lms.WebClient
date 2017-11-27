var App;
(function (App) {
    var UrlService = /** @class */ (function () {
        function UrlService() {
            this.student = "Student";
            this.teacher = "Teacher";
            this.course = "Course";
            this.content = "Content";
        }
        return UrlService;
    }());
    App.UrlService = UrlService;
    angular.module('app').service('UrlService', UrlService);
    var BaseService = /** @class */ (function () {
        function BaseService(baseRepository, q, url) {
            this.baseRepository = baseRepository;
            this.q = q;
            this.commandUrl = url;
        }
        BaseService.prototype.save = function (data) {
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
            data.id = "1";
            data.created = new Date();
            data.modified = new Date();
            data.createdBy = "me";
            data.modifiedBy = "me";
            self.baseRepository.post(self.commandUrl, data).then(successCallback, errorCallback);
            return deffered.promise;
        };
        BaseService.prototype.search = function (request) {
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
            self.baseRepository.post(self.commandUrl + "Query", request).then(successCallback, errorCallback);
            return deffered.promise;
        };
        BaseService.$inject = ["BaseRepository", "$q"];
        return BaseService;
    }());
    App.BaseService = BaseService;
})(App || (App = {}));
//# sourceMappingURL=BaseService.js.map