
var group1, group2, group3, group4, raster;
var piece1 = firstRow()
var piece2 = secondRow()
// var piece3 = thirdRow()
var hexagon1;
var count = 200;


function firstRow(){
    // var group1 = new Group();
    var hexagon1 = new Path.RegularPolygon({
        center: [70,70],
        sides: 6,
        radius: 60,
        fillColor: '#bcdfde',
        // parent: group1
    });
    hexagon1.rotate(30);

    for (i = 0; i < 30; i++){
      hexagon1.position.x += 60;
      }

    // var clonedHex1 = hexagon1.clone()

    // for (var i = 0; i < count; i++) {
    // // The center position is a random point in the view:
    //   clonedHex1.position += new Point (75,0);
    //   clonedHex1.push(group1)
    //   }
    

    
    // return hexagon1;
    return group1;
}

function secondRow(){
    var group2 = new Group();
    var hexagon2 = new Path.RegularPolygon({
        center: [70,175],
        sides: 6,
        radius: 60,
        fillColor: '#eef7f7',
        parent: group2
    });

    // var clonedHex2 = hexagon2.clone()

    // for (var i = 0; i < count; i++) {
    // // The center position is a random point in the view:
    //   clonedHex1.position += new Point (75,0);
    //   clonedHex1.push(group1)
    //   }

    hexagon2.rotate(30);

    return group2;
}

firstRow();
secondRow();


function onFrame(event) {
      console.log(event.time);


    for (var i = 0; i < count; i++) {
        var item = project.activeLayer.children[i];
        
        setTimeout(2000);
        item.position.x += 5;

        // group1.position.x += 1;;
        

        // If the item has left the view on the right, move it back
        // to the left:
        if (item.bounds.left > view.size.width) {
            item.position.x = -item.bounds.width;
        }

      
            // setTimeout(5000);
    
            // group1.position.x += 70;
    }
}
