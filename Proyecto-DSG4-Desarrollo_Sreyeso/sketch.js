//Variables gráficas
let width;        //Ancho de la ventana
let height;       //Largo de la ventana
let x;            //Imprimir el jugador en la coordenada
let y;            //Imprimir el jugador en la coordenada

//Variables del juego
let game = '2';     //0-menu inicial 1-juego 2-editor 3-exit
let px;           //Coordenada en x del jugador 
let py;           //Coordenada en y del jugador
let gx;           //Coordenada en x de la meta
let gy;           //Coordenada en y de la meta
let lvl;          //Objeto donde se guarda el nivel actual (modo jugar)
let pc;           //Diccionario donde se guarda el color del jugador
let combo = "Bien"; //Control del movimiendo valido
let clvl;         //Objeto donde se guarda el JSON para carga de nivel
let nlvl = 0;       //Contador de nivel para carga sequencial de niveles
let lvls;         //Pre-carga de los niveles de JSON a Objeto
let escfla = false; //Indica si se presiono ESC para ver los tutoriales

//Variables multimedia
//Sonido
/* let s_zeta;
let s_equis;
let s_fin;
let s_normal;
let s_miss;
//Imagenes
let tutogame;
let tutoedit;

//Elementos DOM
let canvas;
let menu;
let score;
let exportlvl;
let sldrtiming;
let timingtxt; */

//Clase principal
class nivel {

	//añadir variable nombre y tutorial,
	//dependiendo del nivel, puede haber o no tutorial.
	//añadir metodo para imprimir este nombre encima del nivel, 
	//y el tutorial por debajo
	constructor(filas, columnas, layout, tamcasilla, timing) {

		//Definidos por constructor
		this.f = filas;
		this.c = columnas;
		this.layout = layout;//Disposicion del nivel (arreglo)
		this.timing = timing;   //Valor en ms de la ventana para hacer un movimiento
		//antes de que mande miss (limite superior)
		this.timer = this.timing; //Valor actual del timer
		this.tamcasilla = tamcasilla;

		//Definidos por inicializacion
		this.tablero = []; //Representacion del nivel (matriz)
		this.xini = 0; //Posicion inicial del jugador en x
		this.yini = 0; //Posicion inicial del jugador en y
		this.xfin = 0; //Posicion en x de la casilla final
		this.yfin = 0; //Posicion en y de la casilla final
		this.contcas = 0; //Cantidad de casillas asociadas al ranking final del nivel

		//Definido por calculo dinamico
		this.compl = 0;
		this.movfla = false; //Registro de cuando el usuario interacciona por primera vez con el tablero 
		//(para que inicie el contador de timing)
		this.misses = 0;    //Misses en 0 al inicio del lvl
		this.ranking = 'S'; //Ranking inicial de cada lvl

		//Centrado del tablero
		this._ajustex = ((width - (this.f * this.tamcasilla)) * 0.5);
		this._ajustey = ((height - (this.c * this.tamcasilla)) * 0.5);



		this.inicializar();
	}

	inicializar() {
		for (let i = 0; i < this.c; i++) {
			let fila = [];
			for (let j = 0; j < this.f; j++) {

				//leer la disposicion del tablero (guardar las propiedades de la casilla)
				let prop = this.layout[(i * (this.f)) + j];
				let propcomp = prop[0] + prop[1] + prop[2];

				//Contar las casillas de juego
				if (propcomp != "00n") {
					this.contcas += 1;
				}
				//Ubicar la casilla inicial
				if (propcomp == "20n") {
					this.xini = i;
					this.yini = j;
					this.contcas -= 1;
				}
				//Ubicar la casilla final
				if (propcomp == "30n") {
					this.xfin = i;
					this.yfin = j;
					this.contcas -= 1;
				}

				//crear el objeto casilla con las propiedades que va en esa posicion del tbalero
				let cas = new casilla(int(prop[0]), int(prop[1]), prop[2]);
				fila.push(cas);
			}
			this.tablero.push(fila);
		}
	}

