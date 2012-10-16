var apikey = '6a1gGdT4p0Z4cD573dTf3aMk3aA0l54b';

var kcapi = {

	authenticate: function(username, password, callback) {
		//var reqUrl = 'http://localhost:3000/login';
		var reqUrl = 'http://www.kloudcatch.com/login';

		var params = {
			email: username,
			password: password,
		};

		$.ajax({
			url: reqUrl,
			type: 'POST',
			data: params,
			complete: function(xhr, status) {
				console.log(status);
				console.log(xhr.status);
				console.log(xhr.response);
				callback(xhr.status,xhr.response);
			}
		});
	},

	add: function(url, title, callback) {
		//var reqUrl = 'http://localhost:3000/droplets/';
		var reqUrl = 'http://www.kloudcatch.com/droplets/';
		
		//url: url,
		var params = {
			"droplet[url]": url,
		};
		
		$.ajax({
			url: reqUrl,
			type: 'POST',
			data: params,
			complete: function(xhr, status) {
				console.log(status);
				console.log(xhr.status);
				console.log(xhr.response);
				callback(xhr.status,xhr.response);
			}
		});
	},

}