import {gsap, TweenMax, TimelineMax, Power, Linear, Quad} from 'gsap';
import getBreakpoint from './breakpoints';
import getClosest from './closest';

export default function () {

    let sm = window.matchMedia('(max-width: 576px)'),
    //percentage for progress counter
    thePercentage = 0;
    // Get all the Meters from SVG
    const meters = document.querySelectorAll('svg[data-value] .meter');
    //Percentages
    let percentage = {
        1: 174,
        2: 167,
        3: 160,
        4: 153,
        5: 137,
        6: 125,
        7: 118,
        8: 106,
        9: 95,
        10: 50  
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
        let to = length * ((thePercentage - value) / 100);
        // Trigger Layout in Safari hack https://jakearchibald.com/2013/animated-line-drawing-svg/
        path.getBoundingClientRect();
        // Set the Offset
        path.style.strokeDashoffset = Math.max(0, to);  
      });
    }
    

    //PROGRESS OF THE COUNTER
    function getPercentage(){
      Object.keys(percentage).forEach(key=> {
        //console.log('percentage ', percentage[key]);
      });
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
    counterMotion();
    getPercentage();
        
}

