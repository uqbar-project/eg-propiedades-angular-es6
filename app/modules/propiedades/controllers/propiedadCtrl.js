class PropiedadCtrl {
  
  constructor(PropiedadesHome, propiedad, $state, nombreController) {
    this.PropiedadesHome = PropiedadesHome
    this.propiedad = propiedad
    this.state = $state
    this.nombreController = nombreController
    this.tiposDePropiedad = [{ nombre: "Hotel" }, { nombre: "Particular" }]
  }

  guardar() {
  	this.PropiedadesHome.upsert(this.propiedad)
  }

  abrirTipoPropiedad() {
  	this.state.go("main." + this.nombreController + "_propiedades." + this.propiedad.tipo.nombre.toLowerCase())
  }
}

angular.module("booking-app")
.controller("PropiedadCtrl", PropiedadCtrl)

PropiedadCtrl.$inject = [ "PropiedadesHome", "propiedad", "$state", "nombreController" ]