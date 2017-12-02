module App {

    export 
        class AccountService {

        baseRepository: BaseRepository;
        q: angular.IQService;
        commadUrl: string;
        subUrl: string;

        static $inject = ["BaseRepository", "$q"];
        constructor(baseRepository: BaseRepository, q: angular.IQService) {

            this.baseRepository = baseRepository;
            this.q = q;
            this.subUrl = new UrlService().account;
        }

        register(user: RegisterModel): angular.IPromise<any> {

            var self = this;
            var deffred = self.q.defer();

            let successCallback = function (response) {
                deffred.resolve(response);
            };
            let errorCallback = function (response) {
                deffred.reject(response);
            };

            self.baseRepository.post(self.subUrl + "/Register", user).then(successCallback, errorCallback);

            return deffred.promise;
        }
    }

    angular.module('app').service("AccountService", (AccountService) as any);
}