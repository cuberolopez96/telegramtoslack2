var Bot = require('telegram-api').default;
var Message = require('telegram-api/types/Message');
var File = require('telegram-api/types/File');
var botT = new Bot({
  token: 'XX'
});

var SlackBot = require('slackbots');
 
// create a bot 
var botS = new SlackBot({
    token: 'XX', // Add a bot https://my.slack.com/services/new/bot and put the token  
    name: 'My Bot'
});
botT.start(
);
botS.on('start', function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage 
    var params = {
        icon_emoji: ':cat:'
    };
    
    // define channel, where bot exist. You can adjust it there 
});
botT.on(message,function(msg) {
    botS.postMessageToChannel('tests','['+msg.from.first_name+' ' +msg.from.last_name+'] '+ msg.text);
});

botT.get(/.+/,function(message) {
  
    botS.postMessageToChannel('tests','['+message.from.first_name+' ' +message.from.last_name+'] '+ message.text);
   
});
botT.on('message',function(message){
    botS.postMessageToChannel('tests','['+message.from.first_name+' ' +message.from.last_name+'] '+ message.text);
})

