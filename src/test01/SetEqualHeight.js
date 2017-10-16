//import angular from 'angular';

export const  setEqualHeight = ($timeout, $log, $document) => {
    var myObj={
        compile: function () {
            return {
                post : function(scope, element, attribute){
                    $timeout(function () {
                        var myvar1 = angular.element($document[0].querySelectorAll("[set-equal-height]"));
                        $log.log(myvar1);
                        var myvar = Array.prototype.slice.call(myvar1);
						//var myvar = angular.element('[set-equal-height]').toArray();
                        //$log.log(myvar);
						var maxheight = myvar.reduce(function (max, current) {
							$log.log(angular.element(current));
							return (max > current.clientHeight) ? max : current.clientHeight;
						}, 0)
						myvar1.css({"offsetHeight": maxheight });
						//$log.log(myvar);
						$log.log(maxheight);
					});
                }
            }
        }
    }
    return myObj;
}