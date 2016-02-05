(function () {
	// estamos devolviendo un recurso, un objeto para ser utilizado
    var mostrarMascotasEncontradasFactory = function ($resource)  {
        return $resource("/api/mostrarMascotasEncontradas/", {}); // $resource permite hacer llamadas HTTP con el verbo que le pasemos get,post...
    };
    angular.module("mascotaPerdida")
    .factory('mostrarMascotasEncontradasFactory',mostrarMascotasEncontradasFactory)
}());