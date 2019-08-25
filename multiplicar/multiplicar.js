const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += ` ${base} * ${i} = ${ base * i} \n`;
        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject("Error al intentar crear el archivo.");
            } else {
                resolve("El archivo ha sido creado satisfactoriamente");
            }
        });
    });
}

let listarBase = (base, limite = 10) => {

    console.log("=========================".green);
    console.log(`====Tabla del ${base}====`.green);
    console.log("=========================".green);

    for (let i = 1; i <= limite; i++) {
        console.log(` ${base} * ${i} = ${ base * i} \n`);
    }
}

module.exports = {
    crearArchivo,
    listarBase
}