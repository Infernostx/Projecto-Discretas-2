class NodoPrio{
    constructor(id,prio){
        this.key=id;
        this.priority=prio;
    }
}
class ColaPrio{

    constructor(){
        this.valores = [];
    }

    enqueue (prio, key) {
        this.valores.push(new NodoPrio(key,prio));
        this.sort();
    }

    dequeue(){
        return this.valores.shift().key;
    }

    sort() {
        this.valores.sort(function (a, b) {return a.priority - b.priority;});
    }

    isEmpty(){
        return !this.valores.length;
    }

}
