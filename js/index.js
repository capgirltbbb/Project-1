const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d")

let score = 0;
let lives = 3;

const backgroundImg = new Image();
backgroundImg.src = "./Images/Happy Hopper Background.png";

//player

const frog = {
    x: 425,
    y: 555,
    width: 50,
    height: 45,
};

//obstacle

const truck = {
    x: 0,
    y: 420,
    width: 100,
    height: 40,
}

const police = {
    x: 0,
    y: 465,
    width: 75,
    height: 40,
}

const redcar = {
    x:0,
    y: 510,
    width: 75,
    height: 40,
}

const bluecar = {
    x: 0,
    y: 375,
    width: 75,
    height: 40,
}

const orangecar = {
    x: 0,
    y: 325,
    width: 75,
    height: 40,
}


const frogImg = new Image();
frogImg.src = "./Images/istockphoto-473243362-612x612.jpg";


const truckImg = new Image();
truckImg.src = "./Images/Yellow Truck.png";


const policeImg = new Image();
policeImg.src = "./Images/Police Car.jpg";


const redcarImg = new Image();
redcarImg.src = "./Images/Red Car.jpg";


const bluecarImg = new Image();
bluecarImg.src = "./Images/Blue Car.png";

const orangecarImg = new Image();
orangecarImg.src = "./Images/Orange Car.png";



const drawEverything = () => {
    context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
    context.drawImage(frogImg, frog.x, frog.y, frog.width, frog.height);
    context.drawImage(truckImg, truck.x, truck.y, truck.width, truck.height);
    context.drawImage(policeImg, police.x, police.y, police.width, police.height);
    context.drawImage(redcarImg, redcar.x, redcar.y, redcar.width, redcar.height);
    context.drawImage(bluecarImg, bluecar.x, bluecar.y, bluecar.width, bluecar.height);
    context.drawImage(orangecarImg, orangecar.x, orangecar.y, orangecar.width, orangecar.height);

    context.fillstyle = "black";
    context.font = "25px Arial";
    context.fillText(`Score: ${score}`, 800, 50);

    context.fillstyle ="black";
    context.font ="25px Arial";
    context.fillText(`Lives: ${lives}`, 800, 75);
};

drawEverything();



const drawLoop = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    drawEverything();

    truck.x += 10;
    if(truck.x > canvas.width){
        truck.x = -canvas.width;
    }
    police.x += 8;
    if(police.x > canvas.width){
        police.x = -canvas.width;
    }
    redcar.x += 5;
    if(redcar.x > canvas.width){
        redcar.x = -canvas.width;
    }
    orangecar.x += 7;
    if(orangecar.x > canvas.width){
        orangecar.x = -canvas.width;
    }
    bluecar.x += 12 ; 
    if(bluecar.x > canvas.width){
        bluecar.x = -canvas.width;
    }

    requestAnimationFrame(drawLoop);
};

drawLoop();



document.addEventListener("keydown", (event) => {
    switch (event.code) {
        case "ArrowUp":
        case "KeyW":
            frog.y -= 45;
            console.log(frog)
            break;
        
        case "ArrowDown":
        case "KeyX":
            if(frog.y < canvas.height) frog.y += 45;
            console.log(frog)
            break;

        case "ArrowLeft":
        case "KeyA":
            if(frog.x > 25) frog.x -= 45;
            break;

        case "ArrowRight":
        case "KeyD":
            if(frog.x < canvas.width) frog.x += 45;
            break;
    };      
});




