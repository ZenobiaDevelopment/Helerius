import fetch from 'node-fetch';
import login from '../Client/data/login.json';
export function setKeyboard(message, receiver, button) {
    let ENDPOINT = 'https://chatapi.viber.com/pa/send_message';

    let data = {
        "receiver":receiver,
        "min_api_version":7,
        "type":"text",
        "text":message,
        "keyboard":{
           "Type":"keyboard",
           "DefaultHeight":false,
           "Buttons": button
        }
     }

    fetch(ENDPOINT, {
        method: 'POST',
        headers: {
            'X-Viber-Auth-Token': login.token,
        },
        body: JSON.stringify(data),
    })
}


export default setKeyboard;