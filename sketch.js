let test;

function setup() {
  createCanvas(710, 400);
  test=new ListaEnlazada();
  test.PushFront(3);
  test.PushFront(3);
  test.Erase(0);
  test.Print();
  test.PushFront(69);
  test.Print();
}

function draw() {
  background(50, 89, 100);
}