const opts = {
    base: {
        alias: 'b',
        demand: true,
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla', opts).command('crear', 'Crea un archivo con la tabla', opts)
    .help()
    .argv;

module.exports = {
    argv
}