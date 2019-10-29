'use strict'
document.addEventListener('DOMContentLoaded', function () {
    let btns = document.getElementsByClassName("nav-item");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }

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
    load('html/general.html')
    let jsBtn = document.getElementsByClassName("js-btn");
    jsBtn[0].addEventListener('click', e => load('html/general.html'));    
    jsBtn[1].addEventListener('click', e => load('html/general.html'));
})