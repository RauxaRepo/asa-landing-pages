import {gsap, TweenMax, TimelineMax, Power, Power2, Linear} from 'gsap';
import { confetti } from './confetti';

export default function () {

  let cardHolder = document.querySelector('.cards'),
    theColorCards = [...document.querySelectorAll('.main-page-card--color')];

  if(!cardHolder) {
    return;
  }

  let cardCount = 40;
  let cardBgCounter = 0;
  let cardXCounter = 0;
  let cardYCounter = 0;

  let isTouch = ('touchstart' in document.documentElement);

  let time = 1;
  let theFooterSlide = document.querySelector('.main-page-footer-slide');


  let cardNumber = [
    'one',
    'two',
    'three',
    'four',
    'five'
  ]

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

  // function to shuffle cards
  let allCardsshuffle = (array) => array.sort(() => Math.random() - 0.5);

  // function to stack cards under cta card
  let stackCards = function(cards) {

    let introEnd = gsap.timeline();
    introEnd
    .to(cards,.8,{top:'50%',x:'-50%',y:'-50%',ease:'sine.inout',
      stagger:{
        amount: 1.5,
        onComplete: function(e) {
 
            gsap.to(e._targets,{duration:.25,autoAlpha:0});
          
        }
    }})
    .to('.cards',1, {
      backgroundImage: 'linear-gradient(to left, #2774ae 97%,  #48a9c5 100%)',
      ease: 'sine.in'},'-=.3')
    .to([cardCta,cardQuestionOne], 1.25, {rotationY:'+=180', ease:'sine.inout'},'+=.2')
    .to([cardCta,cardQuestionOne], .625, {z:'+=100', yoyo:true, repeat:1, ease:'sine.in'},'-=1.5')
    .to('.cards-lockup,.cards-progress', .6, {opacity:1,y:0, ease:'sine.inout'},'-=.5')
    .to(['.main-page-card--question','.main-page-card--results'], .25, {autoAlpha:1, ease:'sine.in',
        onComplete: function(){
          spreadTheCards();//spread color cards
        }},'-=0');
  }

  //COLOR CARDS--SPREAD
  function spreadTheCards(){
    let i = 0;
    for (let i = 0;i<theColorCards.length; i++){
      //show cards except for the first
      if( i > 0 ){
        theColorCards[i].style.opacity = 1;
        theColorCards[i].style.visibility = 'visible';
      }
      //rotation
      gsap.to(theColorCards[i], 1, {rotation: - 2.2 * i, ease: 'back.out'});

      if( i == theColorCards.length - 1 ) {

        setTimeout( ()=> {
          confetti.buildRain();
          confetti.buildBurst();
        }, 1000)
      }

    }
  }
  //HIDE COLOR CARDS
  function hideColorCards() {
    theColorCards.forEach(function(item){
      item.style.opacity = 0;
      item.style.visibility = 'hidden';
    })
  }


  //setting card flip
  let cardsHolder = document.querySelector('.cards');
  let cardFlipWrapper = document.querySelector('.cards-single.cta .cards-single--content');
  let cardCta = document.querySelector('.cards-single.cta .cards-single--init-card');
  let cardQuestionOne = document.querySelector('.cards-single.cta .main-page-card--question');

  gsap.set(cardFlipWrapper, { transformStyle:"preserve-3d", perspective: 800, perspectiveOrigin:'50% 50% 0px'});
  gsap.set(cardQuestionOne,{ backfaceVisibility:"hidden", transformStyle: "preserve-3d",rotationY:-180,});
  gsap.set('.cards-single--init-card button',{ backfaceVisibility:"hidden", transformStyle: "preserve-3d"})
  gsap.set([cardCta,cardQuestionOne],{ transformStyle:"preserve-3d",backfaceVisibility:"hidden" });
  //
    

  // function to animate columns of cards
  let scrollCards = function(cta) {

    let columnCards = gsap.timeline({repeat: -1});
    let column1Cards = [...document.querySelectorAll('.cards-single.one')];
    let column2Cards = [...document.querySelectorAll('.cards-single.two')];
    let column4Cards = [...document.querySelectorAll('.cards-single.four')];
    let column5Cards = [...document.querySelectorAll('.cards-single.five')];
    let column3Cards = [...document.querySelectorAll('.cards-single.three')];

    let showCards = gsap.timeline({});
    let showGroupCards = allCardsshuffle([...column1Cards,...column2Cards,...column3Cards,...column4Cards,...column5Cards]);
    
    showCards
    .to('.cards-single.cta',.5,{opacity:1,ease:'sine.in'})
    .to(showGroupCards,.6,{opacity:1,ease:'sine.in', stagger:{amount: 1}},'+=.1');

    columnCards
    .fromTo(column1Cards, 5, {top: '-140%', ease: 'none'}, {top: '194%',ease: 'none' },0)
    .fromTo(column2Cards, 5, {top:'194%', ease: 'none'}, {top:'-140%', ease: 'none' },0)
    .fromTo(column4Cards, 5, {top:'-125%', ease: 'none'}, {top:'209%', ease: 'none'},0)
    .fromTo(column5Cards, 5, {top:'209%', ease: 'none'}, {top:'-125%', ease: 'none'},0);


    // timer for footer and animation intro stop
    let topOffer = document.querySelector('.main-page-header');
    let raiseFooter = function() {
      clearInterval(introStop);
      columnCards.pause();//pause card animation
      gsap.to(cta.querySelector('button'),{duration:.8, opacity:1});
        //EventListener
        cta.querySelector('button').addEventListener('click', (e) => {
          cta.classList.add('disable');
          stackCards(showGroupCards); 
          gsap.to(topOffer,{duration:.5, top:topOffer.offsetTop - (topOffer.clientHeight + 10)});//hide header
      });
			
    }
    //SLIDE IN FOOTER & STOP CARD ANIMATION
    let introStop = setInterval(raiseFooter, 8000);

  }

  //
  // places all cards in grid based on array coors
  //
  let addPos = function () {

    // select all cards except cta
    let allCards = [...document.querySelectorAll('.cards-single:not(.cta)')];
    let ctaCard = document.querySelector('.cards-single.cta');
    let getStartedBtn = document.querySelector('.cards-single--init-card'); 

    //places cta in center
    gsap.set(ctaCard,{x:'-50%',y:'-50%'});

    // iterates all cards and add coors basead on Y first then X
    allCards.forEach( (card, i) => {
      card.classList.add(cardNumber[cardXCounter]);
      gsap.set(card,{x:cardX[cardXCounter],y:cardY[cardYCounter]});

      if(cardYCounter == 7) {
        cardYCounter = 0;
        cardXCounter++;
      }else {
        cardYCounter++;
        
      }
      /*if(i == allCards.length - 1) {
        scrollCards(getStartedBtn);
      }*/
       
    });
  }
  //
  // creates 40 divs ad adds class for background image
  //
  for (let c = 1; c < cardCount+1; c++) {
    // creates divs
    let card = document.createElement('div');
    let cardContent = document.createElement('div');

    // adding classes to divs
    cardContent.classList.add('cards-single--content');
    // adding class based on array 
    card.classList.add('cards-single',cardType[cardBgCounter]);
    card.appendChild(cardContent);

    cardHolder.appendChild(card);
    
    cardBgCounter == 3 ? cardBgCounter = 0 : cardBgCounter++;
 
    if(c == cardCount) {
      addPos();
    }

  }

  //PRELOAD SPRITESHEETS | IMAGES
  function loadSpriteSheet() {
    var loadedImages = 0;
    var imageArr = [
    '../images/cards/tropical.gif',
    '../images/cards/midnight.gif',
    '../images/cards/breezeCard.gif',
    '../images/cards/palm.gif',
    '../images/cards/Title_Card_b.png'
    ];

    preloadImages();

    function preloadImages(){
      for(var i = 0; i<imageArr.length;i++){
        var tempImage = new Image();
        tempImage.src = imageArr[i];
        tempImage.onload = trackProgress();
      }
      //console.log('loadedImages ',imageArr);
    };

    function trackProgress(){
      loadedImages++;
      if(loadedImages == imageArr.length){
        //*RUN FUNCTION HERE*
        hideColorCards();
        scrollCards(document.querySelector('.cards-single--init-card'));
      }
    };

  }
          

  //RUN FUNCTIONS
  loadSpriteSheet();

}

