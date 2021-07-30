const fs = require('fs');
require ('colors');

const crearAr = async( base, l, x ) => {
    try {
        console.log('================='.rainbow);
        console.log('Tabla del ', base);
        console.log('================='.rainbow);
        let salida = '';

        for( let i = 1 ; i <= x ; i++ ){    
            salida += `${ base } x ${ i } = ${ base * i }\n`;
        }


        if(l){
            console.log(salida);
        }
        


        fs.writeFileSync(`./salida/tabla${base}.txt`,salida);


    return `tabla${base}.txt creado`;
    }catch (err){
        return err;
    }

}

module.exports = {
    crearAr
}
