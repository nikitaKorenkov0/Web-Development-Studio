window.addEventListener('load',function(){
    document.querySelector('.mask').style.opacity="0";
    setTimeout(()=>{
        document.querySelector('.mask').remove();
    },1000);
});

window.onload=function(){

    document.querySelector('.animation_onload_line').classList.add('animation_onload_line_active');

    document.querySelector('.animation_onload_container_left_menu').classList.add('animation_onload_container_left_menu_active');

    setTimeout(function(){
        document.querySelector('.animation_onload_p_1').classList.add('animation_onload_active_p_1');
        let left_block_animation=document.getElementsByClassName('animation_onload_active_left_block');
        for(let i=0;i<left_block_animation.length;i++){
            left_block_animation[i].classList.toggle('animation_onload_active_left_block_active');
        }
    },1000);
    setTimeout(function(){
        document.querySelector('.animation_onload_p_2').classList.add('animation_onload_active_p_2');
        
    },2000); 
    setTimeout(function(){
        document.querySelector('.animation_onload_p_3').classList.add('animation_onload_active_p_3');

        let block_cont=document.getElementsByClassName('animation_onload_active_block');
        for(let i=0;i<block_cont.length;i++){
            block_cont[i].classList.toggle('animation_onload_active_block_active');
        }
        document.querySelector('.videos_block').style.background="rgba(5, 5, 5, 0.400)"; 
    },2500);
};

let videos_block=document.querySelector('.videos_block_1');
let video=document.querySelector('.video_container');
let scene=document.querySelector('.scene');
let empty_cont=document.querySelector('.empty_block');

video.style.height=`${window.innerHeight}px`;
videos_block.style.height=`${window.innerHeight}px`;
scene.style.height=`${window.innerHeight}px`;
empty_cont.style.height=`${window.innerHeight/2}px`;


//отслеживание изменений экрана
window.addEventListener('resize',function(){
    
    videos_block.style.height=`${window.innerHeight}px`;
    video.style.height=`${window.innerHeight}px`;
    scene.style.height=`${window.innerHeight}px`;
    empty_cont.style.height=`${window.innerHeight/2}px`;
   
});

let height_video_block=document.querySelector('.videos_block');
let rgb=999;

let image_cont=document.querySelector('.image_parralax_1');

let empty_block=document.querySelector('.empty_block');

window.addEventListener('scroll',function(){

    let bot=window.innerHeight-height_video_block.getBoundingClientRect().bottom;
    
    if(bot>=0){
        video.style.position="absolute";
        video.style.top=`${height_video_block.getBoundingClientRect().height-video.getBoundingClientRect().height}px`;
    }
    else if(bot<=0){
        video.style.position="fixed";
        video.style.top=`0px`;
    }
    let c=height_video_block.getBoundingClientRect().top;

    if(c>(window.innerHeight/3)*(-1)){
        height_video_block.style.background=`rgba(5, 5, 5, 0.400)`;
    }
    else if(c<(window.innerHeight/3)*(-1) && c>(window.innerHeight/3+50)*(-1)){
        height_video_block.style.background=`rgba(20, 20, 20, 0.200)`;
    }
    else if(c<(window.innerHeight/3+50)*(-1) && c>(window.innerHeight/3+100)*(-1)){
        height_video_block.style.background=`rgba(20, 20, 20, 0.400)`;
    }
    else if(c<(window.innerHeight/3+100)*(-1) && c>(window.innerHeight/3+150)*(-1)){
        height_video_block.style.background=`rgba(20, 20, 20, 0.600)`;
    }
    else if(c<(window.innerHeight/3+150)*(-1) && c>(window.innerHeight/3+200)*(-1)){
        height_video_block.style.background=`rgba(20, 20, 20, 0.800)`;
    }
    else if(c<(window.innerHeight/3+200)*(-1)){
        height_video_block.style.background=`rgb(20, 20, 20)`;
    }
    
   
    if(window.innerHeight-empty_block.getBoundingClientRect().top>=0 && empty_block.getBoundingClientRect().bottom>=0){
        
        console.log("появление изображения");
        document.querySelector('.image_pos_abs').style.opacity="1";
    }
    else{
        document.querySelector('.image_pos_abs').style.opacity="0";
    }

});




