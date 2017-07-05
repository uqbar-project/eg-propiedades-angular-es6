angular.module('booking-app', ['ui.router'])

.config(($urlRouterProvider, $locationProvider)  =>{
  $urlRouterProvider.otherwise('/')
  return $locationProvider.html5Mode(true)
})
.run(($state)=> {})  // https://github.com/angular-ui/ui-router/issues/679

angular.module('booking-app')
.config(($stateProvider) => {
  return $stateProvider
  .state('dashboard', {
    url: "/",
    templateUrl: "app/modules/dashboard/dashboard.html",
    controller: "DashboardCtrl",
    controllerAs:"dashboardCtrl"
  })
})