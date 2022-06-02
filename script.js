const dino = document.querySelector('.dino');
const background = document.querySelector('.background')

//console.log(dino);

let printCactus = false
let isJump = false;

let pontos=0;
let positionDino = 0;
let cactusPosition = 900;
let velocidadeCactus = 10;
document.addEventListener('keyup',handleKeyUp) ;



function handleKeyUp(event){
    if (event.keyCode === 32){      
        if (!isJump){
        console.log(isJump);
        jump();
        }
    }
}

function jump(){
    
    isJump = true;
    let upInterval = setInterval (() => {    
        if (positionDino > 200) {
            clearInterval(upInterval);
            //descendo
            let downInterval = setInterval (() => {
                if (positionDino <= 0){
                    isJump = false;
                    clearInterval(downInterval);
                } else {
                positionDino-=20; 
                dino.style.bottom = positionDino + 'px'; 
                }  
            },20);

        }else{
            //Subindo
            positionDino+=20;
            dino.style.bottom = positionDino + 'px'; 

        }
    },20);  
}

function createCactus(){

        const cactus = document.createElement('div');
        let cactusPosition = 1500;
        
        cactus.classList.add('cactus');
        cactus.style.left= cactusPosition +'px';
        background.appendChild(cactus);
        

        let leftInterval = setInterval (() => {        
            if(cactusPosition < -60){             
                clearInterval(leftInterval);
                background.removeChild(cactus);
                pontos++;
                document.getElementById("pontos").innerHTML = "Pontos: " + pontos;
            }else if  (cactusPosition <= 60 && cactusPosition >=0 && positionDino < 60 ){
                clearInterval(leftInterval);
                background.removeChild(cactus);
                document.body.innerHTML = "<h1 class='gameOver'> Fim de jogo - Você fez " + pontos+ " pontos</h1>"
            }else{
                cactusPosition -=velocidadeCactus;
                cactus.style.left = cactusPosition + 'px';     
            }
        },20);
        
        setTimeout(createCactus, (Math.random()*5000)+700);       
       
}

function aumentaVelocidade(){
velocidadeCactus = velocidadeCactus + 2;
document.getElementById("velocidade").innerHTML = "Velocidade: " + velocidadeCactus;
}


setInterval(aumentaVelocidade, 10000);


createCactus();


