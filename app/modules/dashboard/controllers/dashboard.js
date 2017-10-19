

class DashboardCtrl {
  
  constructor() {
    this.detalleMensajes = new Detalle(10, '¡Nuevos mensajes!', "comments", "primary")
    this.detalleCampanias = new Detalle(5, '¡Nuevas campañas!', "tasks", "green")
    this.detalleVentas = new Detalle(3, '¡Nuevas ventas!', "shopping-cart", "yellow")
    this.detalleQuejas = new Detalle(3, '¡Nuevas quejas!', "support", "red")
  }
  
}

class Detalle {

  constructor (_cantidad, _mensaje, _icono, _color) { 
    this.cantidad = _cantidad
    this.mensaje = _mensaje
    this.icono = _icono
    this.color = _color
  }

}

angular.module('booking-app').controller('DashboardCtrl', DashboardCtrl)