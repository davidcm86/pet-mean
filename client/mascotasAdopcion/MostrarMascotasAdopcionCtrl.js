angular
  .module('mascotaPerdida')
  .controller('MostrarMascotasAdopcionCtrl', function(mostrarMascotasAdopcionFactory,$scope,$mdDialog,$rootScope,Flash) {
  	var mm = this;
  	// recuperamos el get de mascotas adopción
    mm.mascotasAdopcion = mostrarMascotasAdopcionFactory.query();
  })