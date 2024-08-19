

    document.addEventListener('DOMContentLoaded', function() {
        const grid = document.querySelector('.grid');
        const col33Elements = document.querySelectorAll('.col-33');

        col33Elements.forEach(function(col33) {
            col33.addEventListener('click', function() {
                if (grid.style.animationPlayState === 'paused') {
                    grid.style.animationPlayState = 'running';
                } else {
                    grid.style.animationPlayState = 'paused';
                }
            });
        });
    });


    //MARCHETTI NON FUNZIONA//

    ScrollReveal().reveal('.reveal', { distance: '50px' });

     
  
   
   
   
   

