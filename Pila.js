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
    PushBack(data,x,y,r)
    {
        this.size+=1;
        let nodonuevo= new Nodo(data,x,y,r);

        if(this.head==null)
        {
            this.head=nodonuevo;
            return;
        }
        if(this.tail!=null)
        {
            this.tail.next=nodonuevo;
            this.tail=nodonuevo;
        }

        else
        {
            this.head.next=nodonuevo;
            this.tail=nodonuevo;
        }
    }
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
            return txt;
        }

        print("El arreglo esta vacio");
        return "Vacio";
    }
    TopFront(){super.TopFront();}
    PopFront(){super.PopFront();}

    //Metodos no permitidos.
    TopBack(){throw 'TopBack no permitido en pilas';}    
    Find(){throw 'Find no permitido en pilas';}    
    retN(){throw 'retN no permitido en pilas';}       
    Erase(){throw 'Erase no permitido en pilas';}    
    PushFront(){throw 'Pushfront no permitido en pilas';}
    PopBack(){throw 'PopBack no permitido en pilas';}       

}