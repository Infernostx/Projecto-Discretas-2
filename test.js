let test;
let img;
let img2;
let bg;
let exportlvl;

function preload() {
    soundFormats('mp3');
    img = loadImage('media/ssbu.png');
    img2 = loadImage('media/drawImage.png');
    bg = loadImage('media/bg.jpg');
    bgm = song = loadSound('media/Neco-Arc-sound-effect.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('tomato');
    exportlvl = createButton('Fin viaje');
    exportlvl.position(100, 300);
    exportlvl.mouseClicked(e);
    timingtxt = createElement('p', " ");
    timingtxt.position(0, windowHeight*0.5);

    test = new Multiverso(6);
    test.CrearUniversoIndependiente("Super \n Smash Bros", { x: windowWidth / 2, y: windowHeight / 2, r: 100, c: "blue" });
    test.CrearUniversoIndependiente("Playstation \n All Stars", { x: windowWidth / 1.3, y: windowHeight / 3.5, r: 100, c: "blue" });
    //main smash
    test.CrearUniversoDependiente([test.independientes[0], test.independientes[1]], "Metal Gear Solid", { x: windowWidth / 1.6, y: windowHeight / 2.2, r: 70, c: "yellow" });
    test.CrearUniversoDependiente([test.independientes[0]], "Persona 5", { x: windowWidth / 1.8, y: windowHeight / 3.3, r: 70, c: "yellow" });
    test.CrearUniversoDependiente([test.independientes[0]], "Sonic\nthe Hedgehog", { x: windowWidth / 2.4, y: windowHeight / 3, r: 70, c: "yellow" });
    test.CrearUniversoDependiente([test.independientes[0]], "Super Mario", { x: windowWidth / 2.7, y: windowHeight / 1.9, r: 70, c: "yellow" });
    test.CrearUniversoDependiente([test.independientes[0]], "Fire Emblem", { x: windowWidth / 2.2, y: windowHeight / 1.4, r: 70, c: "yellow" });
    test.CrearUniversoDependiente([test.independientes[0]], "The Legend\nof Zelda", { x: windowWidth / 1.7, y: windowHeight / 1.5, r: 70, c: "yellow" });
    //Soul Calibur
    test.CrearUniversoDependiente([test.independientes[0].conexiones[5]], "Soul\nCalibur", { x: windowWidth / 1.5, y: windowHeight / 1.3, r: 70, c: "green" });
    //DR - IDV
    test.CrearUniversoDependiente([test.independientes[0].conexiones[1]], "Identity V", { x: windowWidth / 1.6, y: windowHeight / 5, r: 70, c: "green" });
    test.CrearUniversoDependiente([test.independientes[0].conexiones[1].conexiones[0]], "Danganronpa", { x: windowWidth / 1.8, y: windowHeight / 13, r: 70, c: "green" })
    //test.CrearConexion(test.independientes[0].conexiones[1],test.independientes[2].conexiones[0])

    test.CrearUniversoDependiente([test.independientes[0].conexiones[2]], "TF2", { x: windowWidth / 3, y: windowHeight / 5.5, r: 70, c: "green" });
    test.CrearUniversoDependiente([test.independientes[0].conexiones[4]], "Monster\nHunter", { x: windowWidth / 2.5, y: windowHeight / 1.1, r: 70, c: "green" });

    test.CrearUniversoDependiente([test.independientes[1]], "BioShock", { x: windowWidth / 1.2, y: windowHeight / 2, r: 70, c: "yellow" });
    test.CrearUniversoDependiente([test.independientes[1].conexiones[1]], "Borderlands", { x: windowWidth / 1.3, y: windowHeight / 1.5, r: 70, c: "green" });
    //test for an input
    //<input type='text' id='id1' />
    //document.getElementById('id1').value='text to be displayed' ; 
    //test.CrearUniversoDependiente([test.independientes[1]],555,{c:"green"});
}

function draw() {
    clear();
    background(bg); 
    test.VerHover_Multiverso();
    test.Print("black",1,false);
    text(test.viaje.Print(), 50, 20);
}

function e(){
    test.VerKeypressed_Multiverso(test, 27);
}
function mousePressed() {
    bgm.play();
    test.VerClicked_Multiverso(test);
    //image(img2,0, 0);
}
function keyPressed(){
    test.VerKeypressed_Multiverso(test,keyCode);
}
