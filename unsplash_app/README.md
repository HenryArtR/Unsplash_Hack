# UnsplashApp

Una aplicación que recopila la información de Unsplash para mostrar las fotos que el usuario desee y poder visualizarlo sin problemas. Consta de un buscador y una paginación para que sea mas fácil la busqueda.

La página web es sencilla, todo pasa en una sola página para que no se carguen tantas cosas y la velocidad de carga sea mas rápida.


## Framework

Para armar toda la aplicación utilizo Angular porque tiene una buena estructura y buena documentación que ayudan a que un proyecto grande en el futuro continue sin problemas por si quieres actualizar el código o añadir mas funcionalidades puedes hacerlo sin repetir tanto código.

> Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

## Estructura

He pensado en hacer la estructura de la página muy parecida a otras plataformas de fotografías para que el usuario se sienta familiarizado, también lo he hecho pensando en la usabilidad y la facilidad a la hora de navegar por la página ya que es muy sencilla.


## Maquetación

Una vez hecha la estructura puse el código en marcha junto con la llama a la api de Unsplash para asegurarme de que todo corre bien y no tener problemas luego de haber maquetado y diseñado toda la página. Me decanté por usar las librerías de NgMaterial
y PrimeNg para diseñar mas rápido. Utilizo Primeflex sobretodo para el diseño responsive y NgMaterial para implementar algunas funcionalidades ya que luego personalizarlas es mucho mas sencillo y cómodo que PrimeNg.

> Este proyecto usa [Prime Ng](https://primeng.org/) y [Angular Material](https://material.angular.io//) para el diseño.


## Código

La estructura del código es muy básica, he puesto solo una ruta que es la página home para no ponerlo todo en app.component, hay una carpeta para las interfaces, para poder leer el código mas rápido.

También he creado una carpeta de librerías para poder añadir mas funcionalidades de dichas librerias a la página mediante un módulo si se requiere.

El código de llamada a la api de Unsplash esta en un servicio para que sea más fácil de llamar esa funcion en otros componentes que lo requieran, aunque en este caso solo hay una página y no es necesario, esta pensado para cuando la aplicación crezca.

## Reconocimientos

* [Unsplash]('https://unsplash.com/developers)

## Contact info

* tel: 608880686
* correo: henryrivera.frontend@gmail.com






