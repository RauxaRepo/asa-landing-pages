

    const track = {

        getStarted: () => {
            utag.link({
                'page_name' : 'loyalty:2019-year-in-review-quiz:home',
                'events' : 'event105',
                'Text': 'Get-Started',
                'channel': 'loyalty'
            });

        },
        questionAnswer: (question, answer) => {

            utag.link({
                'page_name' : `loyalty:2019-year-in-review-quiz:${question}`, 
                'events' : 'click',
                'question': question,
                'answer_selected': answer,
                'correct' : 'true',
                'channel': 'loyalty'
            });


        },
        nextQuestion: (question) => {
            utag.link({
                'page_name' : `loyalty:2019-year-in-review-quiz:${question}`,
                'events' : 'click',
                'Text': 'Next Question',
                'next_question' : question,
                'channel': 'loyalty'
            });
        },
        seeResults: () => {
            utag.link({
                'page_name' : 'loyalty:2019-year-in-review-quiz:results',
                'events' : 'event106',
                'Text': 'See Results',
                 'channel': 'loyalty'
            });
        }

    }

export { track };