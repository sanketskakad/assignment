export const test01 = {
    template: require('./app.html'),
    controller($scope, ButtonInfoService,$log) {
       $scope.Obuttons = ButtonInfoService.GetButtonInfo().then(function(response ){
           $scope.Obuttons = response;
       });
    }
};
