(function () {
	// estamos devolviendo un recurso, un objeto para ser utilizado
    var mostrarMascotaPerdidaFactory = function ($resource)  {
        return $resource("/api/mostrarMascotaPerdida/created", {}); // 
    };
    angular.module("mascotaPerdida")
    .factory('mostrarMascotaPerdidaFactory',mostrarMascotaPerdidaFactory)
}());