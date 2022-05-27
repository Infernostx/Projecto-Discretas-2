let test;
let img;
let img2;
let exportlvl;

let ancho,alto;

//Elementos DOM
let canvas;
let titulo;
let nombres;
let viaje;

function preload() {
    img = loadImage('media/ssbu.png');
    img2 = loadImage('media/drawImage.png');
    bg = loadImage()
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('tomato');
    exportlvl = createButton('Fin viaje');
    exportlvl.position(100, 300);
    exportlvl.mouseClicked(e);
    
    //Incializacion del multiverso 
    test = new Multiverso(6);
    test.CrearUniversoIndependiente("Super \n Smash Bros", { x: ancho / 2, y: alto / 2, r: 100, c: "blue" });
    test.CrearUniversoIndependiente("Playstation \n All Stars", { x: ancho / 1.3, y: alto / 3.5, r: 100, c: "blue" });
    //main smash
    test.CrearUniversoDependiente([test.independientes[0], test.independientes[1]], "Metal Gear Solid", { x: ancho / 1.6, y: alto / 2.2, r: 70, c: "yellow" });
    test.CrearUniversoDependiente([test.independientes[0]], "Persona 5", { x: ancho / 1.8, y: alto / 3.3, r: 70, c: "yellow" });
    test.CrearUniversoDependiente([test.independientes[0]], "Sonic\nthe Hedgehog", { x: ancho / 2.4, y: alto / 3, r: 70, c: "yellow" });
    test.CrearUniversoDependiente([test.independientes[0]], "Super Mario", { x: ancho / 2.7, y: alto / 1.9, r: 70, c: "yellow" });
    test.CrearUniversoDependiente([test.independientes[0]], "Fire Emblem", { x: ancho / 2.2, y: alto / 1.4, r: 70, c: "yellow" });
    test.CrearUniversoDependiente([test.independientes[0]], "The Legend\nof Zelda", { x: ancho / 1.7, y: alto / 1.5, r: 70, c: "yellow" });
    //Soul Calibur
    test.CrearUniversoDependiente([test.independientes[0].conexiones[5]], "Soul\nCalibur", { x: ancho / 1.5, y: alto / 1.3, r: 70, c: "green" });
    //DR - IDV
    test.CrearUniversoDependiente([test.independientes[0].conexiones[1]], "Identity V", { x: ancho / 1.6, y: alto / 5, r: 70, c: "green" });
    test.CrearUniversoDependiente([test.independientes[0].conexiones[1].conexiones[0]], "Danganronpa", { x: ancho / 1.8, y: alto / 13, r: 70, c: "green" })
    //test.CrearConexion(test.independientes[0].conexiones[1],test.independientes[2].conexiones[0])

    test.CrearUniversoDependiente([test.independientes[0].conexiones[2]], "TF2", { x: ancho / 3, y: alto / 5.5, r: 70, c: "green" });
    test.CrearUniversoDependiente([test.independientes[0].conexiones[4]], "Monster\nHunter", { x: ancho / 2.5, y: alto / 1.1, r: 70, c: "green" });

    test.CrearUniversoDependiente([test.independientes[1]], "BioShock", { x: ancho / 1.2, y: alto / 2, r: 70, c: "yellow" });
    test.CrearUniversoDependiente([test.independientes[1].conexiones[1]], "Borderlands", { x: ancho / 1.3, y: alto / 1.5, r: 70, c: "green" });
    //test for an input
    //<input type='text' id='id1' />
    //document.getElementById('id1').value='text to be displayed' ; 
    //test.CrearUniversoDependiente([test.independientes[1]],555,{c:"green"});

}

function draw() {
    background('tomato');
    ancho = windowWidth; 
    largo = windowHeight;
    test.VerHover_Multiverso();
    test.Print("black",1,false);
}

function e(){
    test.VerKeypressed_Multiverso(test, 27);
}
function mousePressed() {
    test.VerClicked_Multiverso(test);
    
    //image(img2,0, 0);
}
function keyPressed(){
    test.VerKeypressed_Multiverso(test,keyCode);
}
