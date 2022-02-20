# Welcome to helerius documentation.


# Importing

To setup helerius for your project, you need to have module type in your package.json. After that, write this code in your main file.

`import Viber from 'helerius'`

`const client = new Viber();`

# ready

Prompts something when bot is ready.

Type: 
  - Event

Parameters: none

Example:

`client.once('ready', () => {
    console.log('The bot is ready')
})`

# loadMessageEvent

Loads messageCreate Event.

Type: 
  - Function

Parameters: none

Example:
`client.loadMessageEvent();`

Note: Without this, messageCreate event won't work.


# addWebhook

Creates in-built webhook that is required for the loadMessageEvent

Type: 
  - Function

Parameters:
  - PORT: Number

Example:
`client.addWebhook(8080);`

Note: Setup ngrok for the specific port, and remember to use HTTPS and / at the end.

# login

Logins to the bot with the token and the webhook.

Type: 
  - Function

Parameters:
  - token: String
  - webhook: String

Example:
`client.login(config.token, config.webhook);`

# messageCreate

messageCreate is an event wich listens to new messages sent to your bot.

Type: 
  - Event

Parameters:
  - message: Message Structure

Example:
`client.on('messageCreate', (message) => {
    if(message.content === 'help') {
        client.sendMessage(config.name, 'This is help message.', message.author);
    }
})`


# sendMessage

sendMessage is a function that helps you send message to a specific user, with custom name and a text.

Type: 
  - Function

Parameters:
  - name: String
  - message: String
  - receiver: String

Example:
`client.sendMessage(config.name, 'Hello!', '<id of the receiver comes here>');'`

# setKeyboard

setKeyboard is a function that helps you set a keyboard to a specific user.

Type: 
  - Function

Parameters:
  - message: String
  - receiver: String
  - button: JSON Data structure(type of array)



Example:
```let keyboard = [
        {
           "ActionType":"reply",
           "ActionBody":"reply to me",
           "Text":"Number 1",
           "TextSize":"regular"
        },
        {
            "ActionType":"reply",
            "ActionBody":"reply to me",
            "Text":"Number 2",
            "TextSize":"regular"
         }
     ]
     client.setKeyboard('Hello, tap the buttons below.', '<id of the receiver comes here>', keyboard);
