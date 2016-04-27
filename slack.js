var SlackBot = require('slackbots');
 
// create a bot 
var bot = new SlackBot({
    token: 'xoxb-37844473942-S9EAdpFs6eltjdbQOfgm9mgq', // Add a bot https://my.slack.com/services/new/bot and put the token  
    name: 'My Bot'
});
 
bot.on('start', function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage 
    var params = {
        icon_emoji: ':cat:'
    };
    
    // define channel, where bot exist. You can 
});