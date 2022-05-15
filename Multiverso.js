class Universo{
    constructor(data,x,y,r){
        this.data=data;
        this.x=x;
        this.y=y;
        this.r=r;
        this.conexiones=[];
    }

    Print(){
        push();
        textSize(15);
        fill('white');
        stroke('black');
        strokeWeight(1);
        circle(this.x,this.y,this.r);
        fill('black');
        text(this.data,this.x,this.y);
        pop();
    }

}


class Multiverso{

    //Solo es posible viajar a multiversos cercanos 
    //Puede conectarse con maximo 6 multiversos
    //Solo es posible viajar en una direccion (ida)

    constructor(max_conexiones){
        this.independientes=[];
        this.size=0;
        this.max=max_conexiones;
    }

    CrearUniversoIndependiente(data,x,y,r){
        this.independientes.push(new Universo(data,x,y,r));
        this.size++;
    }

    CrearUniversoDependiente(conexiones,data,x,y,r){
        let uni = new Universo(data,x,y,r);
        for(let i=0; i<conexiones.length;i++){
            if(conexiones[i].conexiones.length<6){
                conexiones[i].conexiones.push(uni);
            }
            else{
                throw "Maximo de conexiones permitidas = 6";
            }
        }
    }

    Print(){
        push();
        for(let i=0; i<this.independientes.length;i++){
            //Imprimir conexiones
            for(let j=0; j<this.independientes[i].conexiones.length;j++){
                line(   this.independientes[i].x,
                        this.independientes[i].y,
                        this.independientes[i].conexiones[j].x,
                        this.independientes[i].conexiones[j].y);
                this.independientes[i].conexiones[j].Print();
            }
            //Imprimir nodos
            textSize(15);
            fill('white');
            stroke('black');
            strokeWeight(1);
            circle(this.independientes[i].x,this.independientes[i].y,this.independientes[i].r);
            fill('black');
            text(this.independientes[i].data,this.independientes[i].x-(0.5*15),this.independientes[i].y+(0.4*15));
        }
        pop();
    }


}