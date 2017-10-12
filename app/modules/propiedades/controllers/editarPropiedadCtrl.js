class EditarPropiedadCtrl {

  constructor (PropiedadesHome, propiedad, $state) {
    this.PropiedadesHome = PropiedadesHome
    this.propiedad = propiedad
    this.tiposDePropiedad = [{ nombre: "Hotel" }, { nombre: "Particular"}]
    this.state = $state
  }

  guardar() {
  	this.PropiedadesHome.update(this.propiedad)
  }

  abrirTipoPropiedad() {
  	this.state.go("main.editar_propiedades." + this.propiedad.tipo.nombre.toLowerCase())
  }

}

angular.module("booking-app")
.controller("EditarPropiedadCtrl", EditarPropiedadCtrl)

EditarPropiedadCtrl.$inject = [ "PropiedadesHome", "propiedad" ]