function submitCoords(){
	$.get('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/ca6a22e3cb56c275bd4a58e97dcc4535/' + $("#coordinates").val(), function(data){
		$("#timezone").html(data.timezone);
		$("#temp").html(data.currently.temperature);
		$("#weatherWords").html(data.currently.summary);
		$("#realFeel").html(data.currently);

})
}