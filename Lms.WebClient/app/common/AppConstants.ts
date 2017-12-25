module App {
    export class AppConstants {
        
        static BaseUrl = "http://localhost:11620/"
        static StatuasOk = 200;
        static StatuasBad = 400;
        static BaseApiUrl = AppConstants.BaseUrl + "api/";
        static UserAuthenticationUrl = AppConstants.BaseUrl + "token";

    }
} 