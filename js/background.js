// development id
// var managerId = 'ocjgdlnflggeipkaikiiihohbnmglkmb';

// release id
var managerId = 'mmfblgljgoaokhbcjnddgcnaielcpjeb';

function init() {
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	    if (tab.url.match(/^http/i)) {
		    chrome.pageAction.show(tabId);
	    }
    });
    
    chrome.extension.onRequest.addListener(function(request, sender, response) {
	    /*
	    if (request == 'options') {
		    var greader = localStorage['greader'] == 'false' ? false : true;
		    console.log(greader);
		    
		    var greaderLocation = localStorage['greaderLocation'];
		    console.log(greaderLocation);
		    if (greaderLocation != 'before' && greaderLocation != 'after') {
			    greaderLocation = 'before';
		    }
		    
		    var greaderList = localStorage['greaderList'] == 'false' ? false : true;
		    var greaderExpanded = localStorage['greaderExpanded'] == 'false' ? false : true;
		    
		    var options = {
			    greader: greader,
			    location: greaderLocation,
			    list: greaderList,
			    expanded: greaderExpanded
		    };
		    
		    console.log(options);
		    
		    response(options);
	    }
	    else if (request == 'reload') {
		    reloadBadge();
	    }
	    */
    });
}

/*
function reloadBadge() {

	console.log('sending request...');
	chrome.extension.sendRequest(managerId, 'reload', function() {
		console.log('request sent');
	});
}
*/
