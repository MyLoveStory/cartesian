var Plane = (function(){

  var cart = document.getElementById('cart');
  var plane2d = cart.getContext('2d'); 

  var drawXY = function(xLines, yLines){
   
    var i, j = i = 1;
    var planeHeight = cart.height;
    var planeWidth  = cart.width; 
    var yLineInterval = parseInt(planeWidth / yLines); 
    var xLineInterval = parseInt(planeHeight / xLines);

    plane2d.beginPath();
    
    for( i; i <= planeWidth; i += yLineInterval){ 
       
      if(i == 1){ continue; } 
      plane2d.moveTo(i, 0);
      plane2d.lineTo(i, planeHeight);

    }

    for( j; j <= planeHeight; j += xLineInterval){

      if(j == 1){ continue; }
      plane2d.moveTo(0, j);
      plane2d.lineTo(planeWidth, j);
      
    }
      
      plane2d.strokeStyle = '#aaa'; 
      plane2d.stroke();  
   
  }

  return {
   drawXY : drawXY 
  };


})();


Plane.drawXY(10, 10);
