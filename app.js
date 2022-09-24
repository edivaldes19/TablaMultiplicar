const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors')
console.clear()
crearArchivo(argv.b, argv.h, argv.l)
    .then(nombreArchivo => console.log(`${nombreArchivo} creado exitosamente.`))
    .catch(err => console.log(err))