import {gsap, TweenMax, TimelineMax, Power, Linear, Quad} from 'gsap';
import getBreakpoint from './breakpoints';
import getClosest from './closest';

export default function () {

    let sm = window.matchMedia('(max-width: 576px)');
    // Get all the Meters from SVG
    const meters = document.querySelectorAll('svg[data-value] .meter');
    //Percentages
    let percentage = {
        1: 125,
        2: 120,
        3: 80,
        4: 60,
        5: 0
    };

		//COUNTER
		function counterMotion(){
			meters.forEach( (path) => {
                // Get the length of the path
                let length = path.getTotalLength();
                // console.log(length) once and hardcode the stroke-dashoffset and stroke-dasharray in the SVG if possible 
                // or uncomment to set it dynamically
                // path.style.strokeDashoffset = length;
                // path.style.strokeDasharray = length;
              
                // Get the value of the meter
                let value = parseInt(path.parentNode.getAttribute('data-value'));
                // Calculate the percentage of the total length
                let to = length * ((0 - value) / 100);
                // Trigger Layout in Safari hack https://jakearchibald.com/2013/animated-line-drawing-svg/
                path.getBoundingClientRect();
                // Set the Offset
                path.style.strokeDashoffset = Math.max(0, to);  
              });
        }
        
        function getPercentage(){

        }
		
		//MATCH MEDIA
		function media576Px(){
			if( sm.matches ){
				//console.log('rightBounds ',rightBounds, ' leftBounds ',leftBounds);
			}
		}

		//All EVENTLISTENERS
		function allEventListeners(){
			sm.addListener(media576Px);
		}


		//RUN FUNCTIONS
        //allEventListeners();
        
}

