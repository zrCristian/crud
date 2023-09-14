# German Cloud

Es un proyecto hecho con: 
* Express
* Tailwind
* EJS
* MySQL
* TypeORM
* AWS
  
Hecho para alumnos de Digital House del curso Fullstack (o cualquier persona con interes en estas tecnologías)

## Como levantar el proyecto en local 

Crear un archivo .env en la raíz del proyecto. Usar example.env como referencia.

### AWS Account 

Las imagenes son almacenadas en un bucket en S3, por lo que es necesario contar con una cuenta en AWS y un bucket en S3.
El nombre del bucket y la región donde este van en el archivo .env

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

Una vez que ya tenemos la base, generar un archivo .env y setear las variables de entorno con los datos necesarios para conectarse a la base. Usar como referencia el archivo `example.env`

### Correr en modo desarrollo

```bash
npm run watch
```

### Buildear

Tailwind genera el archivo de css que usaran las vistas

```bash
npm run build:css
```

