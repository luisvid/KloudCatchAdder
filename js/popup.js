
$(document).ready(function() {
	if (localStorage["oneclick"] == 'true') {
	
		var username = localStorage["username"];
		var password = localStorage["password"];
		
		chrome.windows.getCurrent(function(windows) {
			chrome.tabs.getSelected(windows.id, function(tab) {
				var title = tab.title;
				var url = tab.url;

				$("body").text("Saving...");

				kcapi.authenticate(username, password, function(status, response) {
				if (status == 200 && response == "ok") {

					kcapi.add(url, title, function(status, response) {					
					if (status == 200) { // success
						$("body").text("Saved!");
						window.setTimeout(function(){window.close()}, 500); // close window after 0.5 secs
					}
					else if (status == 401) {
						$("body").text("Incorrect username or password, go to options page to correct this.");
					}
					else if (status == 403) {
						$("body").text("API limit exceeded, try again later.");
					}
					else {
						$("body").text("Unexpected error: " + status);
					}
					
					});
				}
				else if (status == 200 && response == "error") {
					$('body').text('Incorrect username or password, try again.');
				}
				else {
					$('body').text('Unexpected error: ' + status);
				}
				});
				
				
			});
		});
	}
	else {
		$("body").width("480").height("320");
	
		var frame = document.createElement('iframe');
		frame.setAttribute('width', '100%');
		frame.setAttribute('height', '100%');
		frame.setAttribute('frameborder', '0');

		chrome.windows.getCurrent(function(windows) {
			chrome.tabs.getSelected(windows.id, function(tab) {

				var src = 'http://www.kloudcatch.com/en/signin#signin_tab/'
				
				frame.setAttribute('src', src);
				
				document.body.appendChild(frame);
			
			});
		});
	}
	
	/*
	var bg = chrome.extension.getBackgroundPage();
	bg.reloadBadge();		
	*/
});