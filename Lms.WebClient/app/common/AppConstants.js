var App;
(function (App) {
    var AppConstants = /** @class */ (function () {
        function AppConstants() {
        }
        AppConstants.BaseUrl = "http://localhost:11620/";
        AppConstants.StatusOk = 200;
        AppConstants.StatusBad = 400;
        AppConstants.BaseApiUrl = AppConstants.BaseUrl + "api/";
        AppConstants.UserAuthenticationUrl = AppConstants.BaseUrl + "token";
        return AppConstants;
    }());
    App.AppConstants = AppConstants;
})(App || (App = {}));
//# sourceMappingURL=AppConstants.js.map