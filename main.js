var canvas = new fabric.Canvas('myCanvas');
// Create canvas variable
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	function new_image(get_image)
	{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;
	block_image_object.scaleToWidth (block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:block_y,
	left:block_x
	});
	canvas.add(block_image_object);
	});
	}// to upload images
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		block_x = 100;
		new_image('rr1.png');
		console.log("r");// upload red ranger
	}
	if(keyPressed == '71')
	{
		new_image('gr.png');
		console.log("g");
		block_x = 200;
		// upload green ranger
	}
	
	if(keyPressed == '89')
	{
		new_image('yr.png');
		console.log("y");
		block_x =350;
		// upload yellow ranger
	}
	if(keyPressed == '80')
	{
		new_image('pr.png');
		console.log("p");
		block_x = 600;
		// upload pink ranger
	}
	if(keyPressed == '66')
	{
		new_image('br.png');
		console.log("b");
		block_x = 700;
	// upload blue ranger
	}
	
}

