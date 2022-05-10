let test;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('tomato');
    test=new ListaEnlazada();
    test.PushFront(3,100,200,30);
    test.PushFront(3,150,300,100);
    test.PushFront(69,700,536,50);
    test.PushBack(15,900,200,70);
}

function draw() {
    test.Print();
} 