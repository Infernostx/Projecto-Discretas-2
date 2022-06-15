
//Djkstra:
//para las distancias, aplicar el tamaño de las lineas entre nodo y nodo aka la arista
// big O sin heaps: O(|V|²)
//big O con minheap: O(|A| log |V|) 
//para la implementacion de diccionario podriamos almacenar el mapa con los nodos
// y ademas la delimitacion de las distintas obstrucciones en el mapa 
function DIJKSTRA (Grafo G , nodo_fuente s){       
// para cada vertice del grafo hacer:
//  para u ∈ V[G] hacer
foreach(G.vector in G){
    i.distancia= 10^64; //inf
    i.padre = NULL ;
    i.visto = false ;  
}
s.distancia = 0; //inicializo distancia inicial
//Empizo la cola de prioridad, un min heap como implementacion del arbol en el programa
adicionar (cola, (s, s.distancia)) ;
//mientras que cola no es vacía hacer
while(heap.size!=0){
    u = heap.pop() ;
    u.visto = true ;
    //para todos v ∈ adyacencia[u] hacer
    //para todos los vertices en la matriz de adyacencia
        //si ¬ visto[v]
        if(!visto){      
            //si distancia[v] > distancia[u] + peso (u, v) hacer
            if(v.distancia>u.distancia+dist(u,v)){
                v.distancia = u.distancia + dist (u, v);
                v.padre = u ;
                adicionar(cola,(v, v.distancia));
            }
        }
    }
}

//dijkstra 2

function Dijkstra(Graph, source){
      dist[source] = 0;                           // Initialization

      Q=new minheap();

      for (v in Graph.Vertices){
          if (v != source){
              dist[v] = INFINITY;                 // inf dist from source to v
              prev[v] = UNDEFINED;                // Predecessor of v
          }
         Q.add_with_priority(v, dist[v]);
      }

     while (Q.size!=0){                    // The main loop
         u = Q.extract_min() ;                   // Remove and return best vertex
         foreach (neighbor v of u) {             // only v that are still in Q
             alt = dist[u] + Graph.Edges(u, v) ; //Aqui hay un metodo en el grafo para hallar dist entre 2 nodos
             if (alt < dist[v] && dist[u] != INFINITY){
                 dist[v] = alt;
                 prev[v] = u;
                 Q.decrease_priority(v, alt);
             }
        }
     }
     return dist, prev;

}



//A*
//big O performance	O(|E|)=O(b^d)
//big O space complexity O(|V|)=O(b^d)
//Mas eficente n terminos de ejecucion, pero utiliza mas espacio

function reconstruct_path(cameFrom, current){
    total_path += current;
    while (current in cameFrom.Keys){
        current += cameFrom[current];
        total_path.prepend(current);
    }
    return total_path;
}
function h(node n){
    return 5;
}
// A* finds a path from start to goal.
// h is the heuristic function. h(n) estimates the cost to reach goal from node n.
function A_Star(start, goal, h){
    // The set of discovered nodes that may need to be (re-)expanded.
    // Initially, only the start node is known.
    // This is usually implemented as a min-heap or priority queue rather than a hash-set.
    openSet = start;

    // For node n, cameFrom[n] is the node immediately preceding it on the cheapest path from start
    // to n currently known.
    cameFrom = null;// an empty map

    // For node n, gScore[n] is the cost of the cheapest path from start to n currently known.
    gScore = 10^64; //map with default value of Infinity
    gScore[start] = 0;

    // For node n, fScore[n] := gScore[n] + h(n). fScore[n] represents our current best guess as to
    // how cheap a path could be from start to finish if it goes through n.
    fScore = 10^64;//map with default value of Infinity
    fScore[start] = h(start);

    while (openSet.size!=0){
        // This operation can occur in O(Log(N)) time if openSet is a min-heap or a priority queue
        current = openSet.pop();//the node in openSet having the lowest fScore[] value
        if (current = goal){
            return reconstruct_path(cameFrom, current);
        }
        openSet.Remove(current)
        foreach (neighbor of current){
            // d(current,neighbor) is the weight of the edge from current to neighbor
            // tentative_gScore is the distance from start to the neighbor through current
            tentative_gScore = gScore[current] + d(current, neighbor);
            if (tentative_gScore < gScore[neighbor]){
                // This path to neighbor is better than any previous one. Record it!
                cameFrom[neighbor] = current;
                gScore[neighbor] = tentative_gScore;
                fScore[neighbor] = tentative_gScore + h(neighbor);
                if (neighbor not in openSet){
                    openSet.add(neighbor);
                }
            }
        }        
    }
    // Open set is empty but goal was never reached
    return failure;
}
