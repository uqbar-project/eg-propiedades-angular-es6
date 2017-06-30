class ListadoPropiedadesCtrl {

  constructor(propiedades) {
    this.propiedades = propiedades
  }
  
}

angular.module("booking-app")
.controller("ListadoPropiedadesCtrl", ListadoPropiedadesCtrl);