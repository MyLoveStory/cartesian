var Plane = (function(canvas){

  var cart = document.getElementById(canvas);
  var plane2d = cart.getContext('2d'); 
  var planeHeight = cart.height;
  var planeWidth  = cart.width;
  var planeCenter = planeWidth / 2;
  var planeXFontPadding = (planeCenter + 5)
  var planeXYFontPadding = (planeCenter + 10)
  var xPlaneFontPadding  = 10;
  var xPlaneNumberStart = 1;
  var xPlaneNumberInterval = 1;
  
  var drawXY = function(xLines, yLines, xyColor){
   
    var i, j = i = 0;
    var yLineInterval = parseInt(planeWidth / yLines); 
    var xLineInterval = parseInt(planeHeight / xLines);
    
    plane2d.beginPath();
    
    for( i; i <= planeWidth; i += xLineInterval){ 
      
      plane2d.moveTo(i, 0);
      plane2d.lineTo(i, planeHeight);
       
      if( i > planeCenter ){ 
         
         this.drawText(i - xPlaneFontPadding, planeXYFontPadding, xPlaneNumberStart, 'Arial', '#f00', 10);
         xPlaneNumberStart += xPlaneNumberInterval;
      } 
    }

    for( j; j <= planeHeight; j += yLineInterval){

      plane2d.moveTo(0, j);
      plane2d.lineTo(planeWidth, j);
    }
      
      plane2d.strokeStyle = xyColor; 
      plane2d.stroke(); 
      plane2d.closePath(); 

  }
    
  var drawYAxis = function(yAxisWidth, color){

      plane2d.beginPath(); 
      plane2d.moveTo(planeWidth / 2, 0);
      plane2d.lineTo(planeWidth / 2, planeHeight);
      plane2d.lineWidth = parseInt(yAxisWidth);
      plane2d.strokeStyle = color;
      plane2d.stroke();

  }

  var drawXAxis = function(xAxisWidth, color){

      plane2d.beginPath(); 
      plane2d.moveTo(0, planeHeight / 2);
      plane2d.lineTo(planeWidth, planeHeight / 2);
      plane2d.lineWidth = parseInt(xAxisWidth); 
      plane2d.strokeStyle = color;
      plane2d.stroke();

   }

  var drawRect = function(x, y, w, h){

      plane2d.fillRect(x, y, w, h);

  }

  var drawCircle = function(x, y, radius, start, end, color){

      plane2d.beginPath();
      plane2d.arc(x, y, radius, start, end);
      plane2d.fillStyle = color
      plane2d.fill();
  }

  var drawText = function(x, y, text, font, color, width){
     
      plane2d.font = font; 
      plane2d.fillStyle = color;
      plane2d.fillText(text, x, y, width); 

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
   drawRect   : drawRect,
   drawCircle : drawCircle,
   drawText   : drawText,
   getWidth   : getWidth,
   getHeight  : getHeight
  };

})('cart');

Plane.drawXY(10, 10, '#ccc');
Plane.drawYAxis(2, '#aaa');
Plane.drawXAxis(2, '#aaa');
Plane.drawCircle(200, 200, 2, 0, 2*Math.PI, '#000');
//Plane.drawText(205, 210, '1', 'Arial', '#f00', 10); 


