# German Cloud

Es un proyecto hecho con: 
* Express
* Tailwind
* EJS
* MySQL
* TypeORM
  
Hecho para alumnos de Digital House del curso Fullstack (o cualquier persona con interes en estas tecnologías)

## Como levantar el proyecto en local 

Crear un archivo .env en la raíz del proyecto. Usar example.env como referencia.

### Instalar dependencias 

```bash
npm run install
```

### Levantar base de datos MySQL

Se puede usar una base instalada localmente o levantar una con docker. 
Dentro del directorio docker/database estan los scripts para generar la estructura de la base de datos y también los docker files para levantar una base con docker 

En caso de usar docker, se pueden usar los comandos que figuran en el `package.json`

```bash
npm run docker:build-db
npm run docker:start-db
```

### Correr en modo desarrollo

```bash
npm run watch
```

### Buildear

Tailwind genera el archivo de css que usaran las vistas

```bash
npm run build:css
```

