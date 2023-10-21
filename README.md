# API GraphQL para la Gestión de Libros

Esta es una API GraphQL simple para la gestión de libros. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una lista de libros.

## Descripción

Este proyecto proporciona una interfaz GraphQL para administrar una lista de libros. Puede realizar las siguientes operaciones:

- Crear un nuevo libro con un título y autor.
- Consultar la lista de todos los libros disponibles.
- Consultar un libro específico por su ID.
- Actualizar un libro existente por su ID.
- Eliminar un libro por su ID.

# Fundamentos de GraphQL

GraphQL es un lenguaje de consulta y una tecnología de servidor para interactuar con tus APIs de manera eficiente y flexible. A diferencia de las REST APIs tradicionales, GraphQL permite a los clientes solicitar solo la información que necesitan, lo que lo hace especialmente poderoso en aplicaciones modernas.

## Principales conceptos de GraphQL:

- **Tipos**: GraphQL define tipos de datos para tus objetos, lo que facilita la estructura de tus datos. Puedes definir tipos personalizados que se ajusten a tus necesidades.

- **Consultas**: Los clientes envían consultas GraphQL para solicitar datos específicos. Pueden especificar qué campos desean y anidar consultas para obtener información relacionada.

- **Mutaciones**: A través de mutaciones, los clientes pueden modificar datos en el servidor. Esto permite crear, actualizar o eliminar registros de manera controlada.

- **Resolvers**: Los resolvers son funciones que indican cómo se obtiene la información solicitada. Cada campo en una consulta tiene un resolver correspondiente en el servidor.

- **Esquema**: El esquema GraphQL define la estructura de tu API, incluyendo los tipos, consultas y mutaciones disponibles. Sirve como contrato entre el servidor y los clientes.

- **Introspección**: GraphQL permite a los clientes descubrir la estructura de la API en tiempo de ejecución, lo que facilita la exploración y documentación de la misma.

- **Singular Endpoint**: A diferencia de las múltiples rutas de las REST APIs, GraphQL suele exponer un único punto de acceso (generalmente "/graphql") para todas las solicitudes.

GraphQL ofrece un enfoque más flexible y eficiente para interactuar con tus APIs al permitir a los clientes solicitar datos de manera granular y adaptativa. Esto lo convierte en una elección poderosa para desarrolladores que desean personalizar las solicitudes de datos según sus necesidades específicas.

## Beneficios

- GraphQL: Utiliza GraphQL como lenguaje de consulta, lo que permite a los clientes solicitar solo los datos que necesitan, lo que mejora la eficiencia de las solicitudes.
- Flexibilidad: Puedes agregar, consultar, actualizar y eliminar libros de manera sencilla a través de consultas y mutaciones GraphQL.
- Personalización: Extiende el esquema y los resolvers para adaptar la API a tus necesidades específicas.

## Instalación

1. Clona este repositorio a tu máquina local:

   ```bash
   git clone https://github.com/Matignaciom/API-GraphQL-Libros.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd tuproyecto (en mi caso "api-graphql-libros")
   ```

3. Instala las dependencias:

   ```bash
   npm install express apollo-server graphql
   ```

## Uso

1. Inicia el servidor GraphQL en el puerto 4000:

   ```bash
   npm start
   ```

2. Abre tu navegador o una herramienta de cliente GraphQL como GraphiQL o Apollo Client y accede a `http://localhost:4000` para comenzar a interactuar con la API.

## Ejemplos de CRUD

A continuación, se muestran ejemplos de consultas y mutaciones CRUD que puedes usar con esta API:

```graphql
# Crear un nuevo libro
mutation {
  agregarLibro(titulo: "Nuevo Libro", autor: "Nuevo Autor") {
    id
    titulo
    autor
  }
}

# Consultar todos los libros
query {
  libros {
    id
    titulo
    autor
  }
}

# Consultar un libro por ID
query {
  libro(id: "1") {
    id
    titulo
    autor
  }
}

# Actualizar un libro por ID
mutation {
  actualizarLibro(id: "1", titulo: "Nuevo Título", autor: "Nuevo Autor") {
    id
    titulo
    autor
  }
}

# Eliminar un libro por ID
mutation {
  eliminarLibro(id: "1") {
    id
    titulo
    autor
  }
}
```

Estos ejemplos te permitirán realizar operaciones CRUD en tu lista de libros a través de GraphQL en el puerto 4000.

Hecho con ❤️ por Matias Ignacio - https://github.com/Matignaciom
