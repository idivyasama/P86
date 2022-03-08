var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function newImage()
{
    fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
    block_image_object=Img;
    
    block_image_object.scaleToWidth(700);
    block_image_object.scaleToheight(510);
    block_image_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add( block_image_object);
    
    
    });
    
}

function playSound(){
	x.playSound()
}