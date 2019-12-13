import {gsap, TweenMax, TimelineMax, Power, Linear, Quad} from 'gsap';
import getBreakpoint from './breakpoints';

export default function () {

    //VARS
    let wrapper = document.querySelector('.confetti-container'),
      width = window.innerWidth,
      height = window.innerHeight,
      colorArr = ['#55dded','#5599e0','#516673','#aaccdd','#41bbde','#41bbde','#ffffff','#f00000', '#ffff00'],
      confettiArr = [],
      num = 1000;


		//CONFETTI
		function confettiBuild(){
      for (let i=0; i<num; i++){
        let confetti = document.createElement('div');
        confettiArr.push(confetti);
        wrapper.appendChild(confetti);
        confetti.style.position = 'absolute';
        confetti.style.backgroundColor = colorArr[Math.floor(Math.random() * colorArr.length)];
        confetti.style.height = Math.random() * 20 + 'px';
        confetti.style.width = Math.random() * 10 + 'px';
        gsap.set(confetti,{x:Math.random() * width, y:Math.random() * height - (height + 10), rotation:Math.random() *45, scale: Math.random() * 1.2});
				//console.log(' confetti ', i);
			}
    }

    function confettiRain(){
      confettiArr.forEach(function(item,index){
				//randomize confetti z index
				item.style.zIndex = Math.floor( Math.random() * 2 );
        gsap.to(item, {
          duration: 3,
          delay: .005 * index, 
          top: '+=210vh', 
          ease:'sine.in'
        })
				
			})

    }

		//RUN FUNCTIONS
    confettiBuild();
    confettiRain();
        
}

