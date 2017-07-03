angular.module('booking-app')
.config(($stateProvider) => {
  return $stateProvider
  .state('main.dashboard', {
    url: "/",
    templateUrl: "app/modules/dashboard/dashboard.html",
    controller: "DashboardCtrl",
    controllerAs:"dashboardCtrl"
  })
})