angular.module('booking-app')
.config(($stateProvider) => {
  return $stateProvider
  
  .state('main.listado_propiedades', {
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
  
  .state('main.alta_propiedades', {
    url: "/propiedades/crear",
    templateUrl: "app/modules/propiedades/views/form.html",
    controller: "CrearPropiedadCtrl",
    controllerAs: "formCtrl"
  })
  
  .state('main.editar_propiedades', {
    url: "/propiedades/editar/:id",
    templateUrl: "app/modules/propiedades/views/form.html",
    controller: "EditarPropiedadCtrl",
    controllerAs: "formCtrl",
    resolve: {
      propiedad: (PropiedadesHome, $stateParams) => {
        return PropiedadesHome.get(parseInt($stateParams.id))
      }
    }
  })
})