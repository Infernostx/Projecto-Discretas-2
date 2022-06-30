class Vertice {
    constructor(
        id,data,
        {   x = random(70, ancho - 70),                             
            y = random(70, alto - 70),                              
            r = random(50, 100),                                    
            c = random(["white", "yellow", "tomato","red"]),      
            cod = ("Sin información adicional."),
            img = tst     // 1 - Si se quiere usar imagen por defecto cargar imagen transparente
        }) {
        //Parametro obligatorio
        this.id=id;
        this.data = data;   //Nombre / valor 

        //Parametros visuales opcionales
        this.x = x;         //Coordenada en x del vertice
        this.y = y;         //Coordenada en y del vertice
        this.r = r;         //Radio del vertice
        this.c = c;         //Color del vertice
        this.cod = cod;     //info adicional del vertice
        this.img = img;     //Imagen asociada al vertice
    }
0
    Hover(c,sw,grafo){
        let d = dist(mouseX, mouseY, this.x, this.y);
        if (d < this.r / 2) {
            //Imprimir conexiones
            for (let idconexion of grafo.conexiones[this.id]){
                if(idconexion in grafo.vertices){        //Solo hago la conexion si el nodo al que hago referencia existe
                    let vertfin=grafo.vertices[idconexion];

                    //Imprimir conexiones
                    push();
                    stroke(c);
                    strokeWeight(sw);
                    line(this.x,this.y,vertfin.x,vertfin.y);
                    pop();

                    //Imprimir el vertice fin nuevamente
                    push();
                    fill(vertfin.c);
                    stroke(c);
                    strokeWeight(sw);
                    circle(vertfin.x, vertfin.y, vertfin.r);
                    fill('white');
                    textSize(vertfin.r * 0.250);
                    stroke('black');
                    strokeWeight(2);
                    image(vertfin.img, vertfin.x - (vertfin.r * 0.5), vertfin.y - (vertfin.r * 0.5), vertfin.r * cos(2 * PI), vertfin.r * sin(360), vertfin.img.x, vertfin.img.y);
                    text(vertfin.data, vertfin.x - (vertfin.r * 0.350), vertfin.y + (vertfin.r * 0.0314));
                    pop();

                }else{
                    print(id+": el vertice "+idconexion+ " no existe! Ignorando conexion");
                }
            }
            // Imprimir vertice hovereado
                push();
                fill(this.c);
                stroke(c);
                strokeWeight(sw);
                circle(this.x, this.y, this.r);
                fill('white');
                textSize(this.r * 0.250);
                stroke('black');
                strokeWeight(2);
                image(this.img, this.x - (this.r * 0.5), this.y - (this.r * 0.5), this.r * cos(2 * PI), this.r * sin(360), this.img.x, this.img.y);
                text(this.data, this.x - (this.r * 0.350), this.y + (this.r * 0.0314));
                pop();
            
            //Imprimir info del vertice
                //push();
                fill("gray");
                stroke("black");
                strokeWeight(3);
                rect(this.x+(this.r/2)+15, this.y-100, 200,150);
                fill('white');
                textSize(15);
                stroke('black');
                strokeWeight(2);
                text((this.data).replace(/[\n]/gm, ''),this.x+(this.r/2)+20,this.y-(75));
                text(this.cod,this.x+(this.r/2)+20,this.y-(40));
                pop();
            
        }
    }

    Clicked(grafo){
        let d = dist(mouseX,mouseY,this.x,this.y);
        if (d<this.r/2){
            //Añadir el universo tocado a la lista de recorrido
            text(recorrido.Print(),50,20);
            if(recorrido.size==0){
                recorrido.PushBack(this);
                viajerr.html("<i></i>");
            }
            else if (recorrido.size==1){
                if(recorrido.head.data!=this){
                    //Verificar conexiones
                    if(grafo.conexiones[recorrido.head.data.id].has(this.id)){
                        recorrido.PushBack(this);
                        viajerr.html("<i></i>");
                    }else{
                        viajerr.html("<i>Los caminos no<br>estan conectados!</i>");
                    }
                }else{
                    viajerr.html("<i>No puedes viajar al <br> mismo lugar!</i>");
                }
            }
            else{
                if(recorrido.tail.data!=this){
                    if(grafo.conexiones[recorrido.tail.data.id].has(this.id)){
                        recorrido.PushBack(this);
                        viajerr.html("<i></i>");
                    }else{
                        viajerr.html("<i>Los caminos no <br>estan conectados!</i>");
                    }
                }else{
                    viajerr.html("<i>No puedes viajar al <br> mismo lugar!</i>");
                }
            }
            if(grafo.conexiones[recorrido.tail.data.id].size==0){
                viajerr.html("<i>Camino sin <br>      salida!</i>");
            }
        }
    }
}

