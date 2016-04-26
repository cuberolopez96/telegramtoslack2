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
    
    // define channel, where bot exist. You can adjust it there https://my.slack.com/services  
    bot.postMessageToChannel('general', 'meow!', params);
    
    // define existing username instead of 'user_name' 
    bot.postMessageToUser('user_name', 'meow!', params); 
    
    // define private group instead of 'private_group', where bot exist 
    bot.postMessageToGroup('private_group', 'meow!', params); 
});