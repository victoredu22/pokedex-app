# favorite-pokemon
  Aplicativo creado para proceso selección global 66
 
# Detalles tecnicos
  Es un aplicativo para la visualización de datos de pokemones, esta consume una api que entrega información básica, 
  para luego poder manipularla y guardarla dentro de un state propio de vue. La visualización de datos
  es infinita ya que contamos con scroll, esto ayuda a mejorar el rendimiento de la carga. Además de contar con un buscador dependiendo siempre de los pokemones guardados en el state y una acción de guardar a nuestro pokemon favorito.
 
## Instalación - Local
```
npm install
```
## Construido con
  Dentro de las tecnologías que ocupe para el desarrollo de este aplicativo son: 
  * [animate.css] - Ayuda a hacer transiciones de data más bonitas
  * [axios] - Ayuda a realizar peticiones de api
  * [vue-infinite-scroll] - Ayuda a crear el scroll infinito para que aparezcan los datos de los pokemones
  * [vue-router] - Ayuda al funcionamiento de url
  * [vuex] - Ayuda al almacenamiento de data en el state propio

  
### Compilacion y funcionamiento de la pagina
```
npm run serve
```

### Compilacion para una futura produccion
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
