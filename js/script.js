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

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

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

let btn_next = document.getElementsByClassName('swiper-button-next')[0];
let btn_prev = document.getElementsByClassName('swiper-button-prev')[0];


let close_btn = document.getElementsByClassName('close')[0];


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

















