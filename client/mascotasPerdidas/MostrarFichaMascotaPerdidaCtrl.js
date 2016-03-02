angular
	.module('mascotaPerdida')
	.controller('MostrarFichaMascotaPerdida', function(mostrarMascotaPerdidaFactory,$scope,$rootScope,$route,$routeParams,Flash) {
		$scope.doTheBack = function() {
		  window.history.back();
		};
		console.log($routeParams.created);
		mascotaPerdida = mostrarMascotaPerdidaFactory.query($routeParams.created);

        /*mostrarMascotaPerdidaFactory.get({
            created: $routeParams.created
        }, function (res) {
			console.log(res);
        });*/

		console.log(mascotaPerdida);
    })