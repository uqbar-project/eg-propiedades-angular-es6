class CrearPropiedadCtrl {

  constructor(PropiedadesHome) {
    this.PropiedadesHome = PropiedadesHome
    this.propiedad = {};
    this.tiposDePropiedad = [{ nombre: "Hotel" }, { nombre: "Particular"}]
  }
  
  guardar () {
  	this.PropiedadesHome.create(this.propiedad)
  }

}

angular.module("booking-app")
.controller("CrearPropiedadCtrl", CrearPropiedadCtrl)

CrearPropiedadCtrl.$inject = [ "PropiedadesHome" ]