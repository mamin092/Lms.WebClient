var App;
(function (App) {
    "use strict";
    var NavController = /** @class */ (function () {
        function NavController(accountService, stateService) {
            var self = this;
            self.accountService = accountService;
            self.stateService = stateService;
            self.isUserSignedIn();
            self.authData = new App.AuthData();
            self.reset();
        }
        NavController.prototype.isUserSignedIn = function () {
            var self = this;
            self.authData = JSON.parse(localStorage.getItem("AuthData"));
            if (self.authData == null) {
                self.isSignedIn = false;
            }
            else {
                self.isSignedIn = true;
                self.stateService.go(self.authData.landingRoute);
            }
        };
        NavController.prototype.signUpUser = function () {
            var self = this;
            var successCallback = function (response) {
                if (response.status == App.AppConstants.StatuasOk) {
                    alert("Thank you for siging up to CodeCoopers");
                    self.reset();
                }
                else {
                    alert("Sign in failed");
                }
            };
            var errorCallback = function (response) {
                console.error(response);
            };
            self.accountService.register(self.user).then(successCallback, errorCallback);
        };
        NavController.prototype.signIn = function () {
            var self = this;
            var successCallback = function (response) {
                if (response.status == App.AppConstants.StatuasOk) {
                    self.authData.token = response.data.access_token;
                    self.authData.tokenType = response.data.token_type;
                    self.authData.userName = response.data.userName;
                    self.authData.landingRoute = response.data.landingRoute;
                    localStorage.setItem("AuthData", JSON.stringify(self.authData));
                    location.reload();
                }
                else {
                    alert("Sign in failed");
                }
            };
            var errorCallback = function (response) {
                console.error(response);
            };
            self.accountService.signin(self.user.email, self.user.password).then(successCallback, errorCallback);
        };
        NavController.prototype.singOut = function () {
            localStorage.removeItem("AuthData");
            this.stateService.go('root.SingIn');
        };
        NavController.prototype.reset = function () {
            var self = this;
            self.user = new App.User();
        };
        NavController.$inject = ["AccountService", "$state"];
        return NavController;
    }());
    App.NavController = NavController;
    angular.module("app").controller("NavController", (NavController));
})(App || (App = {}));
//# sourceMappingURL=nav.controller.js.map