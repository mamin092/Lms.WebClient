module App {
    "Use strict";
    export 
        class NavController {
        private stateService: angular.ui.IStateService;
        isSignedId: boolean;
        private rootScopeService: angular.IRootScopeService;

        static $inject = [];
        constructor() {
            var self = this;
            self.isSignedId = true;

        }
    }
    angular.module('app').controller("NavController", (NavController) as any);
}