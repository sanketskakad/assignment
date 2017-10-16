export class ButtonInfoService{
    constructor($http,$log){
        'ngInject';
         this.http = $http;
         this.log = $log;
        
    }

    GetButtonInfo(){
        return this.http.get("./test01/data.json").then((response)=> {return response.data}
                                                  ,
                                                  (error) => {this.log.log(error.data);});
    }
}