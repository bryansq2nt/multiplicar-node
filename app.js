const { crearArchivo, listarBase } = require("./multiplicar/multiplicar");
const argv = require("./config/yargs").argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarBase(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => { console.log(`archivo creado tabla-${argv.base}.txt`); })
            .catch(e => { console.log(e); });
        break;
    default:
        console.log('comando no reconocido');
}