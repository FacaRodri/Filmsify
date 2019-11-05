'use strict'
function game404(){
    window.location.href = 'game404.html';
  }
document.addEventListener('DOMContentLoaded', function () {
    
    let btns = document.getElementsByClassName("nav-item");
    let nav = document.getElementsByClassName("navbar-collapse");

    function load(urlPartial) {
        fetch(urlPartial).then(
            function (response) {
                response.text().then(
                    function (texto) {
                        document.querySelector('.cuerpo').innerHTML = texto;
                    }
                )
            }
        )
    }
    load('html/general.html');
    //botones principales
    let jsBtn = document.getElementsByClassName("js-btn");
    jsBtn[0].addEventListener('click', e => load('html/general.html'));
    jsBtn[1].addEventListener('click', e => load('html/general.html'));
    jsBtn[2].addEventListener('click', e => load('html/peliculas.html'));
    jsBtn[3].addEventListener('click', e => load('html/series.html'));
    jsBtn[4].addEventListener('click', e => load('html/favoritos.html'));







    let menuBtn = document.getElementsByClassName("navbar-toggler");
    let icon = document.getElementsByClassName("material-icons");
    menuBtn[0].addEventListener('click', function () {
        if (menuBtn[0].classList.contains("burger")) {
            menuBtn[0].classList.remove("burger");
            icon[0].innerHTML = "menu";
        } else {
            icon[0].innerHTML = "close";
            menuBtn[0].classList.add("burger");
        }
    });

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
            if (nav[0].classList.contains("show")) {
                nav[0].classList.remove("show");
                menuBtn[0].classList.remove("burger");
                icon[0].innerHTML = "menu";
            }
        });
    }
    let ics = document.getElementsByClassName("ics");
    for (let i = 0; i < ics.length; i++) {
        ics[i].addEventListener('click', e => e.preventDefault());
    }
})

