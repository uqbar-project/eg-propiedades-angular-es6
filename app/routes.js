
angular.module('booking-app', ['ui.router'])
.config(($urlRouterProvider, $locationProvider) => {
  $urlRouterProvider.otherwise('/')
  return $locationProvider.html5Mode(true)
})
.config(($stateProvider) => {
  return $stateProvider
  .state('main', {
    abstract: true,
    views: {
      'layout': {
        templateUrl: "app/layout/layout.html"
      },
      'container@main': {
        template: "<ui-view>"
      },
      'topbar@main': {
        templateUrl: "app/layout/topbar.html"
      },
      'sidebar@main': {
        templateUrl: "app/layout/sidebar.html"
      }
    }
  })
})