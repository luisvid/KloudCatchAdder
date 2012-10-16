// current options

var oneclick;
var username;
var password;

/**
 * Erases all options stored in local storage
 */
function eraseOptions() {	

	localStorage.removeItem('oneclick');
	localStorage.removeItem('username');
	localStorage.removeItem('password');
}

/**
 * Loads options stored in local storage, or loads default ones if
 * stored options do not exist or are not valid
 */
function loadOptions() {	

	oneclick = localStorage['oneclick'] == 'true' ? true : false;
	$('#oneclick')[0].checked = oneclick;
	
	username = localStorage['username'];
	if (username == 'undefined') {
		username = '';
	}
	$('#username').val(username);
	
	password = localStorage['password'];
	if (password == 'undefined') {
		password = '';
	}
	$('#password').val(password);
}

/**
 * Saves current options to local storage
 */
function saveOptions() {
	
	localStorage['oneclick'] = String(oneclick);
	localStorage['username'] = username;
	localStorage['password'] = password;
}

$(document).ready(function() {
	loadOptions();
	
	if ($('#oneclick')[0].checked) $('#oneclick-options').show();
	else $('#oneclick-options').hide();	
	
	$('#oneclick').live('change', function() {
		if ($(this)[0].checked) $('#oneclick-options').show('slow');
		else $('#oneclick-options').hide('slow');
		oneclick = $(this)[0].checked;
		saveOptions();
	});
	
	$('#username').live('change', function() {
		username = $(this).val();
		saveOptions();
	});
	
	$('#password').live('change', function() {
		password = $(this).val();
		saveOptions();
	});
	
	$('#check').live('click', function() {
		$('#message').text('Checking...');
		kcapi.authenticate(username, password, function(status, response) {
			if (status == 200 && response == "ok") {
				$('#message').text('Correct');
			}
			else if (status == 200 && response == "error") {
				$('#message').text('Incorrect username or password, try again.');
			}
			else {
				$('#message').text('Unexpected error: ' + status);
			}
		});
	});
	
	$('#erase').live('click', function() { 
		eraseOptions(); 
		location.reload();
	});
});
