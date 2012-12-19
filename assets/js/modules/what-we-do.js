define(function() {
	console.log('what-we-do module was loaded');
	
	var newSection = require('newContentLoader');
	
	var whatWeDoBotton = 'what-we-do';
	var newContainerID = 'what-we-do-container';
	var dataUrl = 'assets/html-includes/what-we-do.html';
	
	newSection.getNewContent(whatWeDoBotton, newContainerID, dataUrl);
});
