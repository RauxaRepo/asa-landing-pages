import {gsap, TweenMax, TimelineMax, Power, Linear} from 'gsap';
import getBreakpoint from './breakpoints';
//getBreakpoint('md');

export default function () {

  let cardHolder = document.querySelector('.cards');
  let cardCount = 40;
  let cardBgCounter = 0;
  let cardXCounter = 0;
  let cardYCounter = 0;
  let cardType = [
    'tropical',
    'midnight',
    'breezecard',
    'palm'
  ]

  let cardX = [
    '-250%',
    '-150%',
    '-50%',
    '50%',
    '150%'
  ]

  let cardY = [
    '-450%',
    '-350%',
    '-250%',
    '-150%',
    '-50%',
    '50%',
    '150%',
    '250%'
  ]

  let allCardsshuffle = (array) => array.sort(() => Math.random() - 0.5);

  let addPos = function () {

    let allCards = allCardsshuffle([...document.querySelectorAll('.cards-single:not(.cta)')]);
    let ctaCard = document.querySelector('.cards-single.cta');

    gsap.set(ctaCard,{x:'-50%',y:'-50%'});

    allCards.forEach( (card) => {

      gsap.set(card,{x:cardX[cardXCounter],y:cardY[cardYCounter]});

      if(cardYCounter == 7) {
        cardYCounter = 0;
        cardXCounter++;
      }else {
        cardYCounter++;
      }


      
    });
  }

  for (let c = 1; c < cardCount+1; c++) {
    let card = document.createElement('div');
    let cardContent = document.createElement('div');
    cardContent.classList.add('cards-single--content');
    card.classList.add('cards-single',cardType[cardBgCounter]);
    card.appendChild(cardContent);

    cardHolder.appendChild(card);
    
    cardBgCounter == 3 ? cardBgCounter = 0 : cardBgCounter++;
 
    if(c == cardCount) {
      addPos();
    }

  }
          

}

