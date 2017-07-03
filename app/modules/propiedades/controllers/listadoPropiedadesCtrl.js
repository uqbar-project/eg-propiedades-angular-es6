class ListadoPropiedadesCtrl {
  
  constructor(PropiedadesHome) {
    this.PropiedadesHome = PropiedadesHome
  }

  delete (propiedadId) {
  	this.PropiedadesHome.delete(propiedadId)
  }
  
}

angular.module("booking-app")
.controller("ListadoPropiedadesCtrl", ListadoPropiedadesCtrl);

ListadoPropiedadesCtrl.$inject = [ "propiedades", "PropiedadesHome" ];
