// Add your requirements
var restify = require('restify');
var builder = require('botbuilder');
var request = require('request');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.PORT || 3000, function()
{
    console.log('%s listening to %s', server.name, server.url);
});

// Create chat bot
var connector = new builder.ChatConnector
({ appId: '316a82f0-dfb8-4f94-8a43-3ef6b572d99a', appPassword: 'yuDtZnm8Rjvhp0Ciuy04HGO' });
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());


// Root dialog for entry point in application
bot.dialog('/', [
    function (session,args, next) {
        session.send("Hi");
    }

]);

