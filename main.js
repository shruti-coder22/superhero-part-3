var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_img_width = 30;
block_img_height = 30;

block_object = "";
player_object = "";

function player_update () {
    fabric.Image.fromURL("Pencil.png",function(Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        
        player_object.set ( {
            top : player_y,
            left : player_x
        } );

        canvas.add(player_object);

    } );
}

function new_block (get_image) {
    fabric.Image.fromURL(get_image,function(Img) {
        block_object = Img;

        block_object.scaleToWidth(block_img_width);
        block_object.scaleToHeight(block_img_height);
        
        block_object.set ( {
            top : player_y,
            left : player_x
        } );

        canvas.add(block_object);

    } );
}

window.addEventListener("keydown", mykeydown)
function mykeydown(e) {
    var keypressed = e.keyCode;
    console.log(keypressed);

    if (e.shiftKey == true && keypressed == '80') {
        console.log ("shift and p pressed together");

        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;

        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

    if (e.shiftKey == true && keypressed == '77') {
        console.log ("shift and m pressed together");

        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;

        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

    if (keypressed == 38) {
        up();
        console.log("up is pressed");
    }

    if (keypressed == 37) {
        left();
        console.log("left is pressed");
    }

    if (keypressed == 40) {
        down();
        console.log("down is pressed");
    }

    if (keypressed == 39) {
        right();
        console.log("right is pressed");
    }

    if (keypressed == 72) {
        new_block("Shrek Head.png");
        console.log("h is pressed. Head is created");
    }

    if (keypressed == 70) {
        new_block("HUlkLeg.png");
        console.log("F is pressed. Feet are created");
    }

    if (keypressed == 82) {
        new_block("captain America.png");
        console.log("r is pressed. Right hand is created");
    }

    if (keypressed == 66) {
        new_block("spiderman body .png");
        console.log("b is pressed. body is created");
    }

    if (keypressed == 76) {
        new_block("Thor left arm .png");
        console.log("l is pressed. Left hand is created");
    }

}

function up() {
    if (player_y >= 0) {
        player_y = player_y - block_img_height;
        console.log("Block height = " + block_img_height);
        console.log("Player X = " + player_x + "and Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_y <= 460) {
        player_y = player_y + block_img_height;
        console.log("Block height = " + block_img_height);
        console.log("Player X = " + player_x + "and Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x >= 0) {
        player_x = player_x - block_img_width;
        console.log("Block height = " + block_img_width);
        console.log("Player X = " + player_x + "and Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x <= 850) {
        player_x = player_x + block_img_width;
        console.log("Block height = " + block_img_width);
        console.log("Player X = " + player_x + "and Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}