var app = angular.module('myModule', []);

app.directive('menuLink', function(){
	return {
		restrict: "E",
		template: "<li><a href='#'>Link One</a></li>",
		replace: false
	};
});

	app.directive('headerImage', function(){
	return {
		restrict: "E",
		template: '<div id="header"><h1>Dreamy</h1></div>',
		replace: false
	};
});

	app.directive('footItem', function(){
	return {
		restrict: "E",
		template: '<div id="footer"><div id="footer-valid"><a href="http://validator.w3.org/check/referer">xhtml</a> / <a href="http://www.ginger-ninja.net/">ginger ninja!</a></div></div>',
		replace: false
	};
});


