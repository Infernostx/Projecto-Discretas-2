//class Pila(Lista):

class Pila extends ListaEnlazada{

    // #Herencia:
    // Constructor()            -Igual
    // PushFront(data,x,y,r)    -Permitido
    // TopBack()                -No permitido
    // Empty()                  -Igual
    // Print()                  -Igual
    // Find()                   -No permitido
    // retN()                   -No permitido
    // Erase()                  -No permitido
    // TopFront()               -Permitido
    // PopFront()               -Permitido
    // PushBack(data,x,y,r)     -No permitido
    // PopBack()                -No permitido

    //En una pila solo podemos ingresar y sacar desde el frente. El ultimo que entra es el primero que sale (LIFO)
    //Metodos permitidos Super trae el mismo codigo de la clase padre
    constructor(){super();}
    PushFront(data,x,y,r){super.PushFront(data,x,y,r);}
    Empty(){super.Empty();}
    Print(){super.Print();}
    TopFront(){super.TopFront();}
    PopFront(){super.PopFront();}

    //Metodos no permitidos.
    TopBack(){throw 'TopBack no permitido en pilas';}    
    Find(){throw 'Find no permitido en pilas';}    
    retN(){throw 'retN no permitido en pilas';}       
    Erase(){throw 'Erase no permitido en pilas';}    
    PushBack(){throw 'PushBack no permitido en pilas';}    
    PopBack(){throw 'PopBack no permitido en pilas';}       

}