﻿module App {

    class Configuration {

        static $inject = ["$stateProvider", "$urlRouterProvider"];

        constructor(stateProvider: angular.ui.IStateProvider, urlRouterProvider: angular.ui.IUrlRouterProvider) {

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
                    controller: "StudentController",
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
                    templateUrl: "partials/teacher/teacher-enrty.tpl.html",
                    controller: "TeacherController",
                    controllerAs: "vm"
                }).state("root.teacher-list",
                {
                    url: "/teacher-list",
                    templateUrl: "partials/teacher/teacher-list.html",
                    controller: "TeachersController",
                    controllerAs: "vm"

                }).state("root.course-entry",
                {
                    url: "/course-entry",
                    templateUrl: "partials/course/course-entry.tpl.html",
                    controller: "CourseController",
                    controllerAs: "vm"
                }).state("root.course-detail",
                {
                    url: "/course-detail/:id",
                    templateUrl: "partials/course/course-detail.tpl.html",
                    controller: "CourseContentsController",
                    controllerAs: "vm"
                }).state("root.content-entry",
                {

                    url: "/content-entry",
                    templateUrl: "partials/content/content-entry.tpl.html",
                    controller: "ContentController",
                    controllerAs: "vm"
                }).state("root.enrollment-entry",
                {

                    url: "/enrollment-entry",
                    templateUrl: "partials/enrollment/enrollment-entry.tpl.html",
                    controller: "EnrollmentController",
                    controllerAs: "vm"
                })
                //account

                .state("root.register",
                {

                    url: "/register",
                    templateUrl: "partials/account/signup.tpl.html",
                    controller: "NavController",
                    controllerAs: "vm"
                }).state("root.signin",
                {

                    url: "/signin",
                    templateUrl: "partials/account/signin.tpl.html",
                    controller: "NavController",
                    controllerAs: "vm"
                })
                // Role

                .state("root.role-entry",
                {
                    url: "/role-entry",
                    templateUrl: "partials/role/role-entry.tpl.html",
                    controller: "RoleController",
                    controllerAs: "vm"
                })

                // Resource
                .state("root.resource-entry",
                {
                    url: "/resource-entry",
                    templateUrl: "partials/resource/resource-entry.tpl.html",
                    controller: "ResourceController",
                    controllerAs: "vm"
                });

                
        }
    }

    angular.module('app', ["ui.router"]);
    angular.module('app').config(Configuration);
}