document.addEventListener("DOMContentLoaded", ()=>{
    var samplesSection = new Waypoint({
      element: document.getElementsByClassName('samples'),
      handler: anim_Section(document.getElementsByClassName('anim-header')[0], document.getElementsByClassName('anim-subHeader')[0]),
      offset: 40 
    })

    var worksSection = new Waypoint({
      element: document.getElementsByClassName('works'),
      handler: anim_Section(document.getElementsByClassName('anim-header')[1], document.getElementsByClassName('anim-subHeader')[1]),
      offset: 40
    })
    
    function anim_LeftToRight(header, delay){
        anime({
            targets: header,
            easing: 'easeInOutQuad',
            translateX: [-100, 0],
            opacity: [0, 1],
            delay: delay,
          });
    }

    function anim_Opacity(subHeader, delay){
      anime({
        targets: subHeader,
        easing: 'easeInOutQuad',
        opacity: [0, 1],
        delay: delay,
      })
    }

    function anim_Section(a, b){
      anim_LeftToRight(a, 700);
      anim_Opacity(b, 1000);
    }
})