	dibujar() {

		this.tamcasilla = map(max(this.f, this.c), 1, 15, 80, 40);
		this._ajustex = ((width - (this.f * this.tamcasilla)) * 0.5);
		this._ajustey = ((height - (this.c * this.tamcasilla)) * 0.5);

		/* score.position(lvl._ajustex, lvl._ajustey - (2 * lvl.tamcasilla));
		exportlvl.position(lvl._ajustex + (int(lvl.f * 0.485) * lvl.tamcasilla), lvl._ajustey + ((lvl.c + 0.2) * lvl.tamcasilla));
		sldrtiming.position(lvl._ajustex - (lvl.tamcasilla * 3), lvl._ajustey + (2 * lvl.tamcasilla));
		timingtxt.position(lvl._ajustex - (lvl.tamcasilla * 3), lvl._ajustey + (lvl.tamcasilla));
		timingtxt.style('font-size', +str(lvl.tamcasilla * 0.45) + 'px');
		score.style('font-size', +str(lvl.tamcasilla * 0.45) + 'px'); */

		//Recorrer el tablero
		for (let i = 0; i < this.c; i++) {
			for (let j = 0; j < this.f; j++) {
				//Ajuste centrado
				let x = this._ajustex + (j * this.tamcasilla);
				let y = this._ajustey + (i * this.tamcasilla);
				//Traer las propiedades de la casilla actual
				let cas = this.tablero[i][j];


				push(); //Graba la configuración actual de estilo de dibujo
				stroke("black");
				//fill('rgba(50, 0, 50, 0)');
				fill(cas.color);

				//Imprimir la casilla
				rect(x, y, this.tamcasilla, this.tamcasilla);
				if (cas.tipo != 0) {

					fill("white");
					textStyle("italic");
					textSize(this.tamcasilla * 0.45);

					if (cas.n != 0) {
						//Imprimir el numero de la casilla
						text(cas.n, x + this.tamcasilla / 2.6, y + this.tamcasilla / 1.5);
					}

				}
				pop(); //Deja la configuracion del estilo de dibujo como estaba antes del push
			}
		}
	}

	hasstart() {
		for (let i = 0; i < this.c; i++) {
			for (let j = 0; j < this.f; j++) {
				let cas = this.tablero[i][j];
				if (cas.tipo == 2) {
					return true;
				}
			}
		}
		return false;
	}

	hasfinish() {
		for (let i = 0; i < this.c; i++) {
			for (let j = 0; j < this.f; j++) {
				let cas = this.tablero[i][j];
				if (cas.tipo == 3) {
					return true;
				}
			}
		}
		return false;
	}
}
//Clase secundaria
class casilla {
	constructor(tipo, numero, objeto) {

		//Definidas por constructor
		this.n = numero;
		this.objeto = objeto;
		this.tipo = tipo;

		//Valor por defecto (definida por inicializacion)
		this.color = ('white');

		this.inicializar();
	}

	inicializar() {
		switch (this.tipo) {
			case (0): //Casilla limite (limite del nivel)
				this.color = ('lightsteelblue');
				if (this.n != 0) {
					this.n = 0;
				}
				break;
			case (1): //Casilla vacía (cualquier dirección)
				this.color = ('white');
				if (this.n != 0) {
					this.n = 0;
				}
				break;
			case (2): //Casilla de inicio
				this.color = ('darkkhaki');
				if (this.n != 0) {
					this.n = 0;
				}
				break;
			case (3): //Casilla final
				this.color = ('chartreuse');
				if (this.n != 0) {
					this.n = 0;
				}
				break;
			case (4): //Casilla completada
				this.color = ('aquamarine');
				break;
			case (5): //Casilla azul (tecla z)
				this.color = ('lightskyblue');
				if (this.n == 0) {
					this.n = 1;
				}
				break;
			case (6): //Casilla roja (tecla x)
				this.color = ('firebrick');
				if (this.n == 0) {
					this.n = 1;
				}
				break;
			default:
				this.color = ('purple');
		}
	}
	completar() {
		this.tipo = 4;
		this.inicializar();
		lvl.compl += 1;
	}
	vaciar() {
		this.tipo = 1;
		this.inicializar();
	}
}

