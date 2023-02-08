## Description

## Instalation
```npm i```
## Configuration
Se configuran las rutas en el archivo routes.js

- **externalUrl** : Path que va a pedir el servicio
- **localRoute**: Archivo que vamos a devolver.
- **fileType**: 
    - **json**: carga un objeto de nuestros archivos de mocks importando con require. Portanto ese archivo debe contener un module.exports
    - **text**: Sirve para devolver archivos de texto plano. (podemos cargar archivos js de esta manera)
- **headers**: Objeto con las cabeceras que queramos devolver en la respuesta
- **sleep**: Tiempo que tardará en devolver la respuesta.
- **method**: Metodo para la llamada.

