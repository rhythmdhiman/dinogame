// for function you should be good at  javascript 


score =0;

cross=true;

//we delcare score as a global varible 

audio =new Audio('music.mp3');
audigo= new Audio('gameover.mp3');
audio.play();




document.onkeydown= function(e){
    console.log("key code is :",e.keyCode)
    if(e.keyCode==38){
        dino=document.querySelector('.dino');
        dino.classList.add('animateDino');
        //at that instance we will be adding properties 
        //of another class to the dino class object so  found
        setTimeout(() => {
            dino.classList.remove('animateDino');
            // logic here is that only
            //class lagne se dino kudega
             
            
        }, 700);
        //query selector will give the first element which have dino clas

    }
    if(e.keyCode==39){
       //here we are providing the dino to move infront also 
       //by adding another animatrion 
       //when presss the forward arrow key 
       dino=document.querySelector('.dino');
       dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
       dino.style.left=(dinoX+112)+"px";

       //dinox is computed value of x at that time 


    }

    if(e.keyCode==37){
        dino=document.querySelector('.dino');
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=(dinoX-112)+"px";

        //we are basically setting a property at that time 

    }
}
// ýou should be able to understand the javscript functionalyt code 
//so that you modify and innovate it 


setInterval(() => {
    // this will check collision after 
    dino=document.querySelector('.dino');
    gameOver=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');
    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    // the above line of code will give computed left distanc of dino 
    //dx will give current x value 
    dy=parseInt(window.getComputedStyle(dino ,null).getPropertyValue('bottom'));
    
    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    // the above line of code will give computed left distanc of dino 
    //dx will give current x value 
    oy=parseInt(window.getComputedStyle(obstacle ,null).getPropertyValue('bottom'));


    //now we will caclute absoulte diff to detect collisons 
    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);
 


    //dino needs to make a distance from the obstacle
    if(offsetX<73 && offsetY<52){
        gameOver.innerHTML="Game over -reload to start over"
        
        obstacle.classList.remove('obstacleAni')
        //this block is for gameover 
        audigo.play();
        setTimeout(() => {
            audigo.pause();
            audio.pause();
            
            
        }, 1000);
        // by default you should make your game over hidden 

    }else if( offsetX<145   && cross){
        audio.play();
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 1000);
        //here you need to undersrt
        //here we have made cross boolean variable 
        // so that we score is update only under certain condtions 
        //not everytime
        //to increase speed of obstacle with time 
        //like what happens in usual games 
        //we can less the animation duration for the obstacle 
        setTimeout(() => {
            
            aniDur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newDur=aniDur-0.3;
            obstacle.style.animationDuration=newDur+'s';
        }, 500);


    }


    
}, 10);



function updateScore(score){
    scoreCont.innerHTML="your score:"+score
    
}
