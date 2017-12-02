module App {

    class AccountController {
        stateService: angular.ui.IStateService;
        private rootScopeService: angular.IRootScopeService;
        accountService: AccountService;
        user: RegisterModel;


        static $inject = ["AccountService", "$state"];

        constructor(accountService: AccountService, stateService: angular.ui.IStateService) {
            var self = this;
            self.accountService = accountService;
            self.stateService = stateService;
            
            self.reset();
        }

        signUpUser(): void {
            var self = this;

            let successCallback = function (response) {
                if (response.status == AppConstants.StatusOk) {
                    alert("Thank you for siging up to CodeCoopers lms");
                    self.reset();
                } else if (response.status == AppConstants.StatusBad) {
                    alert("Sign up failed")
                }
            }
            let errorCallback = function (response) {
                console.error(response);
            }

            self.accountService.register(self.user).then(successCallback, errorCallback);
        }
        reset(): void {
            var self = this;
            self.user = new RegisterModel();
        }

    }

    angular.module('app').controller("AccountController", (AccountController) as any);
}