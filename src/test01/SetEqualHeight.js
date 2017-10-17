//import angular from 'angular';

export const  setEqualHeight = ($timeout, $log, $document) => {
    return {
        restrict: 'A',
        compile: function () {
            return {
                post : function(scope, element, attribute){
                    $timeout(function () {
                        var myvar1 = angular.element($document[0].querySelectorAll("[set-equal-height]"));
                        var myvar = Array.prototype.slice.call(myvar1);
						var maxheight = myvar.reduce(function (max, current) {
							return (max > current.offsetHeight) ? max : current.offsetHeight;
						}, 0)
                        myvar1.css({"height": maxheight+"px" })
					});
                }
            }
        }
    }
}