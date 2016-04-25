// ES5: 
var Bot = require('telegram-api').default;
var Message = require('telegram-api/types/Message');
var File = require('telegram-api/types/File');
 
var bot = new Bot({
  token: '142957235:AAGgvOES4UBCEUcmSHt8M0AVyxiUapCL0xQ'
});
 
bot.start();
 
bot.get(/Hi|Hey|Hello|Yo/, function(message) {
  var answer = new Message().text('Hello, Sir').to(message.chat.id);
 
  bot.send(answer);
});