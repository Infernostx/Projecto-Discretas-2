let test;
function setup() {
    createCanvas(windowWidth, windowHeight);
    background('tomato');
    // test=new ListaEnlazada();
    // test.PushFront(3,100,200,30);
    // test.PushFront(3,150,300,100);
    // test.PushFront(69,700,536,50);
    // test.PushBack(15,900,200,70);
    test = new Multiverso(6);
    test.CrearUniversoIndependiente(20,windowWidth/2,windowHeight/2,50);
    test.CrearUniversoIndependiente(999,random(70,windowWidth-70),random(70,windowHeight-70),random(30,70));
    test.CrearUniversoDependiente([test.independientes[0]],1,random(70,windowWidth-70),random(70,windowHeight-70),random(30,70));
    test.CrearUniversoDependiente([test.independientes[0]],2,random(70,windowWidth-70),random(70,windowHeight-70),random(30,70));
    test.CrearUniversoDependiente([test.independientes[0]],3,random(70,windowWidth-70),random(70,windowHeight-70),random(30,70));
    test.CrearUniversoDependiente([test.independientes[0],test.independientes[1]],4,random(70,windowWidth-70),random(70,windowHeight-70),random(30,70));
    test.CrearUniversoDependiente([test.independientes[0],test.independientes[1]],5,random(70,windowWidth-70),random(70,windowHeight-70),random(30,70));
    test.CrearUniversoDependiente([test.independientes[0],test.independientes[1]],6,random(70,windowWidth-70),random(70,windowHeight-70),random(30,70));
    //No permitido
    //test.CrearUniversoDependiente([test.independientes[0]],7,random(windowWidth),random(windowHeight),random(30,70));
    test.CrearConexion(test.independientes[0].conexiones[2],test.independientes[0].conexiones[4])
    test.CrearUniversoIndependiente(555,random(70,windowWidth-70),random(70,windowHeight-70),random(30,70));
}

function draw() {
    test.Print();
} 