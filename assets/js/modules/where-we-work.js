define(function() {
	console.log('where-we-work module was loaded');

	var newSection = require('newContentLoader');
	
	var whoWeAreBotton = 'where-we-work';
	var newContainerID = 'where-we-work-container';
	var dataUrl = 'assets/html-includes/where-we-work.html';

	newSection.getNewContent(whoWeAreBotton, newContainerID, dataUrl);

});