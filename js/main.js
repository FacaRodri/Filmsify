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
    
    
    load('html/suscribirse3.html');
    let suscribirse1 = document.querySelector(".btn-suscribirse");
    suscribirse1.addEventListener('click', e=> load('html/suscribirse1.html'));
})