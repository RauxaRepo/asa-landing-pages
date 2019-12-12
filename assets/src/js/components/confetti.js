import {gsap, TweenMax, TimelineMax, Power, Linear, Quad} from 'gsap';
import getBreakpoint from './breakpoints';
import random from './draggable-cards';

export default function () {

    //VVRS
    let wrapper = document.querySelector('.confetti-container'),
      colorShuffle = (array) => array.sort(() => Math.random() - 0.5),
      colorArr = ['#55dded','#5599e0','#516673','#aaccdd','#41bbde','#41bbde'],
      num = 100;


		//CONFETTI
		function confettiSpread(){
      for (let i=0; i<num; i++){
        let confetti = document.createElement('div');
        wrapper.appendChild(confetti);
        confetti.style.position = 'absolute';
        confetti.style.backgroundColor = '#ffffff';//colorArr;
				confetti.style.transformOrigin = '50% 50%';
        confetti.style.height = Math.random() * 20 + 'px';//Math.floor( random(4, 16) ) + 'px';
        confetti.style.width = Math.random() * 10 + 'px';//Math.floor( random(4, 10) ) + 'px';
        confetti.style.rotation = Math.random() * -120;
        confetti.style.left = Math.random() * window.innerWidth;
        confetti.style.top = Math.random() * window.innerHeight;
        //confetti.style.zIndex = i+1;
				//TweenMax.to(confetti, 1, {rotation: -3 * i});		
				//console.log(confetti)	
			}
    }

		//RUN FUNCTIONS
    confettiSpread();
        
}

