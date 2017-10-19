class CrearPropiedadCtrl {

  constructor(PropiedadesHome, $state) {
    this.PropiedadesHome = PropiedadesHome
    this.propiedad = {};
    this.tiposDePropiedad = [{ nombre: "Hotel" }, { nombre: "Particular"}]
    this.state = $state
  }
  
  guardar() {
  	this.PropiedadesHome.create(this.propiedad)
  }

  abrirTipoPropiedad() {
  	this.state.go("main.alta_propiedades." + this.propiedad.tipo.nombre.toLowerCase())
  }

}

angular.module("booking-app")
.controller("CrearPropiedadCtrl", CrearPropiedadCtrl)

CrearPropiedadCtrl.$inject = [ "PropiedadesHome" , "$state" ]