//Funciones propias

//Sobreescribe la variable lvl donde guarda las propiedades del nivel a mostrar
function inicializarlvl(filas, columnas, layout, tamcasilla, timing) {
	lvl = new nivel(filas, columnas, layout, tamcasilla, timing);
	px = lvl.xini;
	py = lvl.yini;
	gx = lvl.xfin;
	gy = lvl.yfin;
}
// Generador de arreglo para tablero vacio
function genArray(x) {
	let array = [];
	for (let i = 0; i < x; i++) {
		array[i] = "00n";
	}
	return array;
}

function startEditor(){
	let elx = 20;
	let ely = 20;
	inicializarlvl(elx, ely, genArray(elx * ely), 45, 150);
}	

//Movimiento invalido
//Funciones definidas por P5

function preload() {
	mapa = loadImage('mapaunal.jpg');
}
/* function preload() {
	soundFormats('wav');
	s_zeta = loadSound('media/z.wav');
	s_equis = loadSound('media/x.wav');
	s_fin = loadSound('media/fin.wav');
	s_normal = loadSound('media/normal.wav');
	s_miss = loadSound('media/combobreak.wav');
	tutogame = loadImage('media/tutorialgame.png');
	tutoedit = loadImage('media/tutorialeditor.png');
	lvls = loadJSON('levels/levels.json');
} */
function setup() {

	frameRate(60);
	//Ajuste del canvas por posicion absoluta
	canvas = createCanvas(windowWidth, windowHeight);
	background('mediumpurple');
	//background(mapa);
	width = windowWidth;
	height = windowHeight;

	//Cargo nivel inicial
	//Inicializar el Player Color (Depende de si el movimiento del jugador es valido o no)
	pc = { 'Bien': 'darkorchid', 'mal': 'red' }

	//Volumen
	//outputVolume(0.2);

	/* //Elementos DOM
	score = createElement('h1', "");
	score.hide();
	//boton exportar
	exportlvl = createButton('Exportar');
	exportlvl.position(0, 0);
	exportlvl.hide();
	exportlvl.mouseClicked(saveLevel);
	//slider timing
	sldrtiming = createSlider(50, 300, 150, 50);
	sldrtiming.position(0, 0);
	sldrtiming.style('width', '100px');
	sldrtiming.hide();
	//texto slider timing
	timingtxt = createElement('p', " ");
	timingtxt.position(0, 0);
	timingtxt.hide();
	//showMenu();
	//Volumen
	//outputVolume(0.2); */
	//inicializarlvl(1, 1, ["20n"], 45, 150);
	
	startEditor();
	// modificar las clases para que lean las estructuras en vez de layouts y sin importar el tama;o de las estructuras
	// cambiar la var "game" a "structure" para cambiar a las diferentes DS
	//ya con los controles que tenemos seria realizar los distintos metodos, para hacer CRUD moviendonos en la estructura
	//es necesario que el visualizador este inicialzado en el draw para ver los cambios en tiempo real
	//tambien se dejo un WIP de mapaUN para despues



}
function draw() {
	switch (game) {//Control del juego //0-menu inicial 1-juego 2-editor 3-exit
		case ('0'): //Volver al menu
			clear();
			//background('mediumpurple');
			exportlvl.hide();
			sldrtiming.hide();
			timingtxt.hide();
			score.hide();

			break;
		
		case ('2'): //Editor
			background('mediumpurple');
			text('Presiona ESC para ver informacion', 10, height - 30);
			//sldrtiming.style('width', 2.3 * lvl.tamcasilla + 'px');
			//timingtxt.html('Timing: ' + str(sldrtiming.value()));
			push();
			textSize(lvl.tamcasilla * 0.5);
			pop();
			//Imprimir el nivel
			lvl.dibujar();
			//Imprimir al jugador
			x = lvl._ajustex + (int(py) * lvl.tamcasilla);
			y = lvl._ajustey + (int(px) * lvl.tamcasilla);

			push();
			strokeWeight(5.5);
			stroke("darkorchid");
			noFill();
			rect(x, y, lvl.tamcasilla, lvl.tamcasilla);
			pop();

			if (escfla) {
				image(tutoedit, 0, 0, map(1920, 0, 1920, 0, width), map(1080, 0, 1080, 0, height));
				/* exportlvl.hide();
				sldrtiming.hide();
				timingtxt.hide();
				score.hide(); */
				text('Presiona ESC para ocultar', 10, height - 30);
			} else {
				/* exportlvl.show();
				sldrtiming.show();
				timingtxt.show();
				score.show(); */
			}
			break;
		default:
			alert('chao');
			break;
	}

}
function keyPressed() {
	switch (game) {//Control del juego
		//Control del jugador
		//CONDICIONES DE MOVIMIENTO
		//No se puede mover hacia una casilla gris
		//al salir de una casilla, la anterior se marca como completada
		//No se puede mover hacia una casilla completada
		
		case ('2')://Editor
			switch (keyCode) {
				//Movimiento de seleccionar casilla
				case (RIGHT_ARROW):
					py += 1;
					py = py % lvl.f;
					break;
				case (LEFT_ARROW):
					if (py <= 0) {
						py = lvl.f - 1;
					} else {
						py -= 1;
					}
					break;
				case (DOWN_ARROW):
					px += 1;
					px = px % lvl.c;
					break;
				case (UP_ARROW):
					if (px <= 0) {
						px = lvl.c - 1;
					} else {
						px -= 1;
					}
					break;
				//Asignar propiedades a la casilla hovereada
				case (90): //Z
					lvl.tablero[px][py].tipo = 5;
					lvl.tablero[px][py].n = 1;
					lvl.tablero[px][py].inicializar();
					break;
				case (88): //X
					lvl.tablero[px][py].tipo = 6;
					lvl.tablero[px][py].n = 1;
					lvl.tablero[px][py].inicializar();
					break;
				case (49): //1
					lvl.tablero[px][py].n = 1;
					lvl.tablero[px][py].inicializar();
					break;
				case (50): //2
					lvl.tablero[px][py].n = 2;
					lvl.tablero[px][py].inicializar();
					break;
				case (51): //3
					lvl.tablero[px][py].n = 3;
					lvl.tablero[px][py].inicializar();
					break;
				case (52): //4
					lvl.tablero[px][py].n = 4;
					lvl.tablero[px][py].inicializar();
					break;
				case (53): //5
					lvl.tablero[px][py].n = 5;
					lvl.tablero[px][py].inicializar();
					break;
				case (54): //6
					lvl.tablero[px][py].n = 6;
					lvl.tablero[px][py].inicializar();
					break;
				case (55): //7
					lvl.tablero[px][py].n = 7;
					lvl.tablero[px][py].inicializar();
					break;
				case (56): //8
					lvl.tablero[px][py].n = 8;
					lvl.tablero[px][py].inicializar();
					break;
				case (57): //9
					lvl.tablero[px][py].n = 9;
					lvl.tablero[px][py].inicializar();
					break;
				case (48): //0
					lvl.tablero[px][py].n = 0;
					lvl.tablero[px][py].inicializar();
					break;
				case (67): //C
					lvl.tablero[px][py].tipo = 1;
					lvl.tablero[px][py].inicializar();
					break;
				case (66): //B
					lvl.tablero[px][py].tipo = 0;
					lvl.tablero[px][py].inicializar();
					break;
				case (83): //S
					if (!lvl.hasstart()) {
						lvl.tablero[px][py].tipo = 2;
						lvl.tablero[px][py].inicializar();
					}

					break;
				case (70): //F
					if (!lvl.hasfinish()) {
						lvl.tablero[px][py].tipo = 3;
						lvl.tablero[px][py].inicializar();
					}
					break;
				case (27): //ESC
					if (!escfla) {
						escfla = true;
					}
					else {
						escfla = false;
					}
					break;
				default:
					break;
			}
			break;
	}
}
function windowResized() {
	width = windowWidth;
	height = windowHeight;
}