angular
  .module('mascotaPerdida')
  .controller('MostrarMascotasPerdidasCtrl', function(mostrarMascotasPerdidasFactory,$scope,$mdDialog,$rootScope,Flash) {
  	var mm = this;
  	mm.campoOrder = "";
  	// recuperamos el get de mascotas perdidas
    mm.mascotasPerdidas = mostrarMascotasPerdidasFactory.query();


    mm.paisSelect = function(){
      this.ciudad = "";
      // llamar a sus ciudades
      //console.log(this);
      switch(this.mascotaPerdida.pais) {
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
      // realizar consulta para buscar las mascotas de ese determinado país


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

  })