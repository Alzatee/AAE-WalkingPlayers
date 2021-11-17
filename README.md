# WalkingPlayersPage
## AlzateEA Developer Todos los derecos reservados.

## Instalación
$ npm install

## Servidor de desarrollo
Se debe ejecutar comando según el ambiente y pais y navega en `http://localhost:4200/` por defecto.

```sh
$ ng serve
```
*Si no especifíca el ambiente, por defecto tomará configuración de ambiente de Desarrollo*
```sh
$ ng serve --open 
```
*--open es la etiqueta para indicar que queremos que se abra el puerto por defecto automanticamente en el navegador establecido*

#### Ambientes en local:
| AMBIENTE | COMANDO |
| ------ | ------ | ------ |
| DESARROLLO | `ng serve --configuration dev` |
| QA INTERGRUPO | `ng serve --configuration qa` |
| PRODUCCIÓN | `ng serve --configuration production`|

## Transpilación (Build)
*Aplica la misma configuración para compilar en desarrollo anteriormente explicada, solo que cambiamos
el comando serve(de ejecución) por build(de transpilar el proyecto a js y generar lo necesario para despliegues)*
```sh
$ ng build
```
*Si no especifíca el ambiente, por defecto tomará configuración de ambiente de Desarrollo*
#### Ambientes en local:
| AMBIENTE | COMANDO |
| ------ | ------ | ------ |
| DESARROLLO | `ng build --configuration dev` |
| QA INTERGRUPO | `ng build --configuration qa` |
| PRODUCCIÓN | `ng build --configuration production`|

## Styles
Sass (Sintax Scss).
[Reference docs](https://sass-lang.com/documentation).
Animate.css
[Reference docs](https://animate.style/).
Model [Angular MDB]()
Bootstrap
[Reference docs](https://getbootstrap.com/docs/5.0/getting-started/introduction/).
Angular Material + Material+Icons
[Reference docs](https://material.angular.io/components/categories).
Modals
[SweetAler2](https://sweetalert2.github.io/).
Icons
[FontAwesome Alzate Credentials](https://fontawesome.com/v5.15/icons?d=gallery&p=2).

# ANGULAR README
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