class Grafo{
    constructor(){
        this.vertices={};       //Diccionario donde se le asigna un ID a cada vertice
        this.conexiones={};     //Diccionario donde se le asigna un set de IDS a cada ID en representacion de sus conexiones
        this.distancias={};     //Diccionario donde se calcula la distancia entre el vertice de la llave y sus respectivas conexiones
    }

    Insert(id,data,connections,visual){ //ID es el identificador de cada vertice en el grafo
        this.vertices[id]=new Vertice(id,data,visual);      //Añadir el vertice al arreglo de vertices con la key siendo su ID
        this.conexiones[id]=new Set();  //Inicializar el set de las conexiones de cada vertice
        for(let i of connections){
            this.conexiones[id].add(i);
        }
    }


    Print(c,sw){
        //Imprimir aristas
        for (let id in this.conexiones){
            //La key de conexiones es el Id del nodo inicial
            let vertinicio=this.vertices[id];

            //this.conexiones[id] corresponde al set donde estan las conexiones de ese nodo inicial
            for (let idconexion of this.conexiones[id]){
                if(idconexion in this.vertices){        //Solo hago la conexion si el nodo al que hago referencia existe
                    let vertfin=this.vertices[idconexion];
                    push();
                    stroke(c);
                    strokeWeight(sw);
                    line(vertinicio.x,vertinicio.y,vertfin.x,vertfin.y);
                    pop();
                }else{
                    print(id+": el vertice "+idconexion+ " no existe! Ignorando conexion");
                }
            }
        }
        //Imprimir vertices
        for(let id in this.vertices){
                key=this.vertices[id];
                key.Hover('blue',6,this);            //Al imprimir tambien se verifica si se esta hovereando el vertice
                //paso this como parametro pq en los vertices no existen conexiones, existen sobre el grafo en si entonces tengo que 
                //pasar ese grafo de referencia para hacer el hover que si es inherente a cada vertice (lol)
                push();
                fill(key.c);
                stroke(c);
                strokeWeight(sw);
                circle(key.x, key.y, key.r);
                fill('white');
                textSize(key.r * 0.250);
                stroke('black');
                strokeWeight(2);
                image(key.img, key.x - (key.r * 0.5), key.y - (key.r * 0.5), key.r * cos(2 * PI), key.r * sin(360), key.img.x, key.img.y);
                text(key.data, key.x - (key.r * 0.350), key.y + (key.r * 0.0314));
                pop();
        }
    }

    VerClicked(){
        //Si se hizo un click sobre el canvas, verificar en que nodo fue hecho
        for(let id in this.vertices){
            this.vertices[id].Clicked(this);
        }
    }

    CalcularDists(){
        //Distancias es un diccionario de diccionarios, el diccionario correspondiente al ID del vertice de inicio
        //Contiene como llaves las IDS de los diccionarios a los que va conectado, y como valor la distancia de la arista que los une.
        for (let id in this.conexiones){
            //La key de conexiones es el Id del nodo inicial
            let vertinicio=this.vertices[id];
            let distanciasid={};
            //this.conexiones[id] corresponde al set donde estan las conexiones de ese nodo inicial
            for (let idconexion of this.conexiones[id]){
                if(idconexion in this.vertices){        //Solo hago la conexion si el nodo al que hago referencia existe
                    let vertfin=this.vertices[idconexion];
                    let distancia = dist(vertinicio.x,vertinicio.y,vertfin.x,vertfin.y);
                    distanciasid[idconexion]=distancia; 
                }else{
                    print(id+": el vertice "+idconexion+ " no existe! Ignorando conexion");
                }
            }
            this.distancias[id]=distanciasid;     //Añadir el arreglo con los detalles de las distancias 
        }
    }

    DistViaje(recorrido){
        if(recorrido.size>=2)
            {
                let dista=0;
                let act=recorrido.head;
                while (act.next!=null)
                {
                    let actid=act.data.id;
                    let nextid=act.next.data.id;
                    dista+=this.distancias[actid][nextid];
                    act=act.next;
                }
                dista=int(dista*0.2);
                return dista;
            }
            else
            {
                return "0";
            }
    }

}