(function () {
    var rutas = function ($routeProvider) { // routeProvider contiene los metodos
        $routeProvider
            .when('/mascotas/perdidas', {
                controller: 'MostrarMascotasPerdidasCtrl',
                controllerAs: 'mm',
                templateUrl: 'mascotasPerdidas/perdidas.html',
            })
            .when('/mascotas/perdidas/:created', {
                controller: 'MostrarMascotasPerdidasCtrl',
                controllerAs: 'mm',
                templateUrl: 'mascotasPerdidas/fichaMascotaPerdida.html',
            })
            .when('/mascotas/encontradas', {
                controller: 'MostrarMascotasEncontradasCtrl',
                controllerAs: 'mm',
                templateUrl: 'mascotasEncontradas/encontradas.html',
            })
            .when('/mascotas/adopcion', {
                controller: 'MostrarMascotasAdopcionCtrl',
                controllerAs: 'mm',
                templateUrl: 'mascotasAdopcion/adopcion.html',
            })
            .otherwise({
                redirectTo: '/'
            });
    };

    angular.module('mascotaPerdida').config(rutas);
}());