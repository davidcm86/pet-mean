angular
  .module('mascotaPerdida')
  .controller('MascotasCtrl', function(mascotasFactory,$scope,$mdDialog,$rootScope,$route,Flash) {
    var mp = this;
    mp.guardarMascotaPerdida = guardarMascotaPerdida;
    function guardarMascotaPerdida(tipoForm) {
      var nuevaMascota = new mascotasFactory(mp.nuevaMascota);
      nuevaMascota.tipo_registro = tipoForm;
      console.log(nuevaMascota);
      nuevaMascota.created = Date.now();
      //console.log(nuevaMascota);
      //console.log($('.thumbnail')['1'].currentSrc);
      //var blob = new Blob([$('.thumbnail')['1'].currentSrc], {type: 'image/jpg'});
      //saveAs(blob, "imageFileName.jpg");
      nuevaMascota.$save();
      $route.reload();
    }
    // llamamos desde el select.pais con un ng-change para cargar el select de las ciudades
    mp.paisSelect = function(){
      this.ciudad = "";
      // llamar a sus ciudades
      //console.log(this);
      switch(this.nuevaMascota.pais) {
        case 'Argentina':
          $scope.ciudades = ('Capital Federal-Buenos Aires-Catamarca-Córdoba-Corrientes-Chaco-Chubut-' + 
            'Entre Ríos-Formosa-Jujuy-La Pampa-La Rioja-Mendoza-Misiones-Neuquén-Río Negro-Salta-' + 
            'San Juan-San Luis-Santa Cruz-Santa Fe-Santiago del Estero-Tierra del Fuego-Tucumán').split('-').map(function(ciudad) {
            return {abbrev: ciudad};
          }) 
          break;
        case 'Bolivia':
          $scope.ciudades = ('Santa Cruz de la Sierra-La Paz-Cochabamba-El Alto-Tarija-Sucre-Trinidad-' + 
            'Potosí-Oruro-Cobija-Otra Ciudad de Bolivia').split('-').map(function(ciudad) {
            return {abbrev: ciudad};
          })
          break;
        case 'Colombia':
          $scope.ciudades = ('Bogotá, D.C.-Amazonas-Antioquia-Arauca-Archipiélago de San Andrés, Providencia y Santa Catalina-' + 
            'Atlántico-Bolívar-Boyacá-Caldas-Caquetá-Casanare-Cauca-Cesar-Chocó-Córdoba-Cundinamarca-' + 
            'Guainía-Guaviare-Huila-La Guajira-Magdalena-Meta-Nariño-Norte de Santander-Putumayo-Quindio-' + 
            'Risaralda-Santander-Sucre-Tolima-Valle del Cauca-Vaupés-Vichada').split('-').map(function(ciudad) {
            return {abbrev: ciudad};
          })
          break;
        case 'Chile':
          $scope.ciudades = ('R.Metropolitana-Aisén del Gral. C. Ibáñez del Campo-Antofagasta-Araucanía-' + 
          'Arica y Parinacota-Atacama-Bíobío-Coquimbo-Libertador B. O Higgins-Los Lagos-Los Ríos-' + 
          'Magallanes y Antártica Chilena-Maule-Tarapacá-Valparaíso').split('-').map(function(ciudad) {
            return {abbrev: ciudad};
          })    
          break;
        case 'Ecuador':
          $scope.ciudades = ('Azuay-Bolívar-Cañar-Carchi-Chimborazo-Cotopaxi-El Oro-Esmeraldas-Galápagos-' + 
            'Guayas-Imbabura-Loja-Los Ríos-Manabí-Morona-Santiago-Napo-Orellana-Pastaza-Pichincha-' + 
            'Sucumbíos-Tungurahua-Zamora Chinchipe-Santa Elena-Santo Domingo de los Tsáchilas').split('-').map(function(ciudad) {
            return {abbrev: ciudad};
          })
          break;
        case 'España':
          $scope.ciudades = ('A Coruña-Álava-Albacete-Alicante-Almería-Asturias-Ávila-Badajoz-Baleares-Barcelona-Bizkaia-Burgos-' + 
            'Cáceres-Cádiz-Cantabria-Castellón-Ceuta-Ciudad Real-Córdoba-Cuenca-Gipuzkoa-Girona-Granada-' + 
            'Guadalajara-Huelva-Huesca-Jaén-La Rioja-Las Palmas-León-Lleida-Lugo-Madrid-Málaga-Melilla-' + 
            'Murcia-Navarra-Ourense-Palencia-Pontevedra-Salamanca-Segovia-Sevilla-Soria-Sta. Cruz de Tenerife-' + 
            'Tarragona-Teruel-Toledo-Valencia-Valladolid-Zamora-Zaragoza').split('-').map(function(ciudad) {
              return {abbrev: ciudad};
            })   
          break;
        case 'México':
          $scope.ciudades = ('Distrito Federal-Aguascalientes-Baja California-Baja California Sur-Campeche-' + 
            'Coahuila-Colima-Chiapas-Chihuahua-Durango-Guanajuato-Guerrero-Hidalgo-Jalisco-Estado de México-' + 
            'Michoacán-Morelos-Nayarit-Nuevo León-Oaxaca-Puebla-Querétaro-Quintana Roo-San Luis Potosí-' + 
            'Sinaloa-Sonora-Tabasco-Tamaulipas-Tlaxcala-Veracruz-Yucatán-Zacatecas').split('-').map(function(ciudad) {
            return {abbrev: ciudad};
          })
          break;
        case 'Perú':
          $scope.ciudades = ('Lima-Amazonas-Ancash-Apurimac-Arequipa-Ayacucho-Cajamarca-Callao-' + 
            'Cusco-Huancavelica-Huanuco-Ica-Junin-Lambayeque-La Libertad-Loreto-Madre De Dios-Moquegua-' + 
            'Pasco-Piura-Puno-San Martin-Tacna-Tumbes-Ucayali').split('-').map(function(ciudad) {
            return {abbrev: ciudad};
          })
          break;   
        case 'Uruguay':
          $scope.ciudades = ('Artigas-Canelones-Cerro Largo-Colonia-Durazno-Flores-Florida-Lavalleja-' + 
            'Maldonado-Montevideo-Paysandú-Río Negro-Rivera-Rocha-Salto-San José-Soriano-Tacuarembó-' + 
            'Treinta y Tres').split('-').map(function(ciudad) {
            return {abbrev: ciudad};
          })
          break;
        case 'Venezuela':
          $scope.ciudades = ('Amazonas-Anzoátegui-Apure-Aragua-Barinas-Bolívar-Carabobo-Cojedes-' + 
            'Delta Amacuro-Distrito Capital-Falcón-Guárico-Lara-Mérida-Miranda-Monagas-Nueva Esparta-' + 
            'Portuguesa-Sucre-Táchira-Trujillo-Vargas-Yaracuy-Zulia').split('-').map(function(ciudad) {
            return {abbrev: ciudad};
          })
          break;   
        default:
          $scope.ciudades = ('A Coruña-Álava-Albacete-Alicante-Almería-Asturias-Ávila-Badajoz-Baleares-Barcelona-Bizkaia-Burgos-' + 
            'Cáceres-Cádiz-Cantabria-Castellón-Ceuta-Ciudad Real-Córdoba-Cuenca-Gipuzkoa-Girona-Granada-' + 
            'Guadalajara-Huelva-Huesca-Jaén-La Rioja-Las Palmas-León-Lleida-Lugo-Madrid-Málaga-Melilla-' + 
            'Murcia-Navarra-Ourense-Palencia-Pontevedra-Salamanca-Segovia-Sevilla-Soria-Sta. Cruz de Tenerife-' + 
            'Tarragona-Teruel-Toledo-Valencia-Valladolid-Zamora-Zaragoza').split('-').map(function(ciudad) {
              return {abbrev: ciudad};
            })   
      }
    }
    $scope.animales = ('Gato Perro Pajaro Conejo Reptil Roedor').split(' ').map(function(animal) {
      return {abbrev: animal};
    })
    $scope.sexos = ('Macho Hembra').split(' ').map(function(sexo) {
      return {abbrev: sexo};
    })
    $scope.paises = ('Argentina Bolivia Chile Colombia Ecuador España México Perú Uruguay Venezuela').split(' ').map(function(pais) {
      return {abbrev: pais};
    })
    // popup registro
    $scope.showAdvanced = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'mascotas/registroMascotaPerdida.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true
      })
      .then(function(answer) {
        // cerramos la ventana porque han dado a guardar y todo fue bien
        var message = '<strong> Bien hecho!</strong></br> Su mascota ya está en nuestra web para ser encontrada!</br>';
        message +='Se le ha enviado un mail a su cuenta de correo para que pueda gestionar su anuncio.</br>';
        message +='Mucha Suerte ;)';

        // mandamos mensaje de exito
        Flash.create('success', message, 'customAlertSuccess');
      }, function() {
        // este vento se da cuando cierran el popup
      });
    };
    $scope.showAdvanced2 = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'mascotas/registroMascotaEncontrada.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true
      })
      .then(function(answer) {
        // cerramos la ventana porque han dado a guardar y todo fue bien
        var message = '<strong> Bien hecho!</strong></br> La mascota encontrada ya está en nuestra web para ser buscada!.';
        // mandamos mensaje de exito
        Flash.create('success', message, 'customAlertSuccess');
      }, function() {
      });
    };
    $scope.showAdvanced3 = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'mascotas/registroMascotaAdopcion.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true
      })
      .then(function(answer) {
        // cerramos la ventana porque han dado a guardar y todo fue bien
        var message = '<strong> Bien hecho!</strong></br> La mascota en adopción ya está en nuestra web para poder buscarle un hogar!';
        // mandamos mensaje de exito
        Flash.create('success', message, 'customAlertSuccess');
      }, function() {
      });
    };
  })


  /*muestra el formulario de registro para la mascota*/
  function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }