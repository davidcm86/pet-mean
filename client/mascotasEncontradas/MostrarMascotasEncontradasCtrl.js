angular
  .module('mascotaPerdida')
  .controller('MostrarMascotasEncontradasCtrl', function(mostrarMascotasEncontradasFactory,$scope,$mdDialog,$rootScope,Flash) {
  	var mm = this;
  	// recuperamos el get de mascotas encontradas
    mm.mascotasEncontradas = mostrarMascotasEncontradasFactory.query();
  })