const argv = require('yargs')
        .option('b',{
            alias: 'base',
            type: 'number',
            demandOption: true
        })
        .check((argv, option) => {
            console.log('yargs',argv);
            if(isNaN(argv.b) ){
                throw ' La base debe ser un número'
            }
            return true;
        })
        .option('l',{
            alias: 'listar',
            type: 'boolean',
        })
        .option('x',{
            alias:'hasta',
            type: 'numbrer',
            demandOption: true
        })
        .argv;


module.exports = argv;