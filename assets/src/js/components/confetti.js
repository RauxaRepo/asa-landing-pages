import {gsap, TweenMax, TimelineMax, Power, Linear, Quad} from 'gsap';
import getBreakpoint from './breakpoints';

export default function () {

    //let a = window.matchMedia('(max-width: 576px)'),

		//CONFETTI
		function confettiRun(){
      for (var i=0; i<5; i++){
				var confetti = document.createElement('div');
				confetti.id = 'confetti'+i;
				confetti.classList.add('card-pos');
				confetti.style.transformOrigin = '50% 50%';
				confetti.style.zIndex = i+1;
				TweenLite.to(confetti, 1, {rotation: -3 * i});
				wrapper.appendChild(confetti);
				run.idArr.push(confetti.id);
				confetti.style.backgroundColor = '#b3d57d';
				//console.log(confetti)	
			}
    }

		//RUN FUNCTIONS
    //allEventListeners();
        
}

