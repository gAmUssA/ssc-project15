define(function() {
	console.log('way-to-give module was loaded');
	
	var newSection = require('newContentLoader');
	
	var whatWeDoBotton = 'way-to-give';
	var newContainerID = 'way-to-give-container';
	var dataUrl = 'assets/html-includes/way-to-give.html';
	
	newSection.getNewContent(whatWeDoBotton, newContainerID, dataUrl);
});