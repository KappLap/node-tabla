const fs = require('fs');

require('colors');

const crearTabla = async(base = 5, l = false, h = 10) => {
    
    // Metodo 1
    
    // return new Promise((resolve, reject) => {

    //     console.log('==================')
    //     console.log(`Tabla del ${base}`)
    //     console.log('==================')
    
    //     let salida = '';
        
    //     for (let i = 1; i < 11; i++){
    //         salida += `${base} x ${i} : ${base * i}\n`;
    //     }
        
    //     console.log(salida);
        
    //     fs.writeFileSync( `tabla-${base}.txt`, salida);
    //     resolve(`tabla-${base}.txt creado`);
    // })

    // Metodo 2

    try{
        let salida, consola = '';
        
        for (let i = 0; i < h; i++){
            salida += `${base} x ${i} = ${base * i }\n`;

            consola += `${base}`.yellow.bold + ' x '.red.bold + `${i}`.yellow.bold+ ' = '.red.bold + `${base * i }\n`.yellow.bold;
        }
        
        if (l === true){
            console.log('======================'.green.bold)
            console.log(`   Tabla del ${base}`.blue.bold)
            console.log('======================'.green.bold)
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return(`tabla-${base}.txt creado`.cyan.bold);
    }

    catch(err){
        throw err;
    }
}

module.exports = {
    crearTabla
}