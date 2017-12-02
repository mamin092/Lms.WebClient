var App;
(function (App) {
    var AccountService = /** @class */ (function () {
        function AccountService(baseRepository, q) {
            this.baseRepository = baseRepository;
            this.q = q;
            this.subUrl = new App.UrlService().account;
        }
        AccountService.prototype.register = function (user) {
            var self = this;
            var deffred = self.q.defer();
            var successCallback = function (response) {
                deffred.resolve(response);
            };
            var errorCallback = function (response) {
                deffred.reject(response);
            };
            self.baseRepository.post(self.subUrl + "/Register", user).then(successCallback, errorCallback);
            return deffred.promise;
        };
        AccountService.$inject = ["BaseRepository", "$q"];
        return AccountService;
    }());
    App.AccountService = AccountService;
    angular.module('app').service("AccountService", (AccountService));
})(App || (App = {}));
//# sourceMappingURL=AccountService.js.map