class Lab03 {
    constructor() {
        this.palindromo();
        console.log(this.cantidadCaracteres());
        this.bisiesto();
        this.primos();
    }

    palindromo() {
        let num_temporal, rem, final = 0;
        let numero = Number(prompt('1. Introduzca un número: '));
        num_temporal = numero;
        while(numero > 0){
            rem = numero%10;
            numero = parseInt(numero/10);
            final = final*10+rem;
        }
        if(final === num_temporal){
            console.log(`El número ${num_temporal} es palíndromo.`);
            final = 0;
        } else {
            console.log(`El número ${num_temporal} NO ES palíndromo.`)
            final = 0;
        }
    }

    cantidadCaracteres() {
        let texto = prompt('2. Intoduzca una cadena de texto: ');
        return [...texto.replace(/\s/g, '')].reduce((objeto, caracter) => { // spread operator
            objeto[caracter] = objeto[caracter] + 1 || 1;
            return objeto;
        }, {});
    }

    bisiesto() {
        let Anio = prompt('3. Intoduzca un año: ');
        let checkYear = (((Anio % 4 == 0) && (Anio % 100 != 0)) || (Anio % 400 == 0)) ? 1 : 0;
        if (! checkYear )  
            return console.log(`El año ${Anio} NO es bisiesto`);
        else 
            return console.log(`El año ${Anio} es bisiesto`);
    }

    primos() {
        let numero = prompt('4. Intoduzca un numero: ');
        if (numero == 0 || numero == 1 || numero == 4) return console.log(`${numero} NO es primo.`);
            for (let x = 2; x < numero / 2; x++) {
                if (numero % x == 0) return console.log(`${numero} NO es primo.`);
            }
            return console.log(`${numero} es primo.`);
    }
}


const lab03 = new Lab03();