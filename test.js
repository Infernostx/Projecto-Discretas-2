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
    test.CrearUniversoIndependiente("999",{});
    test.CrearUniversoDependiente([test.independientes[0]],"Metroid",1,{});
    test.CrearUniversoDependiente([test.independientes[0]],"The Legend of Zelda",1,{});
    test.CrearUniversoDependiente([test.independientes[0]],"Fire Emblem",1,{});
    test.CrearUniversoDependiente([test.independientes[0]],"Pokemon",1,{});
    test.CrearUniversoDependiente([test.independientes[0]],"Super Mario Bros.",1,{});
    test.CrearUniversoDependiente([test.independientes[0]],"Mii Costumes",1,{});
    //No permitido
    //test.CrearUniversoDependiente([test.independientes[0]],7,{});
    test.CrearConexion(test.independientes[0].conexiones[2],test.independientes[0].conexiones[4])
    test.CrearUniversoIndependiente(555,{});
}

function draw() {
    test.Print();
}