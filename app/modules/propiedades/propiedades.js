angular.module('booking-app')

.config(($stateProvider) => {
  return $stateProvider
  .state('listado_propiedades', {
    url: "/propiedades",
    templateUrl: "app/modules/propiedades/views/list.html",
    controller: "ListadoPropiedadesCtrl",
    controllerAs: "listadoCtrl",
    resolve: {
    	propiedades: (PropiedadesHome) => {
    		return PropiedadesHome.getAll()
    	}
    }
  })

  .state('alta_propiedades', {
    url: "/propiedades/crear",
    templateUrl: "app/modules/propiedades/views/create.html"
  })
  
})