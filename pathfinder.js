
//Djkstra:
//para las distancias, aplicar el tamaño de las lineas entre nodo y nodo aka la arista
// big O sin heaps: O(|V|²)
//big O con minheap: O(|A| log |V|) 
//para la implementacion de diccionario podriamos almacenar el mapa con los nodos
// y ademas la delimitacion de las distintas obstrucciones en el mapa 
function DIJKSTRA (Grafo G , nodo_fuente s, nodo_fin f){       
// para cada vertice del grafo hacer:
//  para u ∈ V[G] hacer
for (let vector in G){
    vector.distancia= 10^64; //inf
    vector.padre = NULL ;
    vector.visto = false ;  
}
s.distancia = 0; //inicializo distancia inicial
//Empizo la cola de prioridad, un min heap como implementacion del arbol en el programa
adicionar (cola, (s, s.distancia)) ;
//mientras que cola no es vacía hacer
while(heap.size!=0){
    vactual = heap.pop() ;
    vactual.visto = true ;
    if (f.visto=true){
        return f.distancia;
    }
    //para todos v ∈ adyacencia[u] hacer
    //para todos los vertices en la matriz de adyacencia
        //si ¬ visto[v]
        if(!visto){      
            //si distancia[v] > distancia[u] + peso (u, v) hacer
            if(vsig.distancia>vactual.distancia+dist(u,v)){
                vsig.distancia = vactual.distancia + dist (u, v);
                vsig.padre = u ;
                adicionar(cola,(vsig, vsig.distancia));
            }
        }
    }
    return vactual.distancia;
}
