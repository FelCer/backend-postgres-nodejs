# Backend-Postgres-Nodejs

Backend echo en Nodejs que esta integrado con una base de datos en Postgres, la cual utiliza a su vez un ORM sequelize.

## Empezando

### Pre-requisitos

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) 
- [PostgreSQL](https://www.postgresql.org/) 

## USO

El modo de producción y desarrollo, en estos momentos solo se diferencia que en desarrollo tiene una dependencia Nodemon, el cual es atento a cualquier cambio sobre el proyecto. Para ejecutarlo son de la siguientes maneras.

### Producción 
1. Ejecutar el comando `npm install` el cual instala las dependencias del proyecto.
2. Ejecutar el comando `npm run start` el cual sincronizara la base de datos y arrancara el servidor.
3. Abrir en el navegador o en aplicación como Postman / insomnia rest, la url `http://localhost:8880`, habra un JSON con la descripción de las URLS en funcionamiento, describiendolas. 

### Desarrollo
1. Ejecutar el comando `npm install` el cual instala las dependencias del proyecto.
2. Ejecutar el comando `npm run deveploment` el cual sincronizára la base de datos y arrancara el servidor en el puerto 8880.
3. Ejecutar el comando `npm run population-db` O `node config/population.db.js` el cual pobla la base de datos, con datos de prueba.
4. Abrir en el navegador o en aplicación como Postman / insomnia rest, la url `http://localhost:8880`, habra un JSON con la descripción de las URLS en funcionamiento, describiendolas.
4. 1. Esta url cargara toda la información de lo productos y categorías `http://localhost:8880/api/getAll`
4. 2. Esta url guardara las compras de un producto `http://localhost:8880/api/createPurchase`

## Colaboradores

[Felipe Cerero Garcia] *FullStack Javascript Developer*