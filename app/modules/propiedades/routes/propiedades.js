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
    controller: "PropiedadCtrl",
    controllerAs: "formCtrl",
    resolve: {
      propiedad:  () => { return {} },
      nombreController:  () => { return "alta" }
    }
  })
  .state('main.alta_propiedades.hotel', {
    views : { "tipo-propiedad": { templateUrl: "app/modules/propiedades/views/hotelForm.html" } }
  })
  .state('main.alta_propiedades.particular', {
    views : { "tipo-propiedad": { templateUrl: "app/modules/propiedades/views/particularForm.html" } }
  })
  .state('main.editar_propiedades', {
    url: "/propiedades/editar/:id",
    templateUrl: "app/modules/propiedades/views/form.html",
    controller: "PropiedadCtrl",
    controllerAs: "formCtrl",
    resolve: {
      propiedad:  (PropiedadesHome, $stateParams) => {
        return PropiedadesHome.get(parseInt($stateParams.id))
      },
      nombreController: () => { return "editar" }
    }
  })
  .state('main.editar_propiedades.hotel', {
    views : { "tipo-propiedad": { templateUrl: "app/modules/propiedades/views/hotelForm.html" } }
  })
  .state('main.editar_propiedades.particular', {
    views : { "tipo-propiedad": { templateUrl: "app/modules/propiedades/views/particularForm.html" } }
  })
})