const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d")

let score = 0;
let lives = 3;

const backgroundImg = new Image();
backgroundImg.src = "./Images/Happy Hopper Background.png";

backgroundImg.addEventListener("load", () => {
    context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height)

    context.fillstyle = "black";
    context.font = "25px Arial";
    context.fillText(`Score: ${score}`, 800, 50);

    context.fillstyle ="black";
    context.font ="25px Arial";
    context.fillText(`Lives: ${lives}`, 800, 75);
});

//player

const frog = {
    x: 425,
    y: 550,
    width: 50,
    height: 50,
};

const frogImg = new Image();
frogImg.src = "./Images/istockphoto-473243362-612x612.jpg";

frogImg.addEventListener("load", () => {
    context.drawImage(frogImg, frog.x, frog.y, frog.width, frog.height);
})

const drawEverything = () => {
    context.drawImage(frogImg, frog.x, frog.y, frog.width, frog.height);
    context.drawImage();
};

// const drawLoop = () => {
//     context.clearRect(0, 0, canvas.width, canvas.height);

//     drawEverything();
    
//     requestAnimationFrame(drawLoop);
// };

// drawLoop();
class Player {
    constructor(classGame, x, y, w, h, imageSrc) {
        this.lives = 3;
    }
    move() { 
        document.addEventListener("keydown", (event) =>{
            switch (event.keycode) {
                case "ArrowUp":
                case "KeyW":
                    frog.y -= 50;
                    console.log(frog)
                    break;
        
                case "ArrowDown":
                case "KeyX":
                    if(frog.y < canvas.height) frog.y += 25;
                    console.log(frog)
                    break;

                case "ArrowLeft":
                case "KeyA":
                    if(frog.x > 0) frog.x -= 25;
                    break;

                case "ArrowRight":
                case "KeyD":
                    if(frog.x < canvas.width) frog.x += 25;
                    break;
            };
        });
    };      
}




