

    const track = {

        pageInit: () => {
            utag.view({
                'page_name' : 'loyalty:canadian-cc-acquisition:home',
                'channel': 'loyalty'
            });

        },
        applyNowBtnWorldElite: () => {
            utag.view({
                'link_tracking' : "credit-card : mastercard-ca-worldelite : acquisition",
                'events' : 'event23'
            });
        },
        applyNowBtnPlatinum: () => {
            utag.view({
                'link_tracking' : "credit-card : mastercard-ca-platinumplus : acquisition",
                'events' : 'event23'
            });
        }

    }

export default track;