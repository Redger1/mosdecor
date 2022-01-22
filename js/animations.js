document.addEventListener("DOMContentLoaded", ()=>{
    var waypoint = new Waypoint({
        element: document.getElementsByClassName('samples')[0],
        handler: anim_LeftToRight(document.getElementsByClassName('header__wrapper')[0])
      })
    
    function anim_LeftToRight(header){
        anime({
            targets: header,
            easing: 'easeInOutQuad',
            translateX: [-100, 0],
            opacity: [0, 1],
            delay: 300,
          });
    }
})
