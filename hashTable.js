class hashTable {
    constructor() {
        this.table = new Array(127);
        this.size = 0;
    }
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }
    set() {
        let key = prompt('¿Cuál es el nombre de tu materia?');
        let value = prompt('Agrega las notas como horario y días en este campo:');
        const index = this._hash(key);
        alert("Has añadido una materia");
        this.table[index] = [key, value];
        this.size++;
    }
    get(key) {
        const index = this._hash(key);
        return this.table[index];
    }
    gets() {
        return this.size;
    }
    getall(){
        return this.table;
    }
  }