(function () {
	// estamos devolviendo un recurso, un objeto para ser utilizado
    var mascotasFactory = function ($resource)  {
        return $resource("/api/mascotas/", {}); // $resource permite hacer llamadas HTTP con el verbo que le pasemos get,post...
    };
    angular.module("mascotaPerdida")
    .factory('mascotasFactory',mascotasFactory)
}());