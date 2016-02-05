(function () {
	// estamos devolviendo un recurso, un objeto para ser utilizado
    var mostrarMascotasPerdidasFactory = function ($resource)  {
        return $resource("/api/mostrarMascotasPerdidas/", {}); // $resource permite hacer llamadas HTTP con el verbo que le pasemos get,post...
    };
    angular.module("mascotaPerdida")
    .factory('mostrarMascotasPerdidasFactory',mostrarMascotasPerdidasFactory)
}());