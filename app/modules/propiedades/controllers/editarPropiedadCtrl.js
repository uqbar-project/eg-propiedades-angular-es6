class EditarPropiedadCtrl {

  constructor (PropiedadesHome, propiedad) {
    this.PropiedadesHome = PropiedadesHome
    this.propiedad = propiedad
    this.tiposDePropiedad = [{ nombre: "Hotel" }, { nombre: "Particular"}]
  }

  guardar() {
  	this.PropiedadesHome.update(this.propiedad)
  }

}

angular.module("booking-app")
.controller("EditarPropiedadCtrl", EditarPropiedadCtrl)

EditarPropiedadCtrl.$inject = [ "PropiedadesHome", "propiedad" ]