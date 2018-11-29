var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var colorActual;
var mouseDown = false;

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    $("#indicador-de-color").css("background-color", colorActual);
  })
);

var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');

function crearPaleta (){

  for (var n=0; n < nombreColores.length; n++){
    var divColor = document.createElement("div");
    $(divColor).css("background-color", nombreColores[n])
      .addClass("color-paleta")
      .click(function(e){
                colorActual = e.target.style.backgroundColor
                $("#indicador-de-color").css("background-color", colorActual);
              });
    
    $(paleta).append(divColor);
  }

}

function crearGrilla (){

  for (var n=0; n < 1750; n++){
    var divPixel = document.createElement("div");
    $(divPixel).mousedown(function(e){
          mouseDown = true;
          e.target.style.backgroundColor = colorActual;
        })
      .mouseup(function(e){
          mouseDown = false;
        })
      .mouseover(function(e){
          if(mouseDown){
            e.target.style.backgroundColor = colorActual;
          }
        });

    $(grillaPixeles).append(divPixel);  
  }

}

function borrarTodo(){
  $("#grilla-pixeles div").fadeTo(500, 0.2, function(){
    $(this).css("background-color","#fff").fadeTo(0, 1);
  })
}

function inicio(){
  crearPaleta();
  crearGrilla();
}


inicio();