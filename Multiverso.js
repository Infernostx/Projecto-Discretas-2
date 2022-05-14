
class Pila extends ListaEnlazada{

    // #Herencia:
    // #__init__
    // #PushFront
    // #Empty
    // #Print
    // #Find
    // #retN
    // #Erase

    TopFront(){
        if (this.head.data!=null)
        {
            return this.head.data;
        }
    }

    PopFront(){
        if (this.tail!=this.head)
        {
            dato = this.head.data;
            this.head = this.head.next
            this.size -= 1
            return dato
        }
        else
        {
            if(self.size>0)
            {
                this.head=null;
                this.tail=null;
                self.size-=1;
                return dato;
            }
            return;
        }
    }
}