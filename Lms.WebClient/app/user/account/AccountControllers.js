var App;
(function (App) {
    var AccountController = /** @class */ (function () {
        function AccountController(accountService, stateService) {
            var self = this;
            self.accountService = accountService;
            self.stateService = stateService;
            self.reset();
        }
        AccountController.prototype.signUpUser = function () {
            var self = this;
            var successCallback = function (response) {
                if (response.status == App.AppConstants.StatusOk) {
                    alert("Thank you for siging up to CodeCoopers lms");
                    self.reset();
                }
                else if (response.status == App.AppConstants.StatusBad) {
                    alert("Sign up failed");
                }
            };
            var errorCallback = function (response) {
                console.error(response);
            };
            self.accountService.register(self.user).then(successCallback, errorCallback);
        };
        AccountController.prototype.reset = function () {
            var self = this;
            self.user = new App.RegisterModel();
        };
        AccountController.$inject = ["AccountService", "$state"];
        return AccountController;
    }());
    angular.module('app').controller("AccountController", (AccountController));
})(App || (App = {}));
//# sourceMappingURL=AccountControllers.js.map