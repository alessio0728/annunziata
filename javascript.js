

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

    // elements
   var elements_to_watch = document.querySelectorAll('.watch');

   // callback 
   var callback = function(items){
     items.forEach((item) => {
       if(item.isIntersecting){
         item.target.classList.add("in-page");
       } else{
         item.target.classList.remove("in-page");
       }
     });
   }

   // observer
   var observer = new IntersectionObserver(callback, { threshold: 0.6 } );

   // apply
   elements_to_watch.forEach((element) => {
     observer.observe(element); 
   });

     
  
   
   
   
   

