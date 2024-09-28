
let rojo;
let amarillo;
let verde;
let azul;

let iniciar;
let reiniciar

let jugada=[];
let secuencia=[];

let a
let p

let ronda=0
let rond



 setup=()=>{
    createCanvas(800, 600);
    background(0);


    rojo=createSprite(190,190,190,190)
    rojo.shapeColor=color(90,0,0)
    rojo.onMousePressed= (rojoon)
    rojo.onMouseReleased= function(){
    rojo.shapeColor=color(90,0,0)
    jugada.push(1)
    console.log(jugada) 
    comparar()}
    

    amarillo=createSprite(390,190,190,190)
    amarillo.shapeColor=color(90,90,0)
    amarillo.onMousePressed= (amarilloon)
    amarillo.onMouseReleased= function(){
    amarillo.shapeColor=color(90,90,0)
    jugada.push(2)
    console.log(jugada)
    comparar()}
        

    verde=createSprite(190,390,190,190)
    verde.shapeColor=color(0,90,0)
    verde.onMousePressed= (verdeon)
    verde.onMouseReleased= function(){
    verde.shapeColor=color(0,90,0)
    jugada.push(3)
    console.log(jugada)
    comparar()
}
        

    azul=createSprite(390,390,190,190)
    azul.shapeColor=color(0,0,90)
    azul.onMousePressed= (azulon)
    azul.onMouseReleased= function(){
    azul.shapeColor=color(0,0,90)
    jugada.push(4)
    console.log(jugada)
    comparar()}

    iniciar=createButton(`INICIAR`)
    iniciar.position(180,500)
    iniciar.mousePressed(numer)
    iniciar.size(100,40)
    iniciar.style(`font-size`,`20px`)

    reiniciar=createButton(`REINICIAR`)
    reiniciar.position(300,500)
    reiniciar.mousePressed(reinicia)
    reiniciar.size(115,40)
    reiniciar.style(`font-size`,`20px`)
    
    rondas()
    
    
}

reinicia=()=>{
    secuencia=[]
    jugada=[]
    ronda=0
    rondas()
    
    
}
numer=()=>{
    a=ceil(random(0,4))
    secuencia.push(a)
    console.log(secuencia)
    
    setTimeout(sec,1)
    
}

sec=()=>{
    
    for(i=0;i<secuencia.length;i++){
        if(secuencia[i]==1){
            setTimeout(rojoon,2000)
            setTimeout(rojooff,3000)
            
            
        } 
        
        if(secuencia[i]==2){
            setTimeout(amarilloon,2000)
            setTimeout(amarillooff,3000)
            
        } 
        if(secuencia[i]==3){
            setTimeout(verdeon,2000)
            setTimeout(verdeoff,3000)
            
        } 
        if(secuencia[i]==4){
            setTimeout(azulon,2000)
            setTimeout(azuloff,3000) 
            
        }} 
        
        
    }
    
    rondas=()=>{
       fill(0)
        square(570,110,50.50)
        ronda++
        textSize(50)
        strokeWeight(900)
        fill(255)
        text(`Ronda: ` + ronda,550,100)
        
        
    }

    
    
    comparar1 = (array1, array2) => {
        if (array1.length !== array2.length) {
            return false
        }
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) {
                    return false
                }
            }
            return true
        }
        
        comparar = () => {
            if (jugada.length === secuencia.length) {
                if (comparar1(jugada, secuencia)) {
                    rondas()
                    numer()
                    jugada=[]
                } else {
                  
                   alert( `Perdiste`);
                   ronda=0
                       rondas()
                }
            }
        }


rojooff=()=>{
    rojo.shapeColor=color(90,0,0)
    amarillo.shapeColor=color(90,90,0)
    verde.shapeColor=color(0,90,0)
    azul.shapeColor=color(0,0,90)
         
    setTimeout(i=0,3000)
}


rojoon=()=>{
    rojo.shapeColor=color(255,0,0)
    amarillo.shapeColor=color(90,90,0)
    verde.shapeColor=color(0,90,0)
    azul.shapeColor=color(0,0,90)
       
    setTimeout(i=0,1000)

    
}

amarilloon=()=>{
    rojo.shapeColor=color(90,0,0)
    amarillo.shapeColor=color(255,255,0)
    verde.shapeColor=color(0,90,0)
    azul.shapeColor=color(0,0,90)

}

amarillooff=()=>{
    rojo.shapeColor=color(90,0,0)
    amarillo.shapeColor=color(90,90,0)
    verde.shapeColor=color(0,90,0)
    azul.shapeColor=color(0,0,90)
         
    setTimeout(i=0,1000)
}

verdeon=()=>{
    rojo.shapeColor=color(90,0,0)
    amarillo.shapeColor=color(90,90,0)
    verde.shapeColor=color(0,255,0)
    azul.shapeColor=color(0,0,90)    

}

verdeoff=()=>{
    rojo.shapeColor=color(90,0,0)
    amarillo.shapeColor=color(90,90,0)
    verde.shapeColor=color(0,90,0)
    azul.shapeColor=color(0,0,90)   
         
    setTimeout(i=0,1000) 
}

azulon=()=>{
    rojo.shapeColor=color(90,0,0)
    amarillo.shapeColor=color(90,90,0)
    verde.shapeColor=color(0,90,0)
    azul.shapeColor=color(0,0,255)  

}
azuloff=()=>{
    rojo.shapeColor=color(90,0,0)
    amarillo.shapeColor=color(90,90,0)
    verde.shapeColor=color(0,90,0)
    azul.shapeColor=color(0,0,90)  
         
    setTimeout(i=0,1000)  
}


    
    draw=()=> {
        drawSprites()
       
    }