class Nodo {
    constructor(val,priority) {
        this.data = val;                //El val seria el ID del vertice  
        this.prio = priority;           //Y la prio la distancia?
    }
}

class ColaPrio {
    constructor() {
        this.valores = [];
    }

    Encolar(val, priority) {
        let nodonuevo = new Nodo(val, priority);
        this.valores.push(nodonuevo);
        let i = this.valores.length - 1;
        const act = this.valores[i];

        while (i > 0) {
        let ipadre = Math.floor((i - 1) / 2);
        let padre = this.valores[ipadre];

        if (padre.prio <= act.prio) {       //Es casi que un metodo burbuja de ordenamiento
            this.valores[ipadre] = act;
            this.valores[i] = padre;
            i = ipadre;
        } else break;
        }
    }

    Desencolar() {
        const max = this.valores[0];
        const fin = this.valores.pop();
        this.valores[0] = fin;

        //Volver a ordenar

        let i = 0;
        const len = this.valores.length;
        const act = this.valores[0];
        while (true) {
        let izqi = 2 * i + 1;
        let deri = 2 * i + 2;
        let izq, der;
        let temp = null;

        if (izqi < len) {
            izq = this.valores[izqi];
            if (izq.prio > act.prio) temp = izqi;
        }
        if (deri < len) {
            der = this.valores[deri];
            if (
            (act === null && der.prio > act.prio) ||
            (act !== null && der.prio > izq.prio)
            )
            temp = deri;
        }

        if (temp === null) break;   //Si no hay que hacer cambios esta balanceado el heap
        
        this.valores[i] = this.valores[temp];
        this.valores[temp] = act;
        i = temp;
        }

        return max;
    }
}
