//class Pila(Lista):

class Pila extends ListaEnlazada{

    // #Herencia:
    // #__init__
    // #PushFront
    // #Empty
    // #Print
    // #Find
    // #retN
    // #Erase
    // def TopFront(self):                 #Retornar el primer elemento de la lista
    //     if (self.head.data!=None):
    //         return self.head.data
    //     return None
    
    TopFront(){
        if (this.head.data!=null)
        {
            return this.head.data;
        }
    }

    // def PopFront(self):                 #Retornar Y Eliminar el primer elemento de la lista
    // if(self.tail!=self.head): #Si hay mas de 1 objeto
    //     dato=self.head.data                 #Guardar el valor
    //     self.head=self.head.next
    //     self.size-=1
    //     return dato                         #Retornar el dato eliminado
    // else:                                   #Si solo hay un objeto, retornar la cabeza
    //     try:                                #Si el arreglo NO esta vacio:
    //         dato=self.head.data             
    //     except:
    //         return 
    //     self.head=None                      #Eliminar el arreglo
    //     self.tail=None
    //     self.size-=1
    //     return dato
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