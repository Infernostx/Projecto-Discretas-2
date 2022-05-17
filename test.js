let test;
function setup() {
    createCanvas(windowWidth, windowHeight);
    background('tomato');
    // test=new ListaEnlazada();
    // test.PushFront(3,100,200,30);
    // test.PushFront(3,150,300,100);
    // test.PushFront(69,700,536,50);
    // test.PushBack(15,900,200,70);
    test = new Multiverso();
    test.CrearUniversoIndependiente("Super Smash Bros",windowWidth/2,windowHeight/2,120);
    test.CrearUniversoIndependiente(" ",windowWidth/3,windowHeight/3,50);
    test.CrearUniversoDependiente([test.independientes[0]],"Metroid",random(70,windowWidth-70),random(70,windowHeight-70),60);
    test.CrearUniversoDependiente([test.independientes[0]],"The Legend of Zelda",random(70,windowWidth-70),random(70,windowHeight-70),150);
    test.CrearUniversoDependiente([test.independientes[1]],"Fire Emblem",random(70,windowWidth-70),random(70,windowHeight-70),80);
    test.CrearUniversoDependiente([test.independientes[0]],"Pokemon",random(70,windowWidth-70),random(70,windowHeight-70),70);
    test.CrearUniversoDependiente([test.independientes[0]],"Super Mario Bros.",random(70,windowWidth-70),random(70,windowHeight-70),110);
    test.CrearUniversoDependiente([test.independientes[0]],"Mii Costumes",random(70,windowWidth-70),random(70,windowHeight-70),random(30,70));
    //No permitido
    //test.CrearUniversoDependiente([test.independientes[0]],7,random(windowWidth),random(windowHeight),random(30,70));
}

function draw() {
    test.Print();
} 