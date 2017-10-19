angular.module('booking-app')

.directive('cajita', () => {
    
    return {
        restrict: 'EA',
        templateUrl: 'app/directives/cajita/view/cajita.html',
        scope: {
            detalle: '<'
        }
    }
    
})


