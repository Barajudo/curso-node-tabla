const argv =  require('yargs')
    .option( 'b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        default: 1,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option( 'l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'Muestra o no (true/false la salida de la tabla en consola'
    } )
    .option( 'h', {
        alias: 'hasta',
        type: 'number',
        default: 1,
        describe: 'Muestar el limite al cual llegara la multiplicacion'
    } )
    .check( ( argv, option ) => {
        
        if ( isNaN ( argv.b ) ) {
            throw 'La base tiene que ser un numero';
        }

        if ( isNaN ( argv.h ) ) {
            throw 'El limite de la multiplicacion (hasta) tiene que ser un numero mayor a 0';
        }

        return true;
    } )
    .argv;

module.exports = argv;