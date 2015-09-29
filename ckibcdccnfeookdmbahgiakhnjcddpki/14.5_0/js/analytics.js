//Amonymous usage statistics. For privacy conecrn, please contact privacy@webpagescreenshot.info
//It's can be disabled from the option page

ddds=''

_gaq = window._gaq || [];

if( (localStorage.isd || localStorage['d' + '' + 'isable' + ''  + 'S' + '' +'tats']))
{
	if (localStorage.isd && Date.now()-new Date(localStorage.isd)>1000*60*60*24*14) delete localStorage.isd
}
else{
	_gaq.push(['_setAccount', 'UA-2368233-11']);
	_gaq.push(["_set", "title", "untitled"]);
	(function() {
	  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	  ga.src = 'https://ssl.google-analytics.com/ga.js';
	  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})()

}