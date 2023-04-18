//Constantes del juego
const COLUMNAS = 5;
const FILAS = 5;
const CANTIDAD_MINAS = COLUMNAS * FILAS - 1;

//Variables con colores para los casilleros (NO se pudieron declarar como constantes ya que  la fn color sólo está definida para el setup y el draw)
var COLOR_CASILLERO_CON_MINA;
var COLOR_CASILLERO_SIN_MINA;
var COLOR_CASILLERO_MARCADO;

//Variables controladas al hacer click con el mouse: mousePressed()
var columnaPresionada;
var filaPresionada;
var hizoClick = false;

//Otras variables
var casillerosSinDescubrir;


function setup()
{
  createCanvas(500, 500);   //crea un lienzo o panel donde estará el juego. El primer parámetro es el ancho y el segundo el alto del lienzo.
  laMagiaDeLosProfes();

  //Asigno colores que se utilizarán. La fn color solo está definida para el setup y el draw
  COLOR_CASILLERO_CON_MINA = color("#FF0000");
  COLOR_CASILLERO_SIN_MINA = color("#1CC932");
  COLOR_CASILLERO_MARCADO = color("#278EF2");

 

 

  ponerMinasTablero();
  casillerosSinDescubrir = COLUMNAS * FILAS;
  
  

  // Modificar/completar
}


function draw() {
  if (hizoClick == true)
  {
    if (mouseButton == LEFT)
    {
      
      if (tieneMinaCasillero(columnaPresionada, filaPresionada))
      {
        pintarCasillero(columnaPresionada, filaPresionada, COLOR_CASILLERO_CON_MINA);
        mostrarMinas()
        perder()
      }
        else
        { 

          pintarCasillero(columnaPresionada, filaPresionada, COLOR_CASILLERO_SIN_MINA); //pinta el casillero clickeado. Modificar/completar
        
          descubrirCasillero(columnaPresionada, filaPresionada);

          if(ganoElJuego() == true)
          {
            ganar();
          }
        }

       
    }
    
    
    hizoClick = false;  //Indico que ya "procesé" el click del usuario. NO modificar
  }
}


function ganoElJuego()
{
  if (CANTIDAD_MINAS == casillerosSinDescubrir)
    return true;
  else
    return false;   //Esto hace que NUNCA gane el juego. Modificar/completar
}

function ponerMinasTablero()
{
  let cant = 0;
  while(cant < CANTIDAD_MINAS){
    numeroRandomFil = floor(random()*FILAS);
    numeroRandomCol = floor(random()*COLUMNAS);
    if(!tieneMinaCasillero(numeroRandomCol,numeroRandomFil)){
      ponerMinaCasillero(numeroRandomCol, numeroRandomFil);
      cant ++;
    }  
    
  }
  

}

function mostrarMinas()
{
  for(let f =0; f < COLUMNAS; f++)

    for(let g =0; g < FILAS; g++)

      if(tieneMinaCasillero(f, g) )
        pintarCasillero(f, g, COLOR_CASILLERO_CON_MINA)
}

function contarMinasAlrededor(columna, fila)
{
  return  //Esto hace que SIEMPRE cuente 9 minas alrededor. Modificar/completar
}