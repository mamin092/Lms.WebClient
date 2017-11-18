module App {

    class CourseController extends BaseController<Course> {

        static $inject = ["CourseService"];
        constructor(service: CourseService) {
            super(service);
            this.model = new Course();
            console.log('i am in course controller');
        }
        reset() {
            this.model = new Course();
        }


    }

    angular.module('app').controller("CourseController", (CourseController) as any);


    class CoursesController extends BaseController<Course> {

        reset() {
           
        }
        static $inject = ["CourseService"];
        constructor(service: CourseService) {
            super(service);
            console.log('i am in course controller constroctor')
        }


    }
    angular.module('app').controller("CoursesController", (CoursesController) as any);

}