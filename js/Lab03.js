class Lab03 {
    constructor() {
        this.resultadoPrimo = document.getElementById('resultadop');
        this.resultadoPaldr = document.getElementById('resultadopal');
        this.formp = document.getElementById('primoForm');
        this.formpal = document.getElementById('palForm');

        this.palindromo(this.formpal);
        this.primos(this.formp);
    }

    palindromo(form) {
        let num_temporal, rem, final = 0;
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let numero = Number(document.getElementById('palindromo').value);
            num_temporal = numero;
            while(numero > 0){
                rem = numero%10;
                numero = parseInt(numero/10);
                final = final*10+rem;
                console.log(final)
            }

            if(final === num_temporal){
                console.log(`El número ${num_temporal} es palíndromo.`);
                this.resultadoPaldr.innerHTML = `El número ${num_temporal} es palíndromo.`;
                final = 0;
            } else {
                console.log(`El número ${num_temporal} NO ES palíndromo.`)
                this.resultadoPaldr.innerHTML = `El número ${num_temporal} NO ES palíndromo.`;
                final = 0;
            }
        });
    }

    primos(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const numero = document.getElementById('numerop').value;
            if (numero == 0 || numero == 1 || numero == 4) return this.resultadoPrimo.innerHTML = 'No es primo';;
            for (let x = 2; x < numero / 2; x++) {
                if (numero % x == 0) return this.resultadoPrimo.innerHTML = 'No es primo';
            }
            return this.resultadoPrimo.innerHTML = 'ES primo';
        })
    }
}

const lab03 = new Lab03();