const colors = require('colors');

const { getInfoArchivo } = require('./helpers/multiplicar');

const argv = require('./config/yargs');

console.clear()

getInfoArchivo ( argv.base, argv.list, argv.hasta )
    .then( response => { console.log( response )})
    .catch ( err => { console.log ( err ) })
