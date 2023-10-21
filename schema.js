const { gql } = require('apollo-server');

const typeDefs = gql`
  type Libro {
    id: ID!
    titulo: String!
    autor: String!
  }

  type Query {
    libros: [Libro]
    libro(id: ID!): Libro
  }

  type Mutation {
    agregarLibro(titulo: String!, autor: String!): Libro
    actualizarLibro(id: ID!, titulo: String, autor: String): Libro
    eliminarLibro(id: ID!): Libro
  }
`;

module.exports = typeDefs;
