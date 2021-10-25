const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Toma la base de la multiplicacion'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la taba en consola'
                })
                .option('h', {
                    alias: 'hasta el numero x',
                    type: 'number',
                    default: 10,
                    demandOption: true,
                    describe: 'Muestra el limite de la tabla'
                })
                .check((argv, options) => {
                    if (isNaN(argv.b)){
                        throw 'La base tiene que ser un numero';
                    }

                    return true;
                })
                .argv;

module.exports = argv;