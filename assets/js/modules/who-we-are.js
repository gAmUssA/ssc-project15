define(function() {
	console.log('who-we-are module was loaded');

	var newSection = require('newContentLoader');
	
	var whoWeAreBotton = 'who-we-are';
	var newContainerID = 'who-we-are-container';
	var dataUrl = 'assets/html-includes/who-we-are.html';

	newSection.getNewContent(whoWeAreBotton, newContainerID, dataUrl);

});
