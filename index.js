const Discord = require('discord.js');
const Client = new Discord.Client();
const config = require('./config.json');

Client.once('ready', () => {
	console.log("Client is ready!");
	//Client.channels.get(config.channel).send(config.message);
});

httpTasker = require('http-tasker');
httpTasker.createServer({
	'/test': function() { // Requests made to the path
		return function(method, query, requestBody) { // Return the function that does the processing
			console.log("Response String");
			return 'Response String'; // Return a response from here (not required)
		};
	},
  	'/send': function() {
  		return function(method, query, request) {
			console.log("Sending message!");
			Client.channels.get(config.channel).send(config.message);
        };
	}
}, function(e) { // Used for custom error formatting when a server error occurs
	return e; // For simplicity, return just the error string. Would be good to change this in use (or omit completely).
}).listen(1337); // Returns an instance of http.Server

Client.login(config.token);