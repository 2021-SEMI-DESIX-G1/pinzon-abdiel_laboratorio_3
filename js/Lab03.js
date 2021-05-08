class Lab03 {
    constructor() {
        this.resultadoPrimo = document.getElementById('resultadop');
        this.formp = document.getElementById('primoForm');
        // this.primos(this.formp);
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