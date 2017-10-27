module App {

    class Configuration {

        static $inject = ["$stateProvider", "$urlRouterProvider"];

        constructor( stateProvider: angular.ui.IStateProvider, urlRouterProvider: angular.ui.IUrlRouterProvider) {

            urlRouterProvider.otherwise("/");
            stateProvider.state("root",
                {
                    abstract: true,
                    url: "",
                    template: "<div ui-view class=\"container-fluid slide\"></div>"
                }).state("root.home",
                {
                    url: "/",
                    templateUrl: "partials/home/home.tpl.html",
                    controller: "HomeController",
                    controllerAs: "vm"
                }).state("root.student-entry",
                {
                    url: "/student-entry",
                    templateUrl: "partials/student/student-entry.tpl.html",
                    controller: "StudentControllers",
                    controllerAs: "vm"
                }).state("root.student-list",
                {
                    url: "/student-list",
                    templateUrl: "partials/student/student-list.tpl.html",
                    controller: "StudentsController",
                    controllerAs: "vm"
                }).state("root.teacher-entry",
                {
                    url: "/teacher-entry",
                    templateUrl: "partials/teacher/teacher-entry.tpl.html",
                    controller: "TeacherController",
                    controllerAs: "vm"
                }).state("root.teacher-list",
                {
                    url: "/teacher-list",
                    templateUrl: "partials/teacher/teacher-list.tpl.html",
                    controller: "TeachersController",
                    controllerAs: "vm"

                });
        }
    }

    angular.module('app', ["ui.router"]);
    angular.module('app').config(Configuration);
}