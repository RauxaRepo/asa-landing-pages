

    const track = {

        getStarted: () => {
            utag.view({
                'page_name' : 'loyalty:canadian-cc-acquisition:home',
                'channel': 'loyalty'
            });

        },
        questionAnswer: (question, answer, isthisCorrect) => {

            utag.view({
                'page_name' : `loyalty:2019-year-in-review-quiz:${question}-${isthisCorrect}`, 
                'events' : 'click',
                'question': question,
                'answer_selected': answer,
                'channel': 'loyalty'
            });


        },
        nextQuestion: (question) => {
            utag.view({
                'page_name' : `loyalty:2019-year-in-review-quiz:${question}`,
                'events' : 'click',
                'Text': 'Next Question',
                'next_question' : question,
                'channel': 'loyalty'
            });
        },
        seeResults: () => {
            utag.view({
                'page_name' : 'loyalty:2019-year-in-review-quiz:results',
                'events' : 'event106',
                'Text': 'See Results',
                 'channel': 'loyalty'
            });
        }

    }

export { track };