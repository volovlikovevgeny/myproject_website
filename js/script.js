const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    links.classList.toggle("show-links");
});

function myFunction(x) {
    x.classList.toggle("change");
}

let modal = document.getElementById('myModal');
let btn = document.getElementById('myBtn');
let span = document.getElementsByClassName('close')[0];
let btn2 = document.getElementById('myBtn_2');
let btn3 = document.getElementById('myBtn_3');

let clicking = function () {
    modal.style.display = "block";
}


btn2.addEventListener('click', clicking)




window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}

function cancelFreeConForm(event) {
    console.log(event.keyCode);
    if (event.keyCode == 13) {
        btn.click()
    }
}

window.addEventListener('keypress', cancelFreeConForm)

//SLIDER

var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiper2 = new Swiper('.swiper-container-2', {
    slidesPerView: 3,
    spaceBetween: 20,
    freeMode: true,
    pagination: {
        clickable: true,
    },
});

$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        //Сохраняем значение атрибута href в переменной:
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top//можно вычесть высоту меню
        }, 800);
        return false;
    });
});


function readMore() {
    let dots = document.getElementById('dots');
    let more = document.getElementById('more');
    let visor_btn = document.getElementById('visor_btn');

    let dots2 = document.getElementById('dots2');
    let more2 = document.getElementById('more2');
    let visor_btn2 = document.getElementById('visor_btn2');

    if (dots.style.display == "none") {
        dots.style.display = 'inline';
        dots2.style.display = 'inline';

        visor_btn.innerHTML = 'Подробнее';
        visor_btn2.innerHTML = 'Подробнее';

        more.style.display = 'none';
        more2.style.display = 'none';

    }
    else {
        dots.style.display = 'none';
        dots2.style.display = 'none';

        visor_btn.innerHTML = 'Скрыть';
        visor_btn2.innerHTML = 'Скрыть';

        more.style.display = 'inline';
        more2.style.display = 'inline';
    }
}
















