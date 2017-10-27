module App {
    export class Student {
        id: string;
        name: string;
        phone: string;
    }

   export  class StudentRequestModel {
        name: string;
        phone: string;
        orderBy: string;
        isAscending: boolean;
        parge:number;
    }
    class StudentController {

        student: Student;
        information: string;
        studentService: StudentService;


        static $inject = ["StudentService"];

        constructor(studentService: StudentService) {

            this.student = new Student();
            this.studentService = studentService;
            console.log("I am in Student Controller");
        }

        add(): void {
            var self = this;
            let success = function(respons) {
                console.log(respons);
                self.reset();
            };

            let error = function(errorRespon) {
                console.log(errorRespon);
            };
            this.studentService.save(self.student).then(success, error);
        }

        reset(): void {
            this.student = new Student();
        }
    }

    angular.module('app').controller("StudentController", StudentController);
    class StudentsConroller {

        searchRequest: StudentRequestModel;
        students: Student[];
        studentService: StudentService;

        static $inject = ["StudentService"];

        constructor(studentService: StudentService) {
            this.studentService = studentService;
            let self = this;
            self.students = [];
            self.searchRequest = new StudentRequestModel();
            self.searchRequest.parge = 1;

            let success = function(respon) {
                self.students = respon.data;
                console.log(self.students);
            };
            let error = function(errorRespon) {
                alert(errorRespon);
            };
            console.log('i am in Students controller constructor');
            this.studentService.search(self.searchRequest).then(success, error);
           
        }

        search() {
            var self = this;
            let success = function(response) {
                console.log(response);
                self.students = response.data;
            };
            let error = function(errorRespons) {
                console.log(errorRespons);
            };
            this.studentService.search(self.searchRequest).then(success, error);

        }

        sort(property: string) {
            var self = this;
            self.searchRequest.orderBy = property;
            self.searchRequest.isAscending = !self.searchRequest.isAscending;
            self.search();
        }
        next() {

            var self = this;
            self.searchRequest.parge = self.searchRequest.parge + 1;
            self.search();
        }

        previous() {
            var self = this;

            if (self.searchRequest.parge>1) {

                self.searchRequest.parge = self.searchRequest.parge - 1;
                self.search();
            }

        }
    }

    angular.module('app').controller("StudentsController", (StudentsConroller) as any);
}