function Plane(canvas){

  var cart = document.getElementById(canvas);
  var plane2d = cart.getContext('2d');
  var planeHeight = cart.height;
  var planeWidth  = cart.width;
  var planeCenter = planeWidth/2;
  var self = this;


  this.drawXNegativeLines = function(xLines){

   plane2d.beginPath();
   var x = planeCenter;
   var xIntervals = parseInt(planeCenter/xLines);
   for( x; x <= planeCenter; x -= xIntervals){

    plane2d.moveTo(x, 0);
    plane2d.lineTo(x, planeHeight); 
    if(x <= 0) break; 

   }

    plane2d.stroke();

  } 
  
  this.drawXPositiveLines = function(xLines){

   plane2d.beginPath();
   var x = 1;
   var xIntervals = parseInt(planeCenter/xLines);

   for( x; x < planeCenter; x += xIntervals){

    plane2d.moveTo(x, 0);
    plane2d.lineTo(x, planeHeight); 

   }

    plane2d.stroke();

  } 
  

 
}

plane = new Plane('cart');
plane.drawXNegativeLines(10);



