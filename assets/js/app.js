require.config({
	paths: {
		'login':'modules/login',
		'donation':'modules/donation',
		'svg-pie-chart':'modules/svg-pie-chart',
		'campaigns-map':'modules/campaigns-map',
		'showHideDiv':'modules/utils/show-hide-div',
		'loadHtmlContent':'modules/utils/load-html-content',
		'newContentLoader':'modules/utils/new-content-loader',
		'who-we-are':'modules/who-we-are',	
		'what-we-do':'modules/what-we-do',
		'where-we-work':'modules/where-we-work',
		'way-to-give':'modules/way-to-give'
	},
	shim: {
		'campaigns-map': {
            deps: ['async!http://maps.google.com/maps/api/js?sensor=false!callback']
        }
	}
});

require([
	'order!showHideDiv',
	'order!loadHtmlContent',
	'order!newContentLoader',
	'order!login',
	'order!donation',
	'order!svg-pie-chart',
	'order!campaigns-map',
	'order!who-we-are',
	'order!what-we-do',
	'order!where-we-work',
	'order!way-to-give'
	
	
]/*, function () {}*/
);

// using order.js plugin - open console to check order of loading

// Google Maps API loading issue
// Using async.js plugin
// Google Maps loads many JS files asynchronously, so listening just to the first script load
// isn't enough to check if it is ready to be used, another problem is that the regular gmaps script 
// uses document.write, so we need to pass a `callback` parameter to make it not use `document.write` 
// and wait for the callback call.
// <http://code.google.com/apis/maps/documentation/javascript/basics.html#Async>
//
//
// comments was copied from here - https://gist.github.com/882682




