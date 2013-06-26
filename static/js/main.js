$(document).ready( function(){

var values = {
    amount: 10
};

var raster, group;
var piece = createPiece();
var count = 0;

handleImage('mona');

// var text = new PointText({
//     point: view.center,
//     justification: 'center',
//     fillColor: 'white',
//     fontSize: 15,
//     content: window.FileReader
//         ? 'Drag & drop an image from your desktop'
//         : 'To drag & drop images, please use Webkit, Firefox, Chrome or IE 10'
// });

function createPiece() {
    var group = new Group();
    var hexagon = new Path.RegularPolygon({
        center: view.center,
        sides: 6,
        radius: 200,
        fillColor: '#89E0DA',
        parent: group
    });
    for (var i = 0; i < 2; i++) {
        var path = new Path({
            closed: true,
            selected: true,
            parent: group,
            fillColor: i == 0 ? '#C4F7F3' : '#3CB5AC'
        });
        for (var j = 0; j < 3; j++) {
            var index = (i * 2 + j) % hexagon.segments.length;
            path.add(hexagon.segments[index].clone());
        }
        path.add(hexagon.bounds.center);
    }
    // Remove the group from the document, so it is not drawn:
    group.remove();
    return group;
}

function handleImage(image) {
    count = 0;
    var size = piece.bounds.size;

    if (group)
        group.remove();

    raster = new Raster(image);
    raster.remove();

    // Transform the raster, so it fills the view:
    raster.fitBounds(view.bounds, true);
    group = new Group();
    group.applyMatrix = true;
    for (var y = 0; y < values.amount; y++) {
        for (var x = 0; x < values.amount; x++) {
            var copy = piece.clone();
            copy.position += size * [x + (y % 2 ? 0.5 : 0), y * 0.75];
            group.addChild(copy);
        }
    }

    // Transform the group so it covers the view:
    group.fitBounds(view.bounds, true);
    group.scale(1.1);
}

function onFrame(event) {
    // Loop through the uncolored hexagons in the group and fill them
    // with the average color:
    var length = Math.min(count + values.amount, group.children.length);
    for (var i = count; i < length; i++) {
        piece = group.children[i];
        var hexagon = piece.children[0];
        var color = raster.getAverageColor(hexagon);
        if (color) {
            hexagon.fillColor = color;
            var top = piece.children[1];
            top.fillColor = color.clone();
            top.fillColor.brightness *= 1.5;

            var right = piece.children[2];
            right.fillColor = color.clone();
            right.fillColor.brightness *= 0.5;
        }
    }
    count += values.amount;
}

function onResize() {
    project.activeLayer.position = view.center;
}

//       var hexagon = new Path();
// // Color our path black
//       hexagon.strokeColor = '#89E0DA';
//       hexagon.fillColor = '#C4F7F3';
 
//       // How many points do we want our object to have
//       var points = 6;
//       // How large should it be
//       var radius = 60;
// // 0 to 2PI is a circle, so divide that by the number of points
// // in our object and that's how many radians we should put a new
// // point in order to draw the shape
//       var angle = ((2 * Math.PI) / points);
 
// // For as many vertices in the shape, add a point
//       for(i = 0; i <= points; i++) {
 
//   // Add a new point to the object
//             hexagon.add(new Point(
//     // Radius * Math.cos(number of radians of the point) is the x position
//             radius * Math.cos(angle * i), 
//     // And the same thing with Math.sin for the y position of the point
//             radius * Math.sin(angle * i)
//       ));
//       }
 
// // Offset the shape so it's fully displayed on the canvas
//       hexagon.position.x += 200;
//       hexagon.position.y += 200;

 });
