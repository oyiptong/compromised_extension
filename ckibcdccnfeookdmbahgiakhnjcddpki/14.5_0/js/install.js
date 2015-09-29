if(!localStorage.open_first_time){
	chrome.tabs.create({url:'https://www.webpagescreenshot.info'})
	localStorage.open_first_time=true
}