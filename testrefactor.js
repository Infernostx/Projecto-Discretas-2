let test;
let img;
let bgm;
let bg;
let ancho,alto;

//Elementos DOM
let canvas;
let titulo;
let nombres;
let viaje;
let visviaje;
let finviaje;
let viajerr;

//

let recorrido;

function preload() {
    soundFormats('mp3');
    tst = loadImage('media/tst.png');
    bg = loadImage('media/bg1.png');
    bgm  = loadSound('media/Neco-Arc-sound-effect.mp3');
    
}

function FinViaje(){
    alert("Has viajado un total de " + DistViaje() + " metros");
    delete(recorrido);
    recorrido = new Pila();
    viajerr.html("<i></i>");
    bgm.play();
}

function DistViaje(){
    if(recorrido.size>=2)
        {
            let dista=0;
            let act=recorrido.head;
            while (act.next!=null)
            {
                dista+=dist(act.data.x,act.data.y,act.next.data.x,act.next.data.y);
                act=act.next;
            }
            return map(dista,0,1000,0,100,1);
        }
        else
        {
            return "0";
        }
}

function mousePressed() {
    test.VerClicked();
}
function keyPressed(){
    switch(key){
        case (27):
            break;
    }
}

function setup() {
    ancho = windowWidth; 
    alto = windowHeight;
    canvas = createCanvas(ancho, alto);
    canvas.position(0,0);
    background('gray');
    
    ////////////////////////////////////////////
    //Elementos DOM
    titulo=createElement("h2","Pathfinder de<br>Ingenieria y Ciencias.");
    titulo.position(ancho*0.013,alto*0.01);
    nombres=createElement("p","Santiago Reyes <br> Miguel Suárez <br> Nicolas Machado <br> Andrés Poveda");
    nombres.position(ancho*0.08,alto*0.1);

    //Viaje Actual
    viaje=createElement("h3","Viaje actual");
    viaje.position(ancho*0.01,alto*0.22);
    visviaje=createElement("p","");
    visviaje.position(ancho*0.01,alto*0.25);
    finviaje = createButton('Finalizar viaje');
    finviaje.position(ancho*0.137,alto*0.35);
    finviaje.mouseClicked(FinViaje);
    viajerr=createElement("p","<i></i>");
    viajerr.position(ancho*0.13, alto*0.25);
    
    recorrido= new Pila();

    test= new Grafo();
    test.Insert(1,"si",[2],{x:windowWidth/2, y:windowHeight/2});
    test.Insert(2,"no",[1],{});
    test.Insert(3,"quiza",[1,2],{});

}

function draw() {
    ancho = windowWidth; 
    largo = windowHeight;
    background("gray");
    push();
    stroke("magenta");
    strokeWeight(5);
    fill("tomato");
    rect(10,10,windowWidth*0.22,windowHeight-10); 
    pop();
    test.Print("black",2,false);
    visviaje.html(recorrido.Print());

}
