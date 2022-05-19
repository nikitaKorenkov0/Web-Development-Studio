window.addEventListener('load', function () {
    document.querySelector('.mask').style.opacity = "0";
    setTimeout(() => {
        document.querySelector('.mask').remove();
    }, 1000);
});

console.log(this.location.pathname);
let loc = this.location.pathname.split('/');
let loc2 = loc[loc.length - 1].split('.');
console.log(loc2[0]);

window.onload = function () {
    document.querySelector('.animation_onload_container_left_menu').classList.add('animation_onload_container_left_menu_active');
    setTimeout(function () {
        let left_block_animation = document.getElementsByClassName('animation_onload_active_left_block');
        for (let i = 0; i < left_block_animation.length; i++) {
            left_block_animation[i].classList.toggle('animation_onload_active_left_block_active');
        }
    }, 1000);
    setTimeout(function () {
        let block_cont = document.getElementsByClassName('animation_onload_active_block');
        for (let i = 0; i < block_cont.length; i++) {
            block_cont[i].classList.toggle('animation_onload_active_block_active');
        }
    }, 2000);

    if (loc2[0] == "work") {

        document.querySelector('.work_block_div_1_anim').classList.add('work_block_div_1_anim_active');

        setTimeout(function () {
            document.querySelector('.work_block_p_1_anim').classList.add('work_block_p_1_anim_active');
        }, 2000);

        setTimeout(function () {
            document.querySelector('.work_block_p_2_anim').classList.add('work_block_p_2_anim_active');
        }, 3000);

        setTimeout(function () {
            transformB();
        }, 3000);
    }
    else if (loc2[0] == "aboutUs") {

        document.querySelector('.about_us_block_1').style.height = `${window.innerHeight}px`;
        document.querySelector('.about_us_block_3').style.height = `${window.innerHeight/1.5}px`;

        document.querySelector('.about_us_block_2_p_1').classList.add('about_us_block_2_p_1_anim_active');
        let ab_p1=document.getElementsByClassName('about_us_block_2_p_2_anim');
        setTimeout(function(){
            let i=0;
            setInterval(function(){
                if(i<ab_p1.length){
                    ab_p1[i].classList.add('about_us_block_2_p_2_anim_active');
                }
                i++;
            },100);

        },2000);

    }

    else if(loc2[0]=="contact"){
        let elem_contact=document.getElementsByClassName('contact_elem_anim');
        let i=0;
        setInterval(function(){
            if(i<elem_contact.length){
                elem_contact[i].classList.add('contact_elem_anim_active');
            }
            i++;
        },500);
    }

}


function open_left_menu() {

    for (let i = 1; i <= 4; i++) {
        document.querySelector(`.burger_${i}`).classList.toggle(`burger_${i}_active`);
    }

    document.querySelector('.container_burger_menu').classList.toggle('container_burger_menu_active');

    for (let i = 0; i < 5; i++) {
        document.querySelector(`.container_burger_menu_animation_noactive${i}`).classList.toggle('container_burger_menu_animation_active');
    }
    document.querySelector('.container_burger_menu_animation_2').classList.toggle('container_burger_menu_animation_2_active');

    let vidos_anim = document.getElementsByClassName('videos_block_1_header_animation_noactive');
    for (let i = 0; i < vidos_anim.length; i++) {
        vidos_anim[i].classList.toggle('videos_block_1_header_animation_active');
    }
}

let nav_menu = document.querySelector('.container_burger_menu_animation_1_href_dop');
let nav_menu2 = document.getElementsByClassName('container_burger_menu_animation_1_href');

nav_menu.addEventListener('mouseover', function () {
    document.querySelector('.container_burger_menu_animation_3').classList.add('container_burger_menu_animation_3_active');
});
for (let i = 1; i < nav_menu2.length; i++) {
    nav_menu2[i].addEventListener('mouseover', function () {
        document.querySelector('.container_burger_menu_animation_3').classList.remove('container_burger_menu_animation_3_active');
    });
}


window.addEventListener('scroll', transformB);


// наши работы
function transformB() {

    if (loc2[0] == "work") {
        let portfolio_anim = document.getElementsByClassName('portfolio_num_1_anim');

        let image1 = document.getElementsByClassName('portfolio_image_1_anim'),
            p1 = document.getElementsByClassName('portfolio_p_1_anim'),
            p2 = document.getElementsByClassName('portfolio_p_2_anim'),
            p3 = document.getElementsByClassName('portfolio_p_3_anim'),
            p4 = document.getElementsByClassName('portfolio_p_4_anim'),
            p5 = document.getElementsByClassName('portfolio_p_5_anim');

        // console.log(window.innerHeight-portfolio_anim[0].getBoundingClientRect().top);

        for (let i = 0; i < portfolio_anim.length; i++) {

            if (window.innerHeight - portfolio_anim[i].getBoundingClientRect().top >= 200) {

                image1[i].classList.add('portfolio_image_1_anim_active');

                setTimeout(function () {
                    p1[i].classList.add('portfolio_p_1_anim_active');
                }, 1000);
                setTimeout(function () {
                    p2[i].classList.add('portfolio_p_2_anim_active');
                }, 1500);
                setTimeout(function () {
                    p3[i].classList.add('portfolio_p_3_anim_active');
                }, 2000);
                setTimeout(function () {
                    p4[i].classList.add('portfolio_p_4_anim_active');
                }, 2500);
                setTimeout(function () {
                    p5[i].classList.add('portfolio_p_5_anim_active');
                }, 3000);

            }

        }
    }
    else if(loc2[0] =="aboutUs"){

        let image_scroll=document.querySelector('.about_us_block_3');

        let y1=window.innerHeight-image_scroll.getBoundingClientRect().top;
        let y2=image_scroll.getBoundingClientRect().top;
        // console.log(window.innerHeight-image_scroll.getBoundingClientRect().bottom);


        document.querySelector('.about_us_block_3_img').style.marginTop=`${(y1/5)-200}px`;

        let ab_p_2=document.getElementsByClassName('about_us_public_anim'),
            ab_img_1=document.getElementsByClassName('about_us_image1_anim');
        

        for (let i = 0; i < ab_p_2.length; i++) {

            if (window.innerHeight - ab_p_2[i].getBoundingClientRect().top >= 200) {

                ab_p_2[i].classList.add('about_us_public_anim_active');
            }
        }
        for (let i = 0; i < ab_img_1.length; i++) {

            if (window.innerHeight - ab_img_1[i].getBoundingClientRect().top >= 200) {

                ab_img_1[i].classList.add('about_us_image1_anim_active');
            }
        }
    }
    else if(loc[0]=="contact"){
       
    }

}
SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime: 1000,
    // Размер шага в пикселях 
    stepSize: 60,

    // Дополнительные настройки:

    // Ускорение 
    accelerationDelta: 30,
    // Максимальное ускорение
    accelerationMax: 2,

    // Поддержка клавиатуры
    keyboardSupport: true,
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll: 150,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,

    // Поддержка тачпада
    touchpadSupport: true,
});
 const inputElement = document.querySelector('.tel') // ищем наш единственный input
  const maskOptions = { // создаем объект параметров
    mask: '+{7}(000)000-00-00' // задаем единственный параметр mask
  }
  IMask(inputElement, maskOptions) // запускаем плагин с переданными параметрами
