Demostración: https://christopher.house <br> Chat: https://gitter.im/angular-github-issues/Lobby

<a href="https://codeclimate.com/github/crh225/angular-github-issues/maintainability"><img src="https://api.codeclimate.com/v1/badges/e17d5ad267ef6f6503c1/maintainability"></a>
<a href="https://codeclimate.com/github/crh225/angular-github-issues/test_coverage"><img src="https://api.codeclimate.com/v1/badges/e17d5ad267ef6f6503c1/test_coverage"></a>
[![CircleCI](https://circleci.com/gh/crh225/angular-github-issues/tree/master.svg?style=shield)](https://circleci.com/gh/crh225/angular-github-issues/tree/master)
[![Dependency Status](https://david-dm.org/crh225/angular-github-issues.svg)](https://david-dm.org/crh225/angular-github-issues)
[![devDependencies Status](https://david-dm.org/crh225/angular-github-issues/dev-status.svg)](https://david-dm.org/crh225/angular-github-issues?type=dev)
![Angular_Version 6](https://img.shields.io/badge/Angular_Version-7-brightgreen.svg)
[![CodeFactor](https://www.codefactor.io/repository/github/crh225/angular-github-issues/badge)](https://www.codefactor.io/repository/github/crh225/angular-github-issues)
[![forthebadge](https://forthebadge.com/images/badges/designed-in-etch-a-sketch.svg)](https://forthebadge.com)

# Acerca de

Este repositorio busca github en busca de repositorios, problemas para ese repositorio y una búsqueda de usuario en github para desarrolladores angulares. Una vez que busque un repositorio, puede profundizar en cada repositorio y ver una lista de problemas de los últimos siete días.

La otra característica principal es la capacidad de buscar un usuario de github en una ubicación particular en los Estados Unidos. En este momento está predeterminado para TN.

CI está configurado para ejecutar pelusas, pruebas, construir en un modo no apto para la producción y para desplegar a base de fuego.

Este ejemplo muestra cómo usar múltiples entidades en ngrx. La página de búsqueda principal ahora es un panel de gráficos de barras para cada repositorio. En las obras se encuentra la característica ngrx cargada / almacenes.

Acceso seguro a la API de Github a través de Oath 2

Para una demostración en vivo: https://christopher.house

## Servidor de desarrollo

Ejecutar `ng serve` para un servidor de desarrollo. Vaya a `http://localhost:4200/` . La aplicación se volverá a cargar automáticamente si cambia alguno de los archivos de origen.

## Instalación de paquetes npm

Ejecute `npm install` .

## Compilar

Ejecute `ng build --aot` para compilar el proyecto en modo AoT en lugar de JiT. Esto permitirá una representación más rápida de su aplicación, menos solicitudes asíncronas, tamaño de descarga del marco angular más pequeño y detectar errores de la plantilla antes.

Ejecuta `ng build` para construir el proyecto. Los artefactos de compilación se almacenarán en el directorio `dist/` . Use la bandera `-prod` para una compilación de producción.

## Docker: puedes hacerlo en modo dev ejecutando hilado dock o docker-componer -d --build

## Corriendo las pruebas

Ejecute `ng test` para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io) .
