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

function preload() {
    soundFormats('mp3');
    tst = loadImage('media/tst.png');
    bg = loadImage('media/bg1.png');
    bgm  = loadSound('media/Neco-Arc-sound-effect.mp3');
    
}

function setup() {
    ancho=windowWidth;
    alto=windowHeight;
    canvas = createCanvas(ancho, alto);
    canvas.position(0,0);
    background('tomato');

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
    finviaje.mouseClicked(SimularEsc);
    viajerr=createElement("p","<i></i>");
    viajerr.position(ancho*0.13, alto*0.25);

    //Crear Universo
    crear=createElement("h4","Crear nuevo punto de referencia:");
    crear.position(ancho*0.01,alto*0.37);
    let inp = createInput('');
    inp.position(ancho*0.08,alto*0.44);
    inp.size(100);
    inp.input(UniNuevo);

    crearr=createElement("p","Esta unido a:");
    crearr.position(ancho*0.01,alto*0.45);
    sel = createSelect();
    sel.position(ancho*0.1,alto*0.51);
    sel.option('SSB');
    sel.option('PAS');
    sel.changed(UnivMadre);

    CrearUni = createButton('Crear Punto');
    CrearUni.position(ancho*0.137,alto*0.55);
    CrearUni.mouseClicked(UniversoCreado);
    
    //Borrar Universo
    crear=createElement("h4","Eliminar punto de referencia:");
    crear.position(ancho*0.01,alto*0.58);

    sel = createSelect();
    sel.position(ancho*0.08,alto*0.65);
    sel.option('--');
    sel.option('Metal Gear');
    sel.option('Persona 5');
    sel.option('Sonic');
    sel.option('Mario');
    sel.option('Fire Emblem');
    sel.option('TLOZ');
    sel.changed(UniBorrar);
    
    DesUni = createButton('Borrar Punto');
    DesUni.position(ancho*0.137,alto*0.70);
    DesUni.mouseClicked(UniversoEliminado);

    //Incializacion del mapa
    test = new Multiverso(6);
    test.CrearUniversoIndependiente("Plaza\nChe", { x: ancho / 1.83, y: alto / 1.066, r: 80, c: 'blue'});
    test.CrearUniversoIndependiente("Entrada\nde la 30", { x: ancho / 1.28, y: alto / 1.066, r: 80, c: "blue"});
    test.CrearUniversoIndependiente("Entrada\nde la 53", { x: ancho / 1.25, y: alto / 12, r: 80, c: "blue"});
    test.CrearUniversoIndependiente("Entrada\nde la 45", { x: ancho / 3.5, y: alto / 12, r: 80, c: "blue"});
    test.CrearUniversoIndependiente("Por Fac.\nde\nVeterinaria", { x: ancho / 3.5, y: alto / 1.39, r: 80, c: "blue"});
    test.CrearUniversoIndependiente("Cerrado \npor obras!", { x: ancho / 1.4, y: alto / 1.2, r: 120, c: "black"});
    //puntos de referencia
    test.CrearUniversoDependiente([test.independientes[0]], "Camino de\nconcreto", { x: ancho / 1.69, y: alto / 1.2, r: 50, c: "red"});
    test.CrearUniversoDependiente([test.independientes[0].conexiones[0]], "Restaurante", { x: ancho / 1.69, y: alto / 1.6, r: 40, c: "red"});
    test.CrearUniversoDependiente([test.independientes[0].conexiones[0]], "Chazas\nIng.", { x: ancho / 1.50, y: alto / 1.6, r: 50, c: "red"});
    test.CrearUniversoDependiente([test.independientes[0].conexiones[0].conexiones[1]], "Diagonal", { x: ancho / 1.58, y: alto / 2.1, r: 50, c: "red"});
    test.CrearUniversoDependiente([test.independientes[0].conexiones[0].conexiones[0]], "Fac. de\nFarmaceutica.", { x: ancho / 1.8, y: alto / 1.9, r: 60, c: "green"});
    test.CrearUniversoDependiente([test.independientes[0].conexiones[0]], "Fac. de\nArtes", { x: ancho / 1.56, y: alto / 1.2, r: 60, c: "green"});
    test.CrearUniversoDependiente([test.independientes[0].conexiones[0].conexiones[0],test.independientes[0].conexiones[0].conexiones[1]], "Fac. de\nIngenieria", { x: ancho / 1.59, y: alto / 1.6, r: 60, c: "green"});
    test.CrearUniversoDependiente([test.independientes[0]], "Auditorio\n(Cerrado)", { x: ancho / 1.65, y: alto / 1.06, r: 60, c: "green"});
    test.CrearUniversoDependiente([test.independientes[0]], "Biblioteca", { x: ancho / 2.05, y: alto / 1.06, r: 60, c: "green"});
    test.CrearConexion(test.independientes[0].conexiones[0].conexiones[1].conexiones[0],test.independientes[0].conexiones[0].conexiones[0].conexiones[0])


    test.CrearUniversoDependiente([test.independientes[1]], "Fac. de\nEconomia", { x: ancho / 1.2, y: alto / 1.2, r: 60, c: "green"});
    test.CrearUniversoDependiente([test.independientes[1]], "Cruce", { x: ancho / 1.25, y: alto / 1.42, r: 50, c: "red"});
    test.CrearUniversoDependiente([test.independientes[1].conexiones[1]], "Bienestar\nIngenieria", { x: ancho / 1.2, y: alto / 1.64, r: 60, c: "green"});
    test.CrearUniversoDependiente([test.independientes[1].conexiones[1]], "Parqueadero", { x: ancho / 1.39, y: alto / 1.42, r: 50, c: "red"});
    test.CrearUniversoDependiente([test.independientes[1].conexiones[1].conexiones[1]], "Fac. de\nMatemáticas", { x: ancho / 1.39, y: alto / 1.75, r: 60, c: "green"});
    test.CrearConexion(test.independientes[0].conexiones[0].conexiones[1],test.independientes[1].conexiones[1].conexiones[1].conexiones[0])
    test.CrearConexion(test.independientes[1].conexiones[1].conexiones[1],test.independientes[0].conexiones[0].conexiones[1])
    
    test.CrearUniversoDependiente([test.independientes[2]], "Cruce", { x: ancho / 1.42, y: alto / 3.9, r: 50, c: "red"});
    test.CrearUniversoDependiente([test.independientes[2].conexiones[0]], "Cafeteria\nFísica", { x: ancho / 1.42, y: alto / 2.6, r: 50, c: "red"});
    test.CrearUniversoDependiente([test.independientes[2].conexiones[0].conexiones[0]], "Patios de\nIngenieria", { x: ancho / 1.27, y: alto / 2.6, r: 60, c: "green"});
    test.CrearUniversoDependiente([test.independientes[2].conexiones[0].conexiones[0]], "Lab. de\nQuimica", { x: ancho / 1.5, y: alto / 3.1, r: 60, c: "green"});
    test.CrearUniversoDependiente([test.independientes[2].conexiones[0].conexiones[0]], "Yu Takeuchi", { x: ancho / 1.44, y: alto / 2.1, r: 60, c: "green"});
    test.CrearUniversoDependiente([test.independientes[2]], "Observatorio", { x: ancho / 1.45, y: alto / 6, r: 60, c: "green"});
    test.CrearUniversoDependiente([test.independientes[2]], "", { x: ancho / 1.32, y: alto / 6, r: 20, c: "white"});
    test.CrearUniversoDependiente([test.independientes[2].conexiones[2]], "", { x: ancho / 1.18, y: alto / 2.5, r: 20, c: "white"});
    test.CrearUniversoDependiente([test.independientes[2].conexiones[2].conexiones[0]], "", { x: ancho / 1.14, y: alto / 1.42, r: 20, c: "white"});
    test.CrearConexion(test.independientes[2].conexiones[0].conexiones[0].conexiones[2],test.independientes[1].conexiones[1].conexiones[1].conexiones[0])
    test.CrearConexion(test.independientes[0].conexiones[0].conexiones[1],test.independientes[2].conexiones[0].conexiones[0].conexiones[1])
    test.CrearConexion(test.independientes[2].conexiones[2].conexiones[0].conexiones[0],test.independientes[1].conexiones[1])

    test.CrearUniversoDependiente([test.independientes[3]], "Cruce", { x: ancho / 2.58, y: alto / 3.9, r: 50, c: "red"});
    test.CrearUniversoDependiente([test.independientes[3].conexiones[0]], "Cruce", { x: ancho / 2.15, y: alto / 2.6, r: 50, c: "red"});
    test.CrearUniversoDependiente([test.independientes[3].conexiones[0].conexiones[0]], "CyT", { x: ancho / 1.95, y: alto / 3.1, r: 60, c: "green"});
    test.CrearUniversoDependiente([test.independientes[3].conexiones[0].conexiones[0]], "Dept. de\nQuimica", { x: ancho / 1.95, y: alto / 2.1, r: 60, c: "green"});
    test.CrearUniversoDependiente([test.independientes[3].conexiones[0].conexiones[0]], "Chazas\nQuimica", { x: ancho / 1.65, y: alto / 2.4, r: 50, c: "red"});
    test.CrearUniversoDependiente([test.independientes[3].conexiones[0].conexiones[0].conexiones[2]], "Aulas de\nIngenieria", { x: ancho / 1.65, y: alto / 3.1, r: 60, c: "green"});
    test.CrearConexion(test.independientes[3].conexiones[0],test.independientes[2].conexiones[0])
    test.CrearConexion(test.independientes[2].conexiones[0].conexiones[0],test.independientes[3].conexiones[0].conexiones[0])
    test.CrearConexion(test.independientes[0].conexiones[0].conexiones[1].conexiones[0],test.independientes[3].conexiones[0].conexiones[0].conexiones[1])
    test.CrearConexion(test.independientes[3].conexiones[0].conexiones[0].conexiones[1],test.independientes[3].conexiones[0].conexiones[0].conexiones[2])
    test.CrearConexion(test.independientes[3].conexiones[0].conexiones[0].conexiones[2],test.independientes[0].conexiones[0].conexiones[0])

    test.CrearUniversoDependiente([test.independientes[4]], "Cruce", { x: ancho / 2.15, y: alto / 1.36, r: 50, c: "red"});
    test.CrearUniversoDependiente([test.independientes[4].conexiones[0]], "Fac. de\nMedicina", { x: ancho / 2.3, y: alto / 1.55, r: 60, c: "green"});
    test.CrearUniversoDependiente([test.independientes[4].conexiones[0]], "Fac. de\nDerecho", { x: ancho / 2.3, y: alto / 1.2, r: 60, c: "green"});
    test.CrearConexion(test.independientes[4].conexiones[0].conexiones[1],test.independientes[0].conexiones[2])
    test.CrearConexion(test.independientes[0],test.independientes[4].conexiones[0])
    test.CrearConexion(test.independientes[3].conexiones[0].conexiones[0],test.independientes[4].conexiones[0].conexiones[0])
    
    
    

    //test.BorrarUniverso(test.independientes[0],5);
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
    test.VerHover_Multiverso();
    test.Print("black",1,false);
    visviaje.html(test.viaje.Print());
    
}

//Crear Nuevo Universo
function UniNuevo() {
    UniNombre = this.value();
  }
function UnivMadre() {
    let item = sel.value();
    num = 1;
    if (item=="SSB") {num=0}
    else {num=1};
}
function UniversoCreado(){
    test.CrearUniversoDependiente([test.independientes[num]], UniNombre, {c: "black"});
}

//Borrar Universo
function UniBorrar(){
    let item = sel.value();
    Wanda = -1;
    if (item=="Metal Gear") {Wanda = 0}
    else if (item =="Persona 5") {Wanda = 1}
    else if (item =="Sonic") {Wanda = 2}
    else if (item =="Mario") {Wanda = 3}
    else if (item =="Fire Emblem") {Wanda = 4}
    else if (item =="TLOZ") {Wanda = 5};
}
function UniversoEliminado(){
    test.BorrarUniverso(test.independientes[0], Wanda);
}

function SimularEsc(){
    test.Keypressed_Multiverso(test, 27);
    bgm.play();
}

function mousePressed() {
    test.VerClicked_Multiverso(test);
    //image(img2,0, 0);
}
function keyPressed(){
    test.Keypressed_Multiverso(test,keyCode);
}
