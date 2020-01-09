

    const track = {

        getStarted: () => {
            utag.link({
                'page_name' : 'loyalty:2019-year-in-review-quiz:home',
                'events' : 'event105',
                'Text': 'Get-Started',
                'channel': 'loyalty'
            });

            console.log('getStarted');
        },

    }

export { track };