function open_left_menu(){

    for(let i=1;i<=4;i++){
        document.querySelector(`.burger_${i}`).classList.toggle(`burger_${i}_active`);
    }

    document.querySelector('.container_burger_menu').classList.toggle('container_burger_menu_active');
    
    for(let i=0;i<5;i++){
        document.querySelector(`.container_burger_menu_animation_noactive${i}`).classList.toggle('container_burger_menu_animation_active');
    }
    document.querySelector('.container_burger_menu_animation_2').classList.toggle('container_burger_menu_animation_2_active');

    let vidos_anim=document.getElementsByClassName('videos_block_1_header_animation_noactive');
    for(let i=0;i<vidos_anim.length;i++){
        vidos_anim[i].classList.toggle('videos_block_1_header_animation_active');
    }
}

let nav_menu=document.querySelector('.container_burger_menu_animation_1_href_dop');
let nav_menu2=document.getElementsByClassName('container_burger_menu_animation_1_href');

nav_menu.addEventListener('mouseover',function(){
    document.querySelector('.container_burger_menu_animation_3').classList.add('container_burger_menu_animation_3_active');
});
for(let i=1;i<nav_menu2.length;i++){
    nav_menu2[i].addEventListener('mouseover',function(){
        document.querySelector('.container_burger_menu_animation_3').classList.remove('container_burger_menu_animation_3_active');
    });
}


document.querySelector('.scene').addEventListener('mouseover',function(){
    document.addEventListener('mousemove',parralax);
});
document.querySelector('.scene').addEventListener('mouseout',function(){
    document.querySelectorAll('.layer').forEach(layer => {
        layer.style.transition="3s";
        layer.style.transform=`translateX(${0}px)`;
    });
    document.removeEventListener('mousemove',parralax);
});
function parralax(event){
    document.querySelectorAll('.layer').forEach(layer => {
        layer.style.transition="0s";
        let speed=layer.getAttribute('data-speed')
        layer.style.transform=`translateX(${event.clientX*speed/1000}px)`;
    });
}

function open_slider(num){
    for(let i=1;i<=4;i++){
        document.querySelector(`.image_site_${i}`).style.opacity="0";
        document.querySelector(`.image_site_1_${i}`).style.opacity="0";
    }
    document.querySelector(`.image_site_${num}`).style.opacity="1";
    document.querySelector(`.image_site_1_${num}`).style.opacity="1";
}

let p1=document.querySelector('.reviews_block_p_public_1'),
    p2=document.querySelector('.reviews_block_p_public_2'),
    p3=document.querySelector('.reviews_1_2_p_public');

let number=1;
p1.innerHTML=document.querySelector(`.reviews_block_opac_${number}`).innerHTML;
p2.innerHTML=document.querySelector(`.reviews_block_opac_${number}_us`).innerHTML;
p3.innerHTML=document.querySelector(`.reviews_1_2_p_${number}`).innerHTML;
function scroll_reviews(num){
    
    if(num==1){
        if(number==1){
            number=3;
        }
        else{
            number--;
        }
    }
    else if(num==2){
        if(number<3){
            number++;
        }
        else{
            number=1;
        }
    }
    p1.innerHTML=document.querySelector(`.reviews_block_opac_${number}`).innerHTML;
    p2.innerHTML=document.querySelector(`.reviews_block_opac_${number}_us`).innerHTML;
    p3.innerHTML=document.querySelector(`.reviews_1_2_p_${number}`).innerHTML;
    document.querySelector('.reviews_1_1_number').innerHTML=number+"/3";
}

let Elem=document.getElementsByClassName('faq_block_2');
let masElem=[];
for(let i=0;i<Elem.length;i++){
    masElem[i]=0;
}
function faq(num){
    
    let heightElem=Elem[num-1].getBoundingClientRect().height;
    let cont_faq=document.getElementsByClassName('faq_block_3');
    let pluse=document.getElementsByClassName('faq_block_1_im_cont');
    // Elem.classList.toggle('faq_block_2_active');
    
    console.log(heightElem);
    if(masElem[num-1]==0){
        cont_faq[num-1].style.height=`${heightElem+100}px`;
        masElem[num-1]=1;
    }
    else{
        cont_faq[num-1].style.height=`${100}px`;
        masElem[num-1]=0;
    }
    pluse[num-1].classList.toggle('faq_block_1_im_cont_active');
}




