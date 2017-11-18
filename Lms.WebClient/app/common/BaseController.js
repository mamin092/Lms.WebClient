var App;
(function (App) {
    var BaseController = /** @class */ (function () {
        function BaseController(baseService) {
            console.log('i am in base controller');
            this.service = baseService;
            this.models = [];
            this.searchRequest = new App.BaseRequestModel();
            this.searchRequest.page = 1;
            this.searchRequest.orderBy = "Modified";
            this.searchRequest.isAscending = false;
        }
        BaseController.prototype.save = function () {
            var self = this;
            var success = function (response) {
                console.log(response);
                self.reset();
            };
            var error = function (errorRespon) {
                console.log(errorRespon);
            };
            console.log(self.model);
            this.service.save(self.model).then(success, error);
        };
        BaseController.prototype.search = function () {
            var self = this;
            var success = function (response) {
                console.log(response);
                self.models = response.data;
            };
            var error = function (errorRespon) {
                console.error(errorRespon);
            };
            this.service.search(self.searchRequest).then(success, error);
        };
        BaseController.prototype.sort = function (property) {
            var self = this;
            self.searchRequest.orderBy = property;
            self.searchRequest.isAscending = !self.searchRequest.isAscending;
            self.search();
        };
        BaseController.prototype.next = function () {
            var self = this;
            self.searchRequest.page = self.searchRequest.page + 1;
            self.search();
        };
        BaseController.prototype.previous = function () {
            var self = this;
            if (self.searchRequest.page > 1) {
                self.searchRequest.page = self.searchRequest.page - 1;
                self.search();
            }
        };
        return BaseController;
    }());
    App.BaseController = BaseController;
})(App || (App = {}));
//# sourceMappingURL=BaseController.js.map