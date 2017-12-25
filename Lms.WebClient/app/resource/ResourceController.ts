module App { 

    export class ResourseController extends BaseController<Resource> {

        resourceTypeList: ResourceType[] = [];
        selectdeResourse: ResourceType;


        static $inject = ["ResourceService"];
        constructor(service: ResourceService) {
            super(service);
            this.reset();
            this.loadResourseTypeList();
        }

        loadResourseTypeList(): void {
            var self = this;
            self.resourceTypeList.push(new ResourceType("WebPage", "WePage"));
            self.resourceTypeList.push(new ResourceType("Div", "Div"));
            self.resourceTypeList.push(new ResourceType("UI-Control", "UI-Control"));

        }

        addResourse(): void {
            var self = this;

            let successCallback = (response: any): void => {
                alert('Resource added successfully');
                self.reset();
            };

            let errorCallback = (error: any): void => {
                console.log(error);
            };
            self.model.type = self.selectdeResourse.id;

           
            self.service.commandUrl = self.service.commandUrl;
            self.service.save(self.model).then(successCallback, errorCallback);
        }

        reset() {
            var self = this;
            self.model = new Resource();        }

    }

    angular.module('app').controller("ResourseController", (ResourseController) as any);
} 