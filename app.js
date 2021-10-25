const {crearTabla} = require('./helpers/multiplicar')
const argv = require('./config/yargs');

require('colors');

console.clear();

crearTabla(argv.b, argv.l, argv.h)
    .then(tabla => console.log(tabla, 'ha sido creado'.cyan.bold))
    .catch(err => console.log(err));
    
