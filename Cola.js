//class Cola(Lista):

class Cola extends ListaEnlazada{

    // #Herencia:
    // Constructor()            -Igual
    // PushFront(data,x,y,r)    -Permitido
    // TopBack()                -Permitido
    // Empty()                  -Igual
    // Print()                  -Igual
    // Find()                   -No permitido
    // retN()                   -No permitido
    // Erase()                  -No permitido
    // TopFront()               -No permitido
    // PopFront()               -No permitido
    // PushBack(data,x,y,r)     -No permitido
    // PopBack()                -Permitido

    //En una pila solo podemos ingresar y sacar desde el frente. El ultimo que entra es el primero que sale (LIFO)
    //Metodos permitidos Super trae el mismo codigo de la clase padre
    constructor(){super();}
    PushFront(data,x,y,r){super.PushFront(data,x,y,r);}
    Empty(){super.Empty();}
    Print()
    {
        if(this.size!=0)
        {
            let txt="";
            let act=this.head;
            while (act.next!=null)
            {
                print(act.data.data+' -> ');
                txt+=act.data.data+"<br>";
                act=act.next;
            }
            txt+=act.data.data;
            print(act.data.data+'-> null \n');
            return txt;
        }

        print("El arreglo esta vacio");
        return "Vacio";
    }
    TopBack(){super.TopBack();}
    PopBack(){super.PopBack();}

    //Metodos no permitidos.
    Find(){throw 'Find no permitido en colas';}    
    retN(){throw 'retN no permitido en colas';}    
    Erase(){throw 'Erase no permitido en colas';}       
    TopFront(){throw 'TopFront no permitido en colas';}    
    PopFront(){throw 'PopFront no permitido en colas';}    
    PushBack(){throw 'PushBack no permitido en colas';}       

}