## Proyecto gestión de estudiantes 

Este proyecto es una herramienta que permite gestionar tareas de forma eficiente y sencilla la administración de estudiantes.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [API](#api)

## Descripción

La herramienta de gestión de estudiantes permite a los usuarios administrar información de estudiantes, organizaciones y departamentos. Proporciona funcionalidades para registrar, actualizar y eliminar estudiantes, así como para consultar estudiantes por organización y colegio.

Para describir mejor el modelo de datos de este proyecto es que existen departamentos y cada departamento tiene organizaciones (relación uno amuchos).
Las organizaciones tiene mucho estudiantes y muchos estudiantes pueden pertenecer a muchas organizaciones (relación mucho a mucho).

Se debe registrar un departamento y organización para realizar el crud del estudiante y logearse en la aplicación.

Proxima mejora migration y seeders.

## Características

- Registro de estudiantes
- editar estudiantes 
- Eliminación de estudiantes
- Consulta de estudiantes por organización
- Consulta de estudiantes por colegio

## Instalación

Para instalar y configurar el proyecto, sigue estos pasos:

1. Clona el repositorio:
    git clone https://github.com/SergioMoralesJorquera/crud_sequalize.git
    
2. Navega aldirectorio del proyecto:
    cd tu-repositorio


3. Instala las dependencias:
    npm install


4. Configura las variables de entorno en un archivo [env]:

    DIALECT = 'postgres'
    DATABASE = 'dbOrganization'
    USERNAME = 'postgres'
    PASSWORD = 'admin'
    HOST = 'localhost'
    PORTDB = 5434
    PORT = 3001


5. Ejecuta las migraciones de la base de datos:
    Se implementaran en un futuro 


6. Inicia el servidor:
    npm start

## Uso
Para usar la herramienta de gestión de estudiantes, sigue estos pasos:

1. Accede a la aplicación en tu navegador en `http://localhost:3000`.
2. Registra un nuevo estudiante proporcionando la información requerida.
3. Consulta, actualiza o elimina estudiantes según sea necesario.

## API

### Endpoints

- `POST /student`: Registra un nuevo estudiante.
- `GET /student`: Obtiene todos los estudiantes, con opción de filtrar por `schoolId` y `organizationId`.
- `PUT /student/:id`: Actualiza la información de un estudiante.
- `DELETE /student/:id`: Elimina un estudiante.

### Ejemplo de Solicitud

#### Registrar un Estudiante

curl -X POST http://localhost:3000/students \
-H "Content-Type: application/json" \
-d '{
    "name": "Juan",
    "lastname": "Pérez",
    "date": "2000-01-01",
    "email": "juan.perez@example.com",
    "phone": "123456789",
    "address": "Calle Falsa 123",
    "schoolId": "uuid-del-colegio",
    "organizationId": "uuid-de-la-organización"
}'
