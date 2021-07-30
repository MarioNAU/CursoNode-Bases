const { crearAr } = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js');


console.clear();





//console.log(process.argv);

/*
const [,,arg3] = process.argv; // ayuda a tomar valores desde consola
const [,base] = arg3.split('=');//divide la entrada de la consola node app --base=5
*/


crearAr( argv.base, argv.l, argv.x )
    .then( nombreAr => console.log(nombreAr,'creado'))
    .catch( err => console.log(err));






