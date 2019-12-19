import {gsap, TweenMax, TimelineMax, Power, Linear, Quad} from 'gsap';


    //VARS
    let wrapper = document.querySelector('.confetti-container'),
        burstWrapper = document.querySelector('.confetti-container--burst'),
        width = window.innerWidth,
        height = window.innerHeight,
        colorArr = ['#55dded','#5599e0','#516673','#aaccdd','#41bbde','#41bbde','#ffffff','#445567', '#52d521'],
        confettiArr = [],
        confettiArrBurst = [],
        num = 800,
        tl = gsap.timeline({repeat:0, repeatDelay:0});


    //RANDOM MIN MAX
		function random(min, max) {
			return min + Math.random() * (max - min);
    }
    
    //resize width for confetti rain
    window.addEventListener('resize', function() {
      width = window.innerWidth;
      height = window.innerHeight;
    }, true);


    const confetti = {

      buildRain: () => {

        for (let i=0; i<num; i++){
          let confetti = document.createElement('div');
          wrapper.appendChild(confetti);
          confetti.style.position = 'absolute';
          confetti.style.backgroundColor = colorArr[Math.floor(Math.random() * colorArr.length)];
          confetti.style.height = Math.random() * 20 + 'px';
          confetti.style.width = Math.random() * 10 + 'px';
          gsap.set(confetti,{x:Math.random() * width, y:Math.random() * height - (height + 50), rotation:Math.random() *45, scale: Math.random() * 1.2});
          confettiArr.push(confetti);
          //console.log(' confetti ', i);
        }

      },

      buildBurst: () => {

        for (let i=0; i<300; i++){
          let confettib = document.createElement('div');
          burstWrapper.appendChild(confettib);
          confettib.style.transform = 'scale(0)';
          confettib.style.transformOrigin = '50% 50%';
          confettib.style.position = 'absolute';
          confettib.style.zIndex = Math.floor( Math.random() * 2 );
          confettib.style.backgroundColor = colorArr[Math.floor(Math.random() * colorArr.length)];
          confettib.style.height = Math.random() * 20 + 'px';
          confettib.style.width = Math.random() * 10 + 'px';
          gsap.set(confettib,{rotation:Math.random() * 45});
          confettiArrBurst.push(confettib);
          
        }

      },

      rain: () => {

        confettiArr.forEach(function(item, index){
          item.style.zIndex = Math.floor( Math.random() * 2 );
          gsap.to(item, {
            duration: 3,
            delay: .005 * index, 
            y: '+=220vh', 
            rotation: Math.floor(Math.random() * -180),
            ease:'sine.in',
            onComplete: function(){
              gsap.set(item, {
                y: Math.random() * height - (height + 50)
              });
          }})  
        });

      },

      burst: () => {

        confettiArrBurst.forEach(function(item, index){
          gsap.to(item, {
            duration: 0.5,
            delay: .02 * index, 
            y: Math.floor( random(-150, -200)),
            left: Math.floor( random(200, -200)),
            rotation: Math.floor( random(10, -360)),
            scale: Math.random() * 1.2,
            ease:'sine.in',
            onComplete: function(){
              gsap.to(item, {
                duration: 0.5, 
                delay: .001 * index,
                rotation: Math.floor( random(10, -360)), 
                top: '+=200', 
                opacity: 0, 
                ease:'sine.in',
                onComplete: function(){
                  gsap.set(item, {
                    left: 0,
                    top: 0,
                    scale: 0
                  });
              }});
          }});
          //gsap.to(item, {duration:.5, delay:.02 * index,x:'+=100%',yoyo:true});	
        });

      },

    };



export { confetti };
        

