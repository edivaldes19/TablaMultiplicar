const fs = require('fs')
const colors = require('colors')
// const crearArchivo = (base = 5) => {
//     return new Promise((resolve, reject) => {
//         try {
//             let salida = ''
//             for (let index = 1; index <= 10; index++) {
//                 if (index === 10) {
//                     salida += `${base} x ${index} = ${base * index}`
//                 } else {
//                     salida += `${base} x ${index} = ${base * index}\n`
//                 }
//             }
//             fs.writeFile(`tabla-${base}.txt`, salida, () => {
//                 resolve(`Nombre del archivo generado: tabla-${base}`)
//             })
//         } catch (error) {
//             reject(error)
//         }
//     })
// }
const crearArchivo = async (base = 10, hasta = 10, listar = false) => {
    try {
        let salida, consola = ''
        for (let index = 1; index <= hasta; index++) {
            if (index === hasta) {
                salida += `${base} x ${index} = ${base * index}`
                consola += `${base} ${'x'.green} ${index} ${'='.green} ${base * index}`
            } else {
                salida += `${base} x ${index} = ${base * index}\n`
                consola += `${base} ${'x'.green} ${index} ${'='.green} ${base * index}\n`
            }
        }
        if (listar) {
            console.log('===================='.rainbow)
            console.log(`Tabla del: ${base}`.blue)
            console.log('===================='.rainbow)
            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `tabla-${base}.txt`
    } catch (error) {
        throw error
    }
}
module.exports = { crearArchivo }