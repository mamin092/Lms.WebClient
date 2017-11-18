module App {
    export abstract class BaseController<T> {
        model: T;
        service: BaseService<T>;

        constructor(baseService: BaseService<T>) {
            console.log('i am in base controller');

            this.service = baseService;

            this.models = [];
            this.searchRequest = new BaseRequestModel();
            this.searchRequest.page = 1;
            this.searchRequest.orderBy = "Modified";
            this.searchRequest.isAscending = false;
        }

        save(): void {
            var self = this;
            let success = function (response) {
                console.log(response);
                self.reset();
            };

            let error = function (errorRespon) {
                console.log(errorRespon);
            };
            console.log(self.model);
            this.service.save(self.model).then(success, error);
        }
        abstract reset();

        searchRequest: BaseRequestModel;
        models: T[];

        search() {
            var self = this;
            let success = function (response) {
                console.log(response);
                self.models = response.data;
            };

            let error = function (errorRespon) {
                console.error(errorRespon);
            };

            this.service.search(self.searchRequest).then(success, error);
        }

        sort(property: string) {
            var self = this;
            self.searchRequest.orderBy = property;
            self.searchRequest.isAscending = !self.searchRequest.isAscending;
            self.search();

        }

        next() {
            var self = this;
            self.searchRequest.page = self.searchRequest.page + 1;
            self.search();
        }

        previous() {
            var self = this

            if (self.searchRequest.page > 1) {
                self.searchRequest.page = self.searchRequest.page - 1;
                self.search();
            }
        }   

    }


}