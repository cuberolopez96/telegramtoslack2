var Bot = require('telegram-api').default;
var Message = require('telegram-api/types/Message');
var File = require('telegram-api/types/File');
 
var botT = new Bot({
  token: '142957235:AAGgvOES4UBCEUcmSHt8M0AVyxiUapCL0xQ'
});

var SlackBot = require('slackbots');
 
// create a bot 
var botS = new SlackBot({
    token: 'xoxb-37844473942-S9EAdpFs6eltjdbQOfgm9mgq', // Add a bot https://my.slack.com/services/new/bot and put the token  
    name: 'My Bot'
});
botT.start();
botS.on('start', function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage 
    var params = {
        icon_emoji: ':cat:'
    };
    
    // define channel, where bot exist. You can adjust it there 
});
botT.get(/.+/, function(message) {
   botS.postMessageToChannel('general', message.text);
});