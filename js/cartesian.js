var Plane = (function(){

  var cart = document.getElementById('cart');
  var plane2d = cart.getContext('2d'); 
  var planeHeight = cart.height;
  var planeWidth  = cart.width;

  var drawXY = function(xLines, yLines, xyColor){
   
    var i, j = i = 1;
    var yLineInterval = Math.floor(parseInt(planeWidth / yLines)); 
    var xLineInterval = Math.floor(parseInt(planeHeight / xLines));
    
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
      
      plane2d.strokeStyle = xyColor; 
      plane2d.stroke();
      plane2d.closePath();
      
  }
    
  var drawYAxis = function(yAxisWidth){

      plane2d.beginPath(); 
      plane2d.moveTo(planeWidth / 2, 0);
      plane2d.lineTo(planeWidth / 2, planeHeight);
      plane2d.lineWidth = parseInt(yAxisWidth); 
      plane2d.stroke();

   }

  var drawXAxis = function(xAxisWidth){

      plane2d.beginPath(); 
      plane2d.moveTo(0, planeHeight / 2);
      plane2d.lineTo(planeWidth, planeHeight / 2);
      plane2d.lineWidth = parseInt(xAxisWidth); 
      plane2d.stroke();

   }

  var getWidth = function(){
      
      return planeWidth;
  } 

  var getHeight = function(){
    
      return planeHeight;
  }

  return {
   drawXY     : drawXY,
   drawYAxis  : drawYAxis,
   drawXAxis  : drawXAxis,
   getWidth   : getWidth,
   getHeight  : getHeight
  };


})();


Plane.drawXY(20, 20, '#aaa');
Plane.drawYAxis(5);
Plane.drawXAxis(5);


