module App {

    export class Teacher {
        name: string;
    }

    export class TeacherRequestModel {
        name: string;
        orderBy: string;
        isAscending: boolean;
        page: number;
    }
    class TeacherController {

        teacher: Teacher;

        teacherService: TeacherService;
        static $inject = ["TeacherService"];

        constructor(teacherService: TeacherService) {
            this.teacher = new Teacher();
            this.teacherService = teacherService;
            console.log("I am in teacher controller");
        }

        add(): void {
            var self = this;
            let success = function (respons) {
                console.log(respons);
                self.reset();
            };
            var error = function (errorRespon) {
                console.error(errorRespon);
            };
            this.teacherService.save(self.teacher).then(success, error);
        }
        reset(): void {
            this.teacher = new Teacher();
        }
    }

    angular.module('app').controller("TeacherController", (TeacherController)as any);

    class TeachersController {

        searchRequest: TeacherRequestModel;
        teachers: Teacher[];
        teacherService: TeacherService;

        static $inject = ["TeacherService"];
        constructor(teacherService: TeacherService) {
            this.teacherService = teacherService;

            let self = this;
            self.teachers = [];
            self.searchRequest = new TeacherRequestModel();
            self.searchRequest.page = 1;
            let success = function(response) {
                self.teachers = response.data;
                console.log(self.teachers);
            };
            let error = function(errorResponse) {
                alert(errorResponse);
            };

            console.log("I am in Teachers controller constructor");

        }

        search() {
            var self = this;
            let success = function(response) {
                console.log(response);
                self.teachers = response.data;
            };

            let error = function(errorRespon) {
                console.error(errorRespon);
            };
            this.teacherService.search(self.searchRequest).then(success, error);
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
            var self = this;
            if (self.searchRequest.page>1) {
                self.searchRequest.page = self.searchRequest.page - 1;

                self.search();
            }
        }

    }

    angular.module('app').controller("TeachersController", (TeachersController) as any);
}