var propiedadIdActual = 1

class Propiedad {
	constructor(direccion, localidad, estado, tipo) {
		this.id = propiedadIdActual++
		this.direccion = direccion
		this.localidad = localidad 
		this.estado = estado
		this.tipo = tipo
	}
}

class PropiedadesHome {
	getAll() {
		return [
			new Propiedad("Libertad 1617", "Retiro, Buenos Aires", "Abierto", { nombre: "Hotel", cantidadEstrellas: 3 } ),
			new Propiedad("Bulnes 1905", "Palermo, Buenos Aires", "Refaccionando", { nombre: "Particular", banios: 2, antiguedad: 15 }),
			new Propiedad("Avenida Martinez de Hoz 2071", "Punta Mogotes, Mar del Plata", "Abierto", { nombre: "Particular", banios: 1, antiguedad: 0 }),
			new Propiedad("Avenida Belgrano 1041", "Mendoza", "Abierto", { nombre: "Hotel", cantidadEstrellas: 2 })
		]
	}
}

angular.module("booking-app")
.factory("PropiedadesHome", PropiedadesHome)