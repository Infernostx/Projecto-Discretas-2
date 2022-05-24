
class Universo{
    constructor(
        data,
        {   x=random(70,windowWidth-70),                    //Coordenada en x del nodo
            y=random(70,windowHeight-70),                   //Coordenada en y del nodo
            r=random(50,100),                                //Radio del nodo
            c=random(["blue","yellow","green","black"])      //Color del nodo
        }){
        //Data es un parametro obligatorio
        this.data=data;
        //X Y R son opcionales (existen por y para el visualizador)
        this.x=x;
        this.y=y;
        this.r=r;
        this.c=c;
        //Las conexiones del universo se definen en el multiverso
        this.conexiones=[];
    }

    Print(){
        //Imprimir conexiones
        for(let j=0; j<this.conexiones.length;j++){
            line(   this.x,
                    this.y,
                    this.conexiones[j].x,
                    this.conexiones[j].y);
            this.conexiones[j].Print();
        }
        //Imprimir nodos
        push();
        fill(this.c);
        circle(this.x,this.y,this.r);
        fill('white');
        textSize(15);
        stroke('black');
        strokeWeight(1);
        textAlign('center');
        circle(this.x,this.y,this.r);
        fill('black');
        text(this.data,this.x,this.y);
        strokeWeight(2);
        text(this.data,this.x-(0.5*15),this.y+(0.4*15));
        pop();
    }

}


class Multiverso{

    //Solo es posible viajar a multiversos cercanos 
    //Puede conectarse con maximo 6 multiversos
    //Solo es posible viajar en una direccion (ida)

    constructor(max_conexiones){
        //Parametro obligatorio
        this.independientes=[];
        //Atributos del multiverso    
        this.size=0;
        this.max=max_conexiones;
    }

    //paramsvis hace referencia a los parametros del visualizador
    CrearUniversoIndependiente(data,paramsvis){
        this.independientes.push(new Universo(data,paramsvis));
        this.size++;
    }

    //Un universo dependiente puede depender de varios independientes
    CrearUniversoDependiente(conexiones,data,paramsvis){
        let uni = new Universo(data,paramsvis);
        for(let i=0; i<conexiones.length;i++){
            if(conexiones[i].conexiones.length<this.max){
                conexiones[i].conexiones.push(uni);
                this.size++;
            }
            else{
                throw "Maximo de conexiones permitidas ="+this.max;
            }
        }
    }

    CrearConexion(ini,fin){
        if(ini!=fin){
            if(ini.conexiones.length<this.max && fin.conexiones.length<this.max){
                ini.conexiones.push(fin);
            }else{
                throw "Maximo de conexiones permitidas ="+this.max;
            }
        }else{
            throw "Conexion no permtida";
        }
    }

    Print(){
        push();
        for(let i=0; i<this.independientes.length;i++){
            //Imprimir conexiones (recursivo)
            for(let j=0; j<this.independientes[i].conexiones.length;j++){
                line(   this.independientes[i].x,
                        this.independientes[i].y,
                        this.independientes[i].conexiones[j].x,
                        this.independientes[i].conexiones[j].y);
                this.independientes[i].conexiones[j].Print();

            }
            //Imprimir nodos
            push();
            fill(this.independientes[i].c);
            circle(this.independientes[i].x,this.independientes[i].y,this.independientes[i].r);
            stroke("black");
            strokeWeight(2);
            textSize(15);
            fill('white');
            text(this.independientes[i].data,this.independientes[i].x-(0.5*15),this.independientes[i].y+(0.4*15));
            pop();
        }
        pop();
    }


}