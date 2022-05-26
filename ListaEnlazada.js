
// class ListaEnlazada():

class ListaEnlazada
{

//     def __init__(self):     #Inicializar la lista. (vacia)
//         self.head=None       #Head es el inicio del arreglo
//         self.tail=None       #Tail es el fin del arreglo
//         self.size=0

    constructor()
    {
        this.head=null;
        this.tail=null;
        this.size=0;
    }

//     def PushFront(self,data):           #Insertar un dato al inicio de la lista
//         self.size+=1
//         nodonuevo=Nodo(data)       
//         if(self.head==None):            #Si el arreglo esta vacio, colocarle un dato.
//             self.head=nodonuevo
//             return     
//         nodonuevo.next=self.head        #Como el nodo nuevo es el inicial, apuntara a la
//                                         #actual cabeza
//         self.head=nodonuevo             #La cabeza se reemplaza por el nodo nuevo
//         self.TopBack()                  #Definir la cola nueva
    PushFront(data,x,y,r)
    {
        this.size+=1;
        let nodonuevo = new Nodo(data,x,y,r);
        if(this.head==null)
        {
            this.head=nodonuevo;
            return;
        }
        nodonuevo.next=this.head;
        this.head=nodonuevo;
        this.TopBack();
    }

// def TopBack(self):                  #Retornar el ultimo elemento de la lista
//     act=self.head                   #Iniciar en la cabeza del arreglo   
//     while act.next!=None:           #Mientras que no estemos en la cola del arreglo:
//         act=act.next    
//     self.tail=act                            #Avanzamos al nodo siguiente
//     return act.data
    TopBack()
    {
        let act=this.head;
        while (act.next!=null)
        {
            act=act.next;
        }
        this.tail=act;
        return act.data;
    }

//     def Empty(self):                    #La lista esta vacia? (V/F)
//         if(self.size==0):
//             return True
//         return False
    Empty()
    {
        if(this.size==0)
        {
            return true;
        }
        return false;
    }

//     def Print(self):                    #Imprimir el arreglo enlazado
//         if(self.head!=None):                #Si el arreglo tiene al menos una posicion
//             act=self.head                   #Iniciar en la cabeza del arreglo
//             while act.next!=None:           #Mientras que no estemos en la cola del arreglo:
//                 print(act.data,end=' -> ')  #Imprimir el dato del nodo actual, 
//                                             #y el del nodo siguiente.
//                 act=act.next                                #Avanzamos al nodo siguiente
//             print(act.data," -> None",sep='')           #Imprimir la cola del arreglo.
//         else:
//             print("El arreglo esta vacio")
//             return None
    Print()
    {
        if(this.head!=null)
        {
            let act=this.head;
            while (act.next!=null)
            {
                print(act.data.data+' -> ');
                act=act.next;
            }
            print(act.data.data+'-> null \n');
        }
        else
        {
            print("El arreglo esta vacio");
            return;
        }
    }

//     def Find(self,data):                #El valor esta en la lista ? (V/F)
//         act=self.head                   #Iniciar en la cabeza del arreglo   
//         while act.next!=None:           #Mientras que no estemos en la cola del arreglo:
//             if(act.data==data):
//                 return True
//             act=act.next    
//         if(act.data==data):
//                 return True
//         return False
    Find(data)
    {
        let act=this.head;
        while (act.next!=null)
        {
            if(act.data==data)
            {
                return true;
            }
            act=act.next;
        }
        if(act.data==data)
        {
            return true;
        }
        return false;
    }

//     def retN(self,n):               #Retorna el Nodo n-esimo de la lista
//         if (n==0):
//             return self.head
//         elif(n==self.size-1):
//             return self.tail
//         elif(n>0 and n<self.size):
//             cont=0
//             act=self.head                   #Iniciar en la cabeza del arreglo   
//             for _ in range(n):            #Llegar hasta el nodo n-esimo
//                 act=act.next   
//                 cont+=1 
//             return act
//         else:
//             print("retN > Indice fuera de rango")
//             return
    retN(n)
    {
        if(n==0)
        {
            return this.head;
        }
        else if(n==this.size-1)
        {
            return this.tail;
        }
        else if (n>0 && n<this.size-1)
        {
            let cont=0;
            let act=this.head;
            while (cont<n)
            {
                act=act.next;
                cont+=1;
            }
            return act;
        }
        else
        {
            print("retN > Indice fuera de rango");
            return;
        }
    }

//     def Erase(self,n):                  #Eliminar el n-esimo (0<=x<n) elemento de la lista 
//         if (n==0):
//             self.PopFront()
//             return
//         elif(n==self.size-1):
//             self.PopBack()
//             return
//         elif(n>0 and n<self.size):
//             cont=0
//             act=self.head                   #Iniciar en la cabeza del arreglo   
//             for _ in range(n-1):            #Llegar hasta el anterior (redefinir el puntero)
//                 act=act.next   
//                 cont+=1 
//             point=act.next.next     #Guardar el nodo al que apunta el nodo
//             del act.next            #Eliminar el nodo
//             act.next=point          #Redefinir el nodo
//         else:
//             print("Erase > Indice fuera de rango")
//             return
    Erase(n)
    {
        if(n==0)
        {
            this.PopFront();
            return;
        }
        else if(n==this.size-1)
        {
            this.PopBack();
            return;
        }
        else if (n>0 && n<this.size-1)
        {
            let cont=0;
            let act=this.head;
            while (cont<n-1)
            {
                act=act.next;
                cont+=1;
            }
            let point=act.next.next;
            remove(act.next);
            act.next=point;
            return;
        }
        else
        {
            print("Erase > Indice fuera de rango");
            return;
        }    
    }

//     def TopFront(self):                 #Retornar el primer elemento de la lista
//     if (self.head.data!=None):
//         return self.head.data
//     return None
    TopFront()
    {
        if(this.head!=null)
        {
            return this.head.data;
        }
        return null;
    }

// def PopFront(self):                 #Retornar Y Eliminar el primer elemento de la lista
//     if(self.tail!=self.head): #Si hay mas de 1 objeto
//         dato=self.head.data                 #Guardar el valor
//         self.head=self.head.next
//         self.size-=1
//         return dato                         #Retornar el dato eliminado
//     else:                                   #Si solo hay un objeto, retornar la cabeza
//         try:                                #Si el arreglo NO esta vacio:
//             dato=self.head.data             
//         except:
//             return 
//         self.head=None                      #Eliminar el arreglo
//         self.tail=None
//         self.size-=1
//         return dato
    PopFront()
    {
        let dato=this.head.data;
        if(this.tail!=this.head)
        {
            this.head=this.head.next;
            this.size-=1;
            return dato;
        }
        else{
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

// def PushBack(self,data):            #Insertar un dato al final de la lista

//     self.size+=1
//     nodonuevo=Nodo(data)            #Crear un nodo nuevo con el dato que se paso

//     if(self.head==None):            #Si el arreglo esta vacio, colocarle un dato.
//         self.head=nodonuevo
//         return

//     if(self.tail!=None):            #Si el arreglo tiene cola definida (# objetos > 1)

//         self.tail.next=nodonuevo    #Colocar el nodo nuevo al final
//         self.tail=nodonuevo         #Definir la cola como el nodo nuevo

//     else:                           #Si no tiene cola 

//         self.head.next=nodonuevo    #Colocar el nodo nuevo despues de la cabeza
//         self.tail=nodonuevo         #la cola es el nuevo nodo
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

// def PopBack(self):                  #Retornar Y Eliminar el ultimo elemento de la lista
//     if(self.tail!=None and self.tail!=self.head): #Si hay mas de 1 objeto
//         act=self.head
//         while act.next!=self.tail:           #llegar hasta ANTES de la cola del arreglo:
//             act=act.next                                #Avanzar al nodo siguiente
        
//         dato=self.tail.data                 #Guardar el ultimo valor
//         act.next=None                       #Redefinir el puntero
//         self.tail=act                       #Redefinir la cola
//         self.size-=1
//         return dato                         #Retornar el dato 
//     else:                                   #Si solo hay un objeto, retornar la cabeza
//         try:                                #Si el arreglo NO esta vacio:
//             dato=self.head.data             
//         except:
//             return 
//         self.head=None                      #Eliminar el arreglo
//         self.tail=None
//         self.size-=1
//         return dato
    PopBack()
    {
        if(this.tail!=null && this.tail!=this.head)
        {
            let act=this.head;
            while (act.next!=this.tail)
            {
                act=act.next;
            }
            let dato = this.tail.data;
            act.next=null
            this.tail=act;
            this.size-=1;
            return dato;
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
