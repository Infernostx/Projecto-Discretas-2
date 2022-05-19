let test;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('tomato');

    test = new Multiverso(6);
    test.CrearUniversoIndependiente(20,{x: windowWidth/2,y: windowHeight/2,r: 50});
    test.CrearUniversoIndependiente(999,{});
    test.CrearUniversoDependiente([test.independientes[0]],1,{});
    test.CrearUniversoDependiente([test.independientes[0]],2,{});
    test.CrearUniversoDependiente([test.independientes[0]],3,{});
    test.CrearUniversoDependiente([test.independientes[0],test.independientes[1]],4,{c:"purple"});
    test.CrearUniversoDependiente([test.independientes[0],test.independientes[1]],5,{});
    test.CrearUniversoDependiente([test.independientes[0],test.independientes[1]],6,{});
    //No permitido
    //test.CrearUniversoDependiente([test.independientes[0]],7,{});
    test.CrearConexion(test.independientes[0].conexiones[2],test.independientes[0].conexiones[4])
    test.CrearUniversoIndependiente(555,{});
}

function draw() {
    test.Print();
}