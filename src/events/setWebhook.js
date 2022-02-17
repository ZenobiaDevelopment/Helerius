import fetch from 'node-fetch';
import login from '../Client/data/login.json';

 export function setWebhook() {

    const data = {
        "url": login.webhook,
        "event_types":[
           "delivered",
           "seen",
           "failed",
           "subscribed",
           "unsubscribed",
           "conversation_started"
        ],
        "send_name": true,
        "send_photo": true
     }
     let ENDPOINT = 'https://chatapi.viber.com/pa/set_webhook'
     fetch(ENDPOINT, {
         method: 'POST',
         headers: {
            'X-Viber-Auth-Token': login.token,
         },
         body: JSON.stringify(data),
     }).then(res => res.json())
     .then(json => {
        if(json.status == 1) {
           console.log('Webhook didn\'t start correctly.');
        } else if(json.status == 0) {
           console.log('Webhook is ready.')
        }
     })


}

let webhook = {
    setWebhook
}

export default webhook;