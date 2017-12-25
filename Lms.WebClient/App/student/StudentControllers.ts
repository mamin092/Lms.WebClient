module App {

    class StudentController extends BaseController<Student>{

        static $inject = ["StudentService"]
        constructor(service: StudentService) {
            super(service);
            this.model = new Student();
            console.log('i am in student controller');
            this.searchRequest["due"] = 0;
        }

        reset(): void {
            this.model = new Student();

        }
    }
    angular.module('app').controller("StudentController", (StudentController) as any);



    class StudentsController extends BaseController<Student> {
        reset() {

        }
        static $inject = ["StudentService"];
        constructor(service: StudentService) {
            super(service);

            console.log('I am student controller constructor');
            this.search();
        }

    }

    angular.module('app').controller("StudentsController", (StudentsController) as any);

}