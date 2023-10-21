let libros = [
    { id: '1', titulo: 'Libro 1', autor: 'Autor 1' },
    { id: '2', titulo: 'Libro 2', autor: 'Autor 2' },
    // Agrega más libros si deseas
];

const resolvers = {
    Query: {
        libros: () => libros,
        libro: (parent, args) => libros.find(libro => libro.id === args.id),
    },
    Mutation: {
        agregarLibro: (parent, args) => {
            const nuevoLibro = { id: String(libros.length + 1), ...args };
            libros.push(nuevoLibro);
            return nuevoLibro;
        },
        actualizarLibro: (parent, args) => {
            const libroIndex = libros.findIndex(libro => libro.id === args.id);
            if (libroIndex === -1) {
                throw new Error(`El libro con ID ${args.id} no se encontró.`);
            }

            const libroActualizado = { ...libros[libroIndex], ...args };
            libros[libroIndex] = libroActualizado;
            return libroActualizado;
        },
        eliminarLibro: (parent, args) => {
            const libroIndex = libros.findIndex(libro => libro.id === args.id);
            if (libroIndex === -1) {
                throw new Error(`El libro con ID ${args.id} no se encontró.`);
            }

            const libroEliminado = libros.splice(libroIndex, 1)[0];
            return libroEliminado;
        },
    },
};

module.exports = resolvers;
