#!/usr/bin/env node --no-warnings --experimental-specifier-resolution=node
import EventEmitter from 'events';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import express from 'express';
import bodyParser from 'body-parser';
import {setWebhook} from '../events/setWebhook.js';
import {sendMessage} from '../events/sendMessage.js';

const app = express();

app.use(bodyParser.json());


class Viber extends EventEmitter {
    login(token, webhook){
        if(!token) return;
        if(!webhook) return;
        
        let data = {
            "token": token,
            "webhook": webhook
        }
        
        setWebhook(webhook);
        const gateway = JSON.stringify(data);
        fs.writeFile(__dirname + '/data/login.json', gateway, function (err) {
            if (err) throw err;
          });

        setInterval(() => {}, 1 << 30);

        this.emit('ready');
    }

    sendMessage(name, string, receiver) {
        if(!name) return;
        if(!string) return;
        if(!receiver) return;
        sendMessage(name, string, receiver);
    }

    addWebhook(PORT) {
        if(!PORT) return;
        app.listen(PORT, () => {})
    }

    loadMessageEvent() {
    app.all('/', (req, res) => {
        res.status(200).send({
            "status":0,
            "status_message":"ok",
            "event_types":[
                "delivered",
                "seen",
                "failed",
                "subscribed",
                "unsubscribed",
                "conversation_started"
            ]
        })
            
        let data = req.body;
        if (!data.message) return;

        if (typeof data === 'undefined' || [null, undefined].indexOf(data) !== -1) return;

        this.emit('messageCreate', {content: data.message.text, author: data.sender.id}) 
    })
    
}

}

export default Viber;