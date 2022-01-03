        document.addEventListener('keypress',(element)=>{
            if(element.key==" "){
                let maincar = document.getElementById("mcar");
                let policecar = document.getElementById("pcar");
                let car1 = document.getElementById("car1");
                let car2 = document.getElementById("car2");
                let car3 = document.getElementById("car3");
                let cloud = document.getElementById("cloud");
                let animaDur1 =6;
                let animaDur2 =8;
                let animaDur3 =10;
                let path = document.getElementById("path");
                let scores = document.getElementById("score");
                let scores1 = document.getElementById("score1");
                let gm = document.getElementById("gm");
                let game = document.getElementById("gameover");
                let pcarpos = 0;
                let Car1=27;
                let Car2=38;
                let Car3=33;
                let calUpMcar = 40;
                let calDownMcar = 28;
                let score = 0;
                // let music = new Audio("audio/carSound.mp3")
                let music =new Audio("audio/siran.wav");
                music.volume = 0.2; 
                music.play();
                    car1.classList.add("Car1");
                    car2.classList.add("Car2");
                    car3.classList.add("Car3");
                    cloud.classList.add("cloud");
                    path.style.display="block";

                document.addEventListener('keypress',(e)=>{
                    if((e.key=="w"||e.key=="W")&&calUpMcar<76){
                        calUpMcar+=4;
                        maincar.style.bottom =calUpMcar+"%";
                    }
                    if(e.key=="s"||e.key=="S"){
                        calUpMcar-=4;
                        maincar.style.bottom =calUpMcar+"%";
                    }
                    if((e.key=="a"||e.key=="A")&&calDownMcar<42){
                        calDownMcar+=4;
                        maincar.style.right =calDownMcar+"%";
                    }
                    if((e.key=="d"||e.key=="D")&&calDownMcar>24){
                        calDownMcar-=4;
                        maincar.style.right =calDownMcar+"%";
                    }
                });

                setInterval(animation,8000)

                function animation(){

                    // car1.classList.remove("Car1");
                    // car2.classList.remove("Car2");
                    // car3.classList.remove("Car3");

                    if(animaDur1>2){
                        animaDur1--;
                        animaDur2--;
                        animaDur3--;
                        car1.style.animationDuration=animaDur1+"s";
                        car2.style.animationDuration=animaDur2+"s";
                        car3.style.animationDuration=animaDur3+"s";
                    }
                    if(pcarpos<20){
                    pcarpos+=3;
                    policecar.style.bottom=pcarpos+"%";}
                    car1.classList.add("Car1");
                    car2.classList.add("Car2");
                    car3.classList.add("Car3");
                }

                setInterval(position,3000);

                function position(){
                    let pos=Math.floor(Math.random()*14);
                    Car1<33?Car1+=pos:Car1-=pos;
                    Car2<33?Car2+=pos:Car2-=pos;
                    // Car3<33?Car3+=pos:Car3-=pos;
                        car2.style.right=Car2+"%";
                        car1.style.right=Car1+"%";
                        // car3.style.right=Car3+"%";
                        // ch.play();
                }

                setInterval(colide,100)
                function colide(){
                    let car1pos= car1.getBoundingClientRect();
                    let car2pos= car2.getBoundingClientRect();
                    let Mcarpos= maincar.getBoundingClientRect();
                    let Pcarpos= policecar.getBoundingClientRect();
                    if(!((Mcarpos.bottom<car1pos.top)||(Mcarpos.top>car1pos.bottom)||(Mcarpos.right<car1pos.left)||(Mcarpos.left>car1pos.right))){
                            gamestop();
                    }
                    if(!((Mcarpos.bottom<car2pos.top)||(Mcarpos.top>car2pos.bottom)||(Mcarpos.right<car2pos.left)||(Mcarpos.left>car2pos.right)))
                    {
                        gamestop();
                }
                    if(!((Mcarpos.bottom<Pcarpos.top)||(Mcarpos.top>Pcarpos.bottom)||(Mcarpos.right<Pcarpos.left)||(Mcarpos.left>Pcarpos.right)))
                    {
                        gamestop();
                }
                }
                let in1= setInterval(Sco,200);
                function Sco(){
                    score++;
                    scores.innerText=score;
                    scores1.innerText=score;
                }
                function gamestop(){
                    clearInterval(in1);
                    gm.innerText="Game Over";
                    game.style.display="flex";
                }}
        });