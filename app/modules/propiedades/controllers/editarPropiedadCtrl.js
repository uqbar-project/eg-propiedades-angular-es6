class EditarPropiedadCtrl {

  constructor (PropiedadesHome, propiedad) {
    this.PropiedadesHome = PropiedadesHome
    this.propiedad = propiedad
    this.tiposDePropiedad = [{ nombre: "Hotel" }, { nombre: "Particular"}]
  }

  editar() {
  	this.PropiedadesHome.update(self.propiedad)
  }

}

angular.module("booking-app")
.controller("EditarPropiedadCtrl", EditarPropiedadCtrl)

EditarPropiedadCtrl.$inject = [ "PropiedadesHome", "propiedad" ]