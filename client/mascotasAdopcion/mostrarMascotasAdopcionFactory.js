(function () {
	// estamos devolviendo un recurso, un objeto para ser utilizado
    var mostrarMascotasAdopcionFactory = function ($resource)  {
        return $resource("/api/mostrarMascotasAdopcion/", {}); // $resource permite hacer llamadas HTTP con el verbo que le pasemos get,post...
    };
    angular.module("mascotaPerdida")
    .factory('mostrarMascotasAdopcionFactory',mostrarMascotasAdopcionFactory)
}());