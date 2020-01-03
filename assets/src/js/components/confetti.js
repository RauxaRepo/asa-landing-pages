import {gsap, TweenMax, TimelineMax, Power, Power4, Linear, Quad} from 'gsap';


    //VARS
    let wrapper = document.querySelector('.confetti-container'),
        burstWrapper = document.querySelector('.confetti-container--burst'),
        width = window.innerWidth,
        height = window.innerHeight,
        confettiArr = [],
        confettiArrBurst = [],
        num = 650,
        colors = ['red','green','blue','yellow','orange','pink','purple','white','black','white'],
        finalHex = colors[Math.floor(Math.random() * colors.length)],
        //ussr agent
        ua = window.navigator.userAgent,
        msie = ua.indexOf('MSIE');


    //RANDOM MIN MAX
		function random(min, max) {
			return min + Math.random() * (max - min);
    }

    function setAttributes(el, attrs) {
      Object.keys(attrs).forEach(key => el.setAttribute(key, attrs[key]));
    }
    
    //resize width for confetti rain
    window.addEventListener('resize', function() {
      width = window.innerWidth;
      height = window.innerHeight;
    }, true);


    const confetti = {

      buildRain: () => {

        for (let i=0; i<num; i++){
          //if IE
          if (Object.hasOwnProperty.call(window, 'ActiveXObject') && !window.ActiveXObject) {
            let confetti = document.createElement('div');
            confetti.className += 'confetti-svg';
            wrapper.appendChild(confetti);
            confetti.style.position = 'absolute';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.height = Math.random() * 20 + 'px';
            confetti.style.width = Math.random()  * 10 + 'px';
            confetti.style.zIndex = Math.floor( Math.random() * 20 );
            gsap.set(confetti,{
              x:Math.random() * width, 
              y:Math.random() * height - (height + 50), 
              rotation:Math.random() *45, 
              scale: Math.random() * 1.2
            });
            confettiArr.push(confetti);
          }
          else {
            let xmlns = 'http://www.w3.org/2000/svg';
            let confetti = document.createElementNS(xmlns, 'svg');
            confetti.classList.add('confetti-svg');
            wrapper.appendChild(confetti);
            confetti.style.position = 'absolute';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.height = Math.random() * 20 + 'px';
            confetti.style.width = Math.random()  * 10 + 'px';
            confetti.style.zIndex = Math.floor( Math.random() * 20 );
            gsap.set(confetti,{
              x:Math.random() * width, 
              y:Math.random() * height - (height + 50), 
              rotation:Math.random() *45, 
              scale: Math.random() * 1.2
            });
            confettiArr.push(confetti);
          }

          
          //console.log(' confetti ', i);
        }

      },

      buildBurst: () => {

        for (let i=0; i<200; i++){
          //if IE
          if (Object.hasOwnProperty.call(window, 'ActiveXObject') && !window.ActiveXObject) {
            let confettib = document.createElement('div');
            confettib.className += 'confetti-svg';
            burstWrapper.appendChild(confettib);
            confettib.style.position = 'absolute';
            confettib.style.transform = 'scale(0)';
            confettib.style.transformOrigin = '50% 50%';
            confettib.style.zIndex = Math.floor( Math.random() * 2 );
            confettib.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confettib.style.height = Math.random() * 20 + 'px';
            confettib.style.width = Math.random() * 10 + 'px';
            gsap.set(confettib,{rotation:Math.random() * 45});
            confettiArrBurst.push(confettib);
          }
          else {
            let xmlns = 'http://www.w3.org/2000/svg';
            let confettib = document.createElementNS(xmlns, 'svg');
            confettib.classList.add('confetti-svg');
            burstWrapper.appendChild(confettib);
            confettib.style.position = 'absolute';
            confettib.style.transform = 'scale(0)';
            confettib.style.transformOrigin = '50% 50%';
            confettib.style.zIndex = Math.floor( Math.random() * 2 );
            confettib.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confettib.style.height = Math.random() * 20 + 'px';
            confettib.style.width = Math.random() * 10 + 'px';
            gsap.set(confettib,{rotation:Math.random() * 45});
            confettiArrBurst.push(confettib);
          }
        
          
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
            duration: 0.6,
            delay: .009 * index, 
            y: Math.floor( random(-150, -200)),
            x: Math.floor( random(200, -200)),
            rotation: Math.floor( random(10, -360)),
            scale: Math.random() * 1.005,
            ease:'sine.inOut',
            onComplete: function(){
              gsap.to(item, {
                duration: 2.5, 
                delay: .001 * index,
                rotation: Math.floor( random(10, -360)), 
                y: '+=185vh', 
                //opacity: 0, 
                ease:'sine.inOut',
                onComplete: function(){
                  gsap.set(item, {
                    left: 0,
                    top: 0,
                    scale: 0
                  });
              }});
          }});
        });

      },

    };
    
export { confetti };
