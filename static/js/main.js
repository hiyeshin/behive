 $(document).ready( function(){
// Create a Paper.js Path to draw a line into it:
      var hexagon = new Path();
// Color our path black
      hexagon.strokeColor = '#89E0DA';
      hexagon.fillColor = '#89E0DA';
 
      // How many points do we want our object to have
      var points = 6;
      // How large should it be
      var radius = 60;
// 0 to 2PI is a circle, so divide that by the number of points
// in our object and that's how many radians we should put a new
// point in order to draw the shape
      var angle = ((2 * Math.PI) / points);
 
// For as many vertices in the shape, add a point
      for(i = 0; i <= points; i++) {
 
  // Add a new point to the object
            hexagon.add(new Point(
    // Radius * Math.cos(number of radians of the point) is the x position
            radius * Math.cos(angle * i), 
    // And the same thing with Math.sin for the y position of the point
            radius * Math.sin(angle * i)
      ));
      }
 
// Offset the shape so it's fully displayed on the canvas
      hexagon.position.x += 200;
      hexagon.position.y += 200;

})();
