let block_1_anim = document.querySelector('.videos_block_2_1_num_1'),
    p_1_anim = document.querySelector('.block_1_anim_p_1'),
    p_2_anim = document.querySelector('.block_1_anim_p_2'),
    p_3_anim = document.querySelector('.block_1_anim_p_3'),
    p_num_anim = document.getElementsByClassName('videos_block_2_1_2_cont_1_p_1'),
    p_4_anim = document.getElementsByClassName('block_1_anim_p_4');

let block_2_anim = document.querySelector('.videos_block_2_1_num_2'),
    // line_2_anim=document.querySelector('.videos_block_2_1_line'),
    p1_1_anim = document.querySelector('.block_2_anim_p_1'),
    p2_2_anim = document.querySelector('.block_2_anim_p_2'),
    img2_1_anim = document.getElementsByClassName('block_2_anim_image_1'),
    p2_3_anim = document.getElementsByClassName('block_2_anim_p_3');

let p3_1_anim=document.querySelector('.block_3_anim_p_1'),
    p3_2_anim=document.querySelector('.block_3_anim_p_2'),
    block_3_anim=document.querySelector('.scene');

let block_4_anim=document.querySelector('.stages_container'),
    circle_4=document.getElementsByClassName('stages_num_anim'),
    p4_1_anim=document.getElementsByClassName('stages_span_anim'),
    stages12=document.getElementsByClassName('stages_12_anim');

let block_5_anim=document.querySelector('.scense_container_satages'),
    line_5_anim=document.querySelector('.scene_line_anim'),
    p5_1_anim=document.querySelector('.block_5_anim_p_1'),
    p5_2_anim=document.querySelector('.block_5_anim_p_2'),
    p5_3_anim=document.getElementsByClassName('block_5_anim_p_3'),
    p5_4_anim=document.getElementsByClassName('block_5_anim_p_4'),
    p5_5_anim=document.getElementsByClassName('block_5_anim_p_5');

let block_6_anim=document.querySelector('.stages_container_1_anim'),
    img6_1=document.querySelector('.block_6_img'),
    p6_1_anim=document.getElementsByClassName('block_6_p_1');

let masB=[];

let line_anim=document.getElementsByClassName('videos_block_2_1_line');

window.addEventListener('scroll', function () {

    if (window.innerHeight-block_1_anim.getBoundingClientRect().top>=200 && masB[0]!=1) {
        console.log("Aнимация1 прошла");
        line_anim[0].classList.add('videos_block_2_1_num_1_active');

        setTimeout(function(){
            p_1_anim.classList.add('block_1_anim_p_1_active');
        },1000);

        setTimeout(function(){
            p_2_anim.classList.add('block_1_anim_p_2_active');
        },1500);

        setTimeout(function(){
            p_3_anim.classList.add('block_1_anim_p_3_active');
        },2000);

        setTimeout(function(){
            for (let i = 0; i < p_num_anim.length; i++) {
                p_num_anim[i].classList.add('videos_block_2_1_2_cont_1_p_1_active');
                p_num_anim[i].innerHTML = "00";
            }
            let i = 0;
            let interval2 = setInterval(function () {
                i++;
                if (i <= 30) {
                    p_num_anim[1].innerHTML = i;
                    if (i <= 7) {
                        p_num_anim[2].innerHTML = `0${i}`;
                    }
                    if (i <= 21) {
                        p_num_anim[3].innerHTML = `${i}`;
                    }
                }
                else {
                    clearInterval(interval2);
                    for (let i = 0; i < p_4_anim.length; i++) {
                        p_4_anim[i].classList.add('block_1_anim_p_4_active');
                    }
                }
            }, 20);
        },2500);

        masB[0]=1;
    }

    if (window.innerHeight-block_2_anim.getBoundingClientRect().top >=200 && masB[1]!=1) {
        console.log("Aнимация2 прошла");
        line_anim[1].classList.add('videos_block_2_1_num_2_active');

        setTimeout(function(){
            p1_1_anim.classList.add('block_2_anim_p_1_active');
        },1000);
        setTimeout(function(){
            p2_2_anim.classList.add('block_2_anim_p_2_active');
        },1500);
        setTimeout(function(){
            for (let i = 0; i < img2_1_anim.length; i++) {
                img2_1_anim[i].classList.add('block_2_anim_image_1_active');
            }
        },2000);
        setTimeout(function(){
            for (let i = 0; i < p2_3_anim.length; i++) {
                p2_3_anim[i].classList.add('block_2_anim_p_3_active');
            }
        },2500);
        masB[1]=1;
    }
    
    if(window.innerHeight-block_3_anim.getBoundingClientRect().top >=200 && masB[2]!=1){
        console.log(window.innerHeight-block_3_anim.getBoundingClientRect().top);
        p3_1_anim.classList.add('block_3_anim_p_1_active');

        setTimeout(function(){
            p3_2_anim.classList.add('block_3_anim_p_2_active');
        },4000);

        masB[2]=1;
    }

    if(window.innerHeight-block_4_anim.getBoundingClientRect().top >=200 && masB[3]!=1){
        console.log("анимация 4 сработала");

        let i=0;

        setInterval(function(){

            if(i<circle_4.length){
                circle_4[i].classList.add('stages_num_anim_active');
                p4_1_anim[i].classList.add('stages_span_anim_active');
            }

            i++;

        },300);

        setTimeout(function(){
            stages12[0].classList.add('stages_12_anim_active');
            stages12[1].classList.add('stages_12_anim_active');
        },2400);

        masB[3]=1;
    }

    if(window.innerHeight-block_5_anim.getBoundingClientRect().top>=200 && masB[4]!=1){

        console.log("персечение 5 блока");

        line_5_anim.classList.add('scene_line_anim_active');

        let i=0;

        setTimeout(function(){
            p5_1_anim.classList.add('block_5_anim_p_1_active');
        },1000);
        setTimeout(function(){
            p5_2_anim.classList.add('block_5_anim_p_2_active');
        },1500);
        setTimeout(function(){

            setInterval(function(){
                
                if(i<p5_3_anim.length){
                    p5_3_anim[i].classList.add('block_5_anim_p_3_active');
                    p5_4_anim[i].classList.add('block_5_anim_p_4_active');
                    p5_5_anim[i].classList.add('block_5_anim_p_5_active');
                }
                i++;
                
            },1000)

        },1500);

        masB[4]=1;
    }

    if(window.innerHeight-block_6_anim.getBoundingClientRect().top>=200 && masB[5]!=1){

        img6_1.classList.add('block_6_img_active');
        
        setTimeout(function(){

            for(let i=0;i<p6_1_anim.length;i++){
                p6_1_anim[i].classList.add('block_6_p_1_active');
            }
            
        },2000);

        masB[5]=1;
    }
});

