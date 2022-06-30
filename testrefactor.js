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

const materias = new hashTable;

function preload() {
    soundFormats('mp3');
    tst = loadImage('media/tst.png');
    bg = loadImage('media/bg1.png');
    bgm  = loadSound('media/Neco-Arc-sound-effect.mp3');
    
}
 function nada (){
    alert("nada");
 }

function FinViaje(){
    alert("Has viajado aproximadamente " + test.DistViaje(recorrido)*3.7 + " metros");
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

function crearElemento (texto, elemento, positionX, positionY) {
    var o = document.createElement(elemento);
    o.type = 'elemento';
    o.innerText = texto;
    o.style.position = "absolute";
    o.style.left = positionX + 'px';
    o.style.top = positionY + 'px';
    //o.classList.add(clase);
    document.body.appendChild(o);
}

function crearSpan ( wide, high, positionX, positionY) {
    var o = document.createElement('div');
    o.type = 'div';
    o.style.position = "absolute";
    o.style.left = positionX + 'px';
    o.style.top = positionY + 'px';
    o.style.width = wide + 'px';
    o.style.height = high + 'px';
    document.body.appendChild(o);
}

function crearBoton (funcion, texto, positionX, positionY, flag){
    
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = texto;
    button.style.position = "absolute";
    button.style.left = positionX + 'px';
    button.style.top = positionY + 'px';
    button.classList.add("botones");
    if (!flag) {
        button.onclick = funcion;
    }
    document.body.appendChild(button);
    return button;



    /*var o=Document.getElementById("principal");
	o.html+='<input type="button" value="'+texto+'" onclick="'+funcion+'" class="botones" style="position: absolute; left: '+positionX+'; top: '+positionY+'">';
    */
}

function setup() {
    ancho = windowWidth;
    alto = windowHeight;
    canvas = createCanvas(ancho, alto);
    canvas.position(0,0);
    background('gray');

    ////////////////////////////////////////////
    //Elementos DOM
    crearSpan(400, 920, ancho*0.005, alto*0.005);
    crearElemento("Pathfinder de", "h2", ancho*0.013,alto*0.01);
    crearElemento("Ingenieria y Ciencias.", "h2", ancho*0.013,alto*0.04);

    //titulo=createElement("h2","Pathfinder de<br>Ingenieria y Ciencias.");
    //titulo.position(ancho*0.013,alto*0.01);


    crearElemento("Santiago Reyes", "p", ancho*0.08, alto*0.1);
    crearElemento("Miguel Suárez", "p", ancho*0.08, alto*0.12);
    crearElemento("Nicolás Machado", "p", ancho*0.08, alto*0.14);
    crearElemento("Andrés Poveda", "p", ancho*0.08, alto*0.16);


    //nombres=createElement("p","Santiago Reyes <br> Miguel Suárez <br> Nicolas Machado <br> Andrés Poveda");
    //nombres.position(ancho*0.08,alto*0.1);

    //Viaje Actual
    crearElemento("Viaje actual", "h3", ancho*0.01, alto*0.22);

    //viaje=createElement("h3","Viaje actual");
    //viaje.position(ancho*0.01,alto*0.22);
    
    
    visviaje=createElement("p","");
    visviaje.position(ancho*0.01,alto*0.25);
    crearBoton(FinViaje, "Finalizar viaje", ancho*0.137,alto*0.35);

    /*
    finviaje = createButton('Finalizar viaje');   REEMPLAZADO POR INCOMPATIBLE CON CSS
    finviaje.position(ancho*0.137,alto*0.35);
    finviaje.mouseClicked(FinViaje);
    */


    crearElemento("Mis clases", "h3", ancho*0.01, alto*0.45);
    //materias = new hashTable();

    let bot = crearBoton(nada, "Añadir clase", ancho*0.137, alto*0.8, true);
    //bot.onclick = materias.set();
/*
    arreglo = materiasgetall();
    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo[index]) {
            crearElemento(arreglo, "p", ancho*0.01, alto*0.5 + (index/20));
        }
    }
*/
    


    viajerr=createElement("p","<i></i>");
    viajerr.position(ancho*0.13, alto*0.25);

    recorrido= new Pila();

    
    test= new Grafo();
    test.Insert(0,"Zona en \nObras",[],{x:ancho/1.395, y:alto/1.2,r:alto/4.2,c:'black',cod:"Espacio para la Facultad de\nArquitectura"});
    //alrededor de la Plaza
    test.Insert(22,"Plaza \nChé",[21,20,23,25],{x:ancho/1.82, y:alto/1.05,r:alto/10,c:'red',cod:"Plaza central de la\nUniversidad Nacional"});
    test.Insert(21,"Camino",[22,17,24,19],{x:ancho/1.7, y:alto/1.15,r:alto/20,c:'tomato'});
    test.Insert(20,"Auditorio",[22,7],{x:ancho/1.65, y:alto/1.05,r:alto/15,c:'gray',cod:"Auditoro León de Greiff.\n\nEdificio 104."});
    test.Insert(25,"Biblioteca \nCentral",[22],{x:ancho/2.03, y:alto/1.05,r:alto/15,c:'yellow',cod:"Biblioteca Central Gabriel\nGarcia Márquez.\n\nEdificio 102."});
    test.Insert(23,"Camino",[22,37],{x:ancho/1.95, y:alto/1.15,r:alto/20,c:'tomato'});
    //Entrada Cra. 30
    test.Insert(7,"Cra. 30",[20,6,8],{x:ancho/1.28, y:alto/1.05,r:alto/10,c:'red',cod:"Entrada por la Avenida\nCarrera 30. Lleva al museo\nde Arte."});
    test.Insert(6,"Fac. \nEconomia",[7],{x:ancho/1.2, y:alto/1.15,r:alto/15,c:'yellow',cod:"Facultad de Ciencias\nEconómicas.\n\nEdificio 310."});
    test.Insert(8,"Camino",[7,13,0,3],{x:ancho/1.25, y:alto/1.42,r:alto/20,c:'tomato'});
    //Entrada Cll. 53
    test.Insert(4,"Cll. 53",[5,11,12,1],{x:ancho/1.3, y:alto/5.5,r:alto/10,c:'red',cod:"Entrada por la Calle 53.\nLleva al colegio IPERM."});
    test.Insert(5,"Patios \nIng.",[4,11,15],{x:ancho/1.3, y:alto/2.8,r:alto/15,c:'yellow',cod:"Postgrados en Materiales y\nProcesos de Manufactura.\n\nEdificio 407."});
    test.Insert(11,"Camino",[4,5,12,15,29],{x:ancho/1.42, y:alto/3.9,r:alto/20,c:'tomato'});
    test.Insert(12,"Observatorio",[4,11],{x:ancho/1.43, y:alto/5.5,r:alto/15,c:'yellow',cod:"Observatorio Atronómico.\n\nEdificio 413."});
    //Entrada Cra. 45
    test.Insert(33,"Cra. 45",[31],{x:ancho/3, y:alto/6,r:alto/10,c:'red',cod:"Entrada por la Carrera 45.\nLleva al departamento de\nZootecnia y la cancha\nacústica."});
    test.Insert(31,"Camino",[33,29,30,34],{x:ancho/2.58, y:alto/3.9,r:alto/20,c:'tomato'});
    //Entrada Cll. 26
    test.Insert(39,"Cll. 26",[37,38],{x:ancho/3.7, y:alto/1.2,r:alto/10,c:'red',cod:"Entrada por la Avenida\nCalle 26.\nLleva a los departamentos\nde Humanidades y diseño\ngráfico."});
    test.Insert(37,"Fac. \nDerecho",[23,26,39],{x:ancho/2.27, y:alto/1.2,r:alto/15,c:'yellow',cod:"Facultad de Derecho,\nCiencias Políticas y Sociales.\n\nEdificio 201."});
    test.Insert(38,"Camino",[36,32,39,40],{x:ancho/3.5, y:alto/1.37,r:alto/20,c:'tomato'});

    //Alrededor del triangulo
    test.Insert(18,"Fac. \nQuimica",[16,9,24,14,28,30],{x:ancho/1.72, y:alto/2.2,r:alto/15,c:'yellow',cod:"Departamento de Química.\n\nEdificio 451."});
    test.Insert(15,"Lab. \nQuímica",[16,5,11,9,14],{x:ancho/1.49, y:alto/2.8,r:alto/15,c:'yellow',cod:"Laboratorio de Ingenieria\nQuímica.\n\nEdificio 412."});
    test.Insert(16,"Aulas",[18,15,14],{x:ancho/1.6, y:alto/2.8,r:alto/15,c:'yellow',cod:"Aulas de Ingenieria.\n\nEdificio 453."});
    test.Insert(9,"I.E.I.",[18,15,14],{x:ancho/1.4, y:alto/2.2,r:alto/15,c:'yellow',cod:"Instituto de Extensión e\nInvestigación.\n\nEdificio 406."});
    test.Insert(10,"Fac. \nMatemáticas",[14,13],{x:ancho/1.4, y:alto/1.75,r:alto/15,c:'yellow',cod:"Departamentos de\nMatemáticas,Física\ny Estadística.\n\nEdificio 404."});
    test.Insert(17,"Fac. \nIngeniería",[21,24,14,13],{x:ancho/1.6, y:alto/1.6,r:alto/15,c:'yellow',cod:"Facultad de Ingeniería.\n\nEdificio 401."});
    test.Insert(24,"Fac. \nFarmacia",[21,18,17,14],{x:ancho/1.75, y:alto/1.75,r:alto/15,c:'yellow',cod:"Departamentos de Farmacia.\n\nEdificio 450."});
    test.Insert(14,"Chazas \nIng.",[18,15,16,9,10,17,24,13,3],{x:ancho/1.52, y:alto/1.75,r:alto/20,c:'tomato'});
    //Entrando por la 30
    test.Insert(13,"Parqueadero",[8,10,17,14],{x:ancho/1.4, y:alto/1.42,r:alto/20,c:'tomato'});
    test.Insert(2,"Lab.\nHidráulicos",[3],{x:ancho/1.2, y:alto/1.75,r:alto/15,c:'yellow',cod:"Laboratorio de Ensayos\nHidráulicos\n\nEdificio 408."});
    //Alrededor del CyT
    test.Insert(28,"CyT",[18,29,30],{x:ancho/2, y:alto/3,r:alto/15,c:'yellow',cod:"Ciencia y Tecnologia.\n\nEdificio 454."});
    test.Insert(29,"Camino",[11,28,31],{x:ancho/2, y:alto/3.9,r:alto/20,c:'tomato'});
    test.Insert(30,"Camino",[18,28,31,35],{x:ancho/2.18, y:alto/2.5,r:alto/20,c:'tomato'});
    //Alrededor de Medicina
    test.Insert(27,"Fac. \nMedicina",[32,35],{x:ancho/2.4, y:alto/1.7,r:alto/15,c:'yellow',cod:"Facultad de Medicina.\n\nEdificio 471."});
    test.Insert(32,"Camino",[26,27,35,38],{x:ancho/2.6, y:alto/1.37,r:alto/20,c:'tomato'});
    test.Insert(26,"Camino",[32,37],{x:ancho/2.16, y:alto/1.37,r:alto/20,c:'tomato'});
    test.Insert(34,"Fac. \nCiencias",[31,40],{x:ancho/2.7, y:alto/2.7,r:alto/15,c:'yellow',cod:"Facultad de Ciencias.\n\nEdificio 476."});
    test.Insert(35,"Dir. \nInnovación",[30,27,32],{x:ancho/2.7, y:alto/1.9,r:alto/15,c:'yellow',cod:"Dirección Nacional de\nInnovación Académica.\n\nEdificio 477."});
    test.Insert(36,"Fac. \nVeterinaria",[38,40],{x:ancho/3, y:alto/1.65,r:alto/15,c:'yellow',cod:"Facultad de Medicina\nVeterinaria y Zootecnia.\n\nEdificio 481."});
    //Puntos Adicionales
    test.Insert(40,"Camino",[34,38,36],{x:ancho/3.2, y:alto/2.1,r:alto/20,c:'tomato'});
    test.Insert(1,"Camino",[4,0,3],{x:ancho/1.155, y:alto/1.9,r:alto/20,c:'tomato'});
    test.Insert(0,"Camino",[8,1],{x:ancho/1.14, y:alto/1.42,r:alto/20,c:'tomato'});
    test.Insert(19,"Fac. \nArtes",[21],{x:ancho/1.57, y:alto/1.15,r:alto/15,c:'yellow',cod:"Escuela de Artes Plásticas.\n\nEdificio 301."});
    test.Insert(3,"Camino",[8,14,2,1],{x:ancho/1.27, y:alto/1.9,r:alto/20,c:'tomato'});

    test.CalcularDists();
}

function draw() {
    ancho = windowWidth;
    largo = windowHeight;
    background(bg);
    push();
    noFill();
    noStroke();
    rect(10,10,windowWidth*0.22,windowHeight-10);
    pop();
    test.Print("black",2,false);
    visviaje.html(recorrido.Print());

}
