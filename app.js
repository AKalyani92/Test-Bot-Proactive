// Add your requirements
var restify = require('restify');
var builder = require('botbuilder');
var request = require('request');
var CronJob = require('cron').CronJob;

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.PORT || 3000, function()
{
    console.log('%s listening to %s', server.name, server.url);
});

// Create chat bot
var connector = new builder.ChatConnector
({ appId: 'e2e4a314-0201-404d-964a-2b665fffba1a', appPassword: 'yEph0VAaRnmS7otbNMvP5D1' });
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());




/*
// Root dialog for entry point in application
bot.dialog('/', [
    function (session,args, next) {
        session.send("Hi");
    }

]);*/

// send simple notification
function sendProactiveMessage(address) {
    var msg = new builder.Message().address(address);
    msg.text('Hello, this is a notification');
    msg.textLocale('en-US');
    bot.send(msg);
}

var savedAddress;
server.post('/api/messages', connector.listen());

// Do GET this endpoint to delivey a notification


// root dialog
bot.dialog('/', function(session, args) {

    savedAddress = session.message.address;
    session.send(savedAddress);


});

