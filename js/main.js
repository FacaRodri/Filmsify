'use strict'
document.addEventListener('DOMContentLoaded', function(){
    function load(urlPartial){
        fetch(urlPartial).then(
            function(response){
                response.text().then(
                    function(texto){
                        document.querySelector('.cuerpo').innerHTML=texto;
                    }
                )
            }
        )
    }

    load('html/inicio.html')
    let botones = document.querySelectorAll('js-btn');
    //botones[0]=addEventListener('click', e=> load('html/'));






})