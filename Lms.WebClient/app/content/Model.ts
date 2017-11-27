module App {

    export 
        class Category {

        id: number;
        categoryType: string;
        constructor(id: number, categoryType: string) {
            this.id = id;
            this.categoryType = categoryType;
        }
    }

    export
        class Content extends Entity {

        constructor() {
            super();

          

        }
        serial: number;
        title: string;
        url: string;
        totalSeconds: number;
        tags: string;
        category: number;
        courseTitle: string;
        courseId: string;
    }

}