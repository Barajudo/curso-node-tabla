
const fs = require( 'fs' );
const colors = require('colors');

const crearDatos = ( base, hasta ) => {

    return new Promise ( ( resolve, reject) => {

        let datosArchivo = '';

        datosArchivo += '=====================\n';
        datosArchivo += `    Tabla del ${ base }\n`;
        datosArchivo += '===================== \n';

        for (let index = 1; index <= hasta; index++) {
            datosArchivo += `${ base } x ${ index } =  ${index * base}\n`; 
        }

        ( datosArchivo ) 
            ? resolve( datosArchivo ) 
            : reject(`Error al generar los datos`);
    } )

}

const crearArchivo = ( datosArchivo, base ) => {

    return new Promise ( ( resolve, reject ) => {
        fs.writeFile ( `./salidas/tabla-${ base }.txt`, datosArchivo, ( err ) => {
            ( err )
                ? reject ( 'Error en la creacion del archivo' )
                : resolve (`tabla-${ base }.txt creado exitosamente`);
        })
    })

}

const getInfoArchivo = async( base, listado, hasta ) => {

    const datosArchivo = await crearDatos( base, hasta );
    const archivo = await crearArchivo( datosArchivo, base );

    if ( listado ) {
        return datosArchivo + archivo;
    } else {
        return archivo;
    }
} 

module.exports = {
    getInfoArchivo
}