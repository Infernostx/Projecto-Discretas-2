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
    alert("Has viajado aproximadamente " + test.DistViaje(recorrido) + " metros");
    delete(recorrido);
    recorrido = new Pila();
    viajerr.html("<i></i>");
    bgm.play();
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
    //finviaje.classList.add('re-nav-link');
    finviaje.position(ancho*0.137,alto*0.35);
    finviaje.mouseClicked(FinViaje);
    viajerr=createElement("p","<i></i>");
    viajerr.position(ancho*0.13, alto*0.25);
    
    recorrido= new Pila();

    test= new Grafo();
    test.Insert(0,"Zona en \nObras",[],{x:ancho/1.395, y:alto/1.2,r:alto/4.2,c:'black',cod:"Espacio para la Facultad de\nArquitectura"});
    //alrededor de la Plaza
    test.Insert(1,"Plaza \nChé",[2,3,4,5],{x:ancho/1.82, y:alto/1.05,r:alto/10,c:'red',cod:"Plaza central de la\nUniversidad Nacional"});
    test.Insert(2,"Camino",[1,23,24,40],{x:ancho/1.7, y:alto/1.15,r:alto/20,c:'tomato'});
    test.Insert(3,"Auditorio",[1,6],{x:ancho/1.65, y:alto/1.05,r:alto/15,c:'gray',cod:"Auditoro León de Greiff.\n\nEdificio 104."});
    test.Insert(4,"Biblioteca \nCentral",[1],{x:ancho/2.03, y:alto/1.05,r:alto/15,c:'yellow',cod:"Biblioteca Central Gabriel\nGarcia Márquez.\n\nEdificio 102."});
    test.Insert(5,"Camino",[1,16],{x:ancho/1.95, y:alto/1.15,r:alto/20,c:'tomato'});
    //Entrada Cra. 30
    test.Insert(6,"Cra. 30",[3,7,8],{x:ancho/1.28, y:alto/1.05,r:alto/10,c:'red',cod:"Entrada por la Avenida\nCarrera 30. Lleva al museo\nde Arte."});
    test.Insert(7,"Fac. \nEconomia",[6],{x:ancho/1.2, y:alto/1.15,r:alto/15,c:'yellow',cod:"Facultad de Ciencias\nEconómicas.\n\nEdificio 310."});
    test.Insert(8,"Camino",[6,26,39,41],{x:ancho/1.25, y:alto/1.42,r:alto/20,c:'tomato'});
    //Entrada Cll. 53
    test.Insert(9,"Cll. 53",[10,11,12,38],{x:ancho/1.3, y:alto/5.5,r:alto/10,c:'red',cod:"Entrada por la Calle 53.\nLleva al colegio IPERM."});
    test.Insert(10,"Patios \nIng.",[9,11,19],{x:ancho/1.3, y:alto/2.8,r:alto/15,c:'yellow',cod:"Postgrados en Materiales y\nProcesos de Manufactura.\n\nEdificio 407."});
    test.Insert(11,"Camino",[9,10,12,19,29],{x:ancho/1.42, y:alto/3.9,r:alto/20,c:'tomato'});
    test.Insert(12,"Observatorio",[9,11],{x:ancho/1.43, y:alto/5.5,r:alto/15,c:'yellow',cod:"Observatorio Atronómico.\n\nEdificio 413."});
    //Entrada Cra. 45
    test.Insert(13,"Cra. 45",[14],{x:ancho/3, y:alto/6,r:alto/10,c:'red',cod:"Entrada por la Carrera 45.\nLleva al departamento de\nZootecnia y la cancha\nacústica."});
    test.Insert(14,"Camino",[13,29,30,34,37],{x:ancho/2.58, y:alto/3.9,r:alto/20,c:'tomato'});
    //Entrada Cll. 26
    test.Insert(15,"Cll. 26",[16,17],{x:ancho/3.7, y:alto/1.2,r:alto/10,c:'red',cod:"Entrada por la Avenida\nCalle 26.\nLleva a los departamentos\nde Humanidades y diseño\ngráfico."});
    test.Insert(16,"Fac. \nDerecho",[5,15,33],{x:ancho/2.27, y:alto/1.2,r:alto/15,c:'yellow',cod:"Facultad de Derecho,\nCiencias Políticas y Sociales.\n\nEdificio 201."});
    test.Insert(17,"Camino",[15,32,36,37],{x:ancho/3.5, y:alto/1.37,r:alto/20,c:'tomato'});

    //Alrededor del triangulo
    test.Insert(18,"Fac. \nQuimica",[20,21,24,25,28,30],{x:ancho/1.72, y:alto/2.2,r:alto/15,c:'yellow',cod:"Departamento de Química.\n\nEdificio 451."});
    test.Insert(19,"Lab. \nQuímica",[20,10,11,21,25],{x:ancho/1.49, y:alto/2.8,r:alto/15,c:'yellow',cod:"Laboratorio de Ingenieria\nQuímica.\n\nEdificio 412."});
    test.Insert(20,"Aulas",[18,19,25],{x:ancho/1.6, y:alto/2.8,r:alto/15,c:'yellow',cod:"Aulas de Ingenieria.\n\nEdificio 453."});
    test.Insert(21,"I.E.I.",[18,19,25],{x:ancho/1.4, y:alto/2.2,r:alto/15,c:'yellow',cod:"Instituto de Extensión e\nInvestigación.\n\nEdificio 406."});
    test.Insert(22,"Fac. \nMatemáticas",[25,26],{x:ancho/1.4, y:alto/1.75,r:alto/15,c:'yellow',cod:"Departamentos de\nMatemáticas,Física\ny Estadística.\n\nEdificio 404."});
    test.Insert(23,"Fac. \nIngeniería",[2,24,25,26],{x:ancho/1.6, y:alto/1.6,r:alto/15,c:'yellow',cod:"Facultad de Ingeniería.\n\nEdificio 401."});
    test.Insert(24,"Fac. \nFarmacia",[2,18,23,25],{x:ancho/1.75, y:alto/1.75,r:alto/15,c:'yellow',cod:"Departamentos de Farmacia.\n\nEdificio 450."});
    test.Insert(25,"Chazas \nIng.",[18,19,20,21,22,23,24,26,41],{x:ancho/1.52, y:alto/1.75,r:alto/20,c:'tomato'});
    //Entrando por la 30
    test.Insert(26,"Parqueadero",[8,22,23,25],{x:ancho/1.4, y:alto/1.42,r:alto/20,c:'tomato'});
    test.Insert(27,"Lab.\nHidráulicos",[41],{x:ancho/1.2, y:alto/1.75,r:alto/15,c:'yellow',cod:"Laboratorio de Ensayos\nHidráulicos\n\nEdificio 408."});
    //Alrededor del CyT
    test.Insert(28,"CyT",[18,29,30],{x:ancho/2, y:alto/3,r:alto/15,c:'yellow',cod:"Ciencia y Tecnologia.\n\nEdificio 454."});
    test.Insert(29,"Camino",[11,14,28],{x:ancho/2, y:alto/3.9,r:alto/20,c:'tomato'});
    test.Insert(30,"Camino",[14,18,28,35],{x:ancho/2.18, y:alto/2.5,r:alto/20,c:'tomato'});
    //Alrededor de Medicina
    test.Insert(31,"Fac. \nMedicina",[32,35],{x:ancho/2.4, y:alto/1.7,r:alto/15,c:'yellow',cod:"Facultad de Medicina.\n\nEdificio 471."});
    test.Insert(32,"Camino",[17,31,33,35],{x:ancho/2.6, y:alto/1.37,r:alto/20,c:'tomato'});
    test.Insert(33,"Camino",[16,32],{x:ancho/2.16, y:alto/1.37,r:alto/20,c:'tomato'});
    test.Insert(34,"Fac. \nCiencias",[14],{x:ancho/2.7, y:alto/2.7,r:alto/15,c:'yellow',cod:"Facultad de Ciencias.\n\nEdificio 476."});
    test.Insert(35,"Dir. \nInnovación",[30,31,32],{x:ancho/2.7, y:alto/1.9,r:alto/15,c:'yellow',cod:"Dirección Nacional de\nInnovación Académica.\n\nEdificio 477."});
    test.Insert(36,"Fac. \nVeterinaria",[17,37],{x:ancho/3, y:alto/1.65,r:alto/15,c:'yellow',cod:"Facultad de Medicina\nVeterinaria y Zootecnia.\n\nEdificio 481."});
    //Puntos Adicionales
    test.Insert(37,"Camino",[14,17,36],{x:ancho/3.2, y:alto/2.1,r:alto/20,c:'tomato'});
    test.Insert(38,"Camino",[9,39,41],{x:ancho/1.155, y:alto/1.9,r:alto/20,c:'tomato'});
    test.Insert(39,"Camino",[8,38],{x:ancho/1.14, y:alto/1.42,r:alto/20,c:'tomato'});
    test.Insert(40,"Fac. \nArtes",[2],{x:ancho/1.57, y:alto/1.15,r:alto/15,c:'yellow',cod:"Escuela de Artes Plásticas.\n\nEdificio 301."});
    test.Insert(41,"Camino",[8,25,27,38],{x:ancho/1.27, y:alto/1.9,r:alto/20,c:'tomato'});

    test.CalcularDists();
}

function draw() {
    ancho = windowWidth; 
    largo = windowHeight;
    background(bg);
    push();
    stroke("magenta");
    strokeWeight(5);
    fill("tomato");
    rect(10,10,windowWidth*0.22,windowHeight-10); 
    pop();
    test.Print("black",2,false);
    visviaje.html(recorrido.Print());

}
