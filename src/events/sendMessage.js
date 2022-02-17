import fetch from 'node-fetch';
import config from '../../config.json';
export function sendMessage(name, message, receiver) {
    let ENDPOINT = 'https://chatapi.viber.com/pa/send_message';

    let data = {
        "receiver":receiver,
        "min_api_version":1,
        "sender":{
           "name": name,
           "avatar":""
        },
        "tracking_data":"tracking data",
        "type":"text",
        "text":message
     }

    fetch(ENDPOINT, {
        method: 'POST',
        headers: {
            'X-Viber-Auth-Token': config.token,
        },
        body: JSON.stringify(data),
    })
}


export default sendMessage;