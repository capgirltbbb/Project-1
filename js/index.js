const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let score = 0;
let lives = 3;

const backgroundImg = new Image();
backgroundImg.src = "./Images/Happy Hopper Background.png";

//player

const frog = {
    x: 430,
    y: 554,
    width: 45,
    height: 40,
    lives: 3,
}

//obstacles

const truck = {
    x: 0,
    y: 420,
    width: 100,
    height: 40,
}
const police = {
    x: canvas.width,
    y: 465,
    width: 75,
    height: 40,
}
const redcar = {
    x: 0,
    y: 510,
    width: 75,
    height: 40,
}
const bluecar = {
    x: 0,
    y: 325,
    width: 75,
    height: 40,
}
const orangecar = {
    x: canvas.width,
    y: 370,
    width: 75,
    height: 40,
}

const frogImg = new Image();
frogImg.src = "./Images/frog.jpg";

const truckImg = new Image();
truckImg.src = "./Images/Yellow Truck.png";

const policeImg = new Image();
policeImg.src = "./Images/Police Car.png";

const redcarImg = new Image();
redcarImg.src = "./Images/Red Car.png";

const bluecarImg = new Image();
bluecarImg.src = "./Images/Blue Car.png";

const orangecarImg = new Image();
orangecarImg.src = "./Images/Orange Car.png";

const obstacles = [truck, police, redcar, bluecar, orangecar];

//collision

const collisionDetection = (obj1, obj2) => {
    return  !(
        obj1.x + obj1.width < obj2.x ||
        obj1.y + obj1.height < obj2.y ||
        obj2.x + obj2.width < obj1.x ||
        obj2.y + obj2.height < obj1.y
    )
}

const drawEverything = () => {
    context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
    context.drawImage(frogImg, frog.x, frog.y, frog.width, frog.height);
    context.drawImage(truckImg, truck.x, truck.y, truck.width, truck.height);
    context.drawImage(policeImg, police.x, police.y, police.width, police.height);
    context.drawImage(redcarImg, redcar.x, redcar.y, redcar.width, redcar.height);
    context.drawImage(bluecarImg, bluecar.x, bluecar.y, bluecar.width, bluecar.height);
    context.drawImage(orangecarImg, orangecar.x, orangecar.y, orangecar.width, orangecar.height);

    obstacles.forEach(vehicle => {

        if (collisionDetection(frog, vehicle)) {
            frog.lives--;
            frog.x = 430;
            frog.y = 554;
            if (frog.lives === 0) {
                // alert("game over")
              gameOver();
            }
        }
    })
  };

  const drawLoop = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
  
    drawEverything();
    
    context.fillStyle = "black";
    context.font = "25px Arial";
    context.fillText(`Score: ${score}`, 800, 25);

    context.fillStyle = "black";
    context.font = "25px Arial";
    context.fillText(`Lives: ${frog.lives}`, 800, 50); 

    truck.x += 8;
    if (truck.x > canvas.width) {
        truck.x = -20;
    }
    police.x -= 9;
    if (police.x < 0) {
        police.x = canvas.width + 20;
    }
    redcar.x += 6;
    if(redcar.x > canvas.width){
        redcar.x = -20;
    }
    orangecar.x -= 12;
    if(orangecar.x < 0){
        orangecar.x = canvas.width + 20;
    }
    bluecar.x += 10;
    if(bluecar.x >canvas.width){
        bluecar.x = -20;
    }

    if (frog.y < 30){
        frog.x = 430;
        frog.y = 554;
        score += 10;
    }
    if (frog.lives > 0){
        requestAnimationFrame(drawLoop);
    }
}

  // player movements

document.addEventListener("keydown", (event) => {
    switch (event.code) {
      case "ArrowRight":
      case "KeyD":
          if (frog.x < 800) frog.x += 45;
          break;

      case "ArrowLeft":
      case "KeyA":
          if(frog.x > 40) frog.x -= 45;
          break;
    case "ArrowUp":
    case "KeyW":
          if(frog.y > 10) frog.y -= 45;
          break;

    case "ArrowDown":
    case "KeyX":
          if(frog.y < 550) frog.y += 45;
          break;
    }
});


const gameOver = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    drawEverything();
    
    const gameEnd = {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height,
    }
    

   const gameOverImg = new Image();
   gameOverImg.src = "./Images/GameOver.png";
  
   gameOverImg.addEventListener("load", () => {
       context.drawImage(gameOverImg, gameEnd.x, gameEnd.y, gameEnd.width, gameEnd.height);
});

};



drawLoop();
