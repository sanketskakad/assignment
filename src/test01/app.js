export const test01 = {
    template: require('./app.html'),
    controller($scope, ButtonInfoService, $log, $window, $translate) {
       ButtonInfoService.GetButtonInfo().then(function(response ){
           $scope.Obuttons = response;
       });

       $scope.languageChange = function (lang){
           $translate.use(lang);
       };   

       $scope.previousPage = function (){
           $window.history.back();
       };
    }
};
