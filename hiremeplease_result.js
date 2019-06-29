// NASA API key
var url = "https://api.nasa.gov/planetary/apod?date=" + date + "&api_key=XUSL8UCemgvC2TkLCJ90jSebAWDYEYqyoAoLItzx";
$.ajax({
url: url,
success: function(result){
	console.log(result);
	if ("copyright" in result) {
		$("#copyright").text("Image Credits: " + result.copyright);
	} else {
		$("#copyright").text("Image Credits: " + "Public Domain");
	}
	if(result.media_type == "video") {
		$("#apod_img_id").css("display", "none"); 
		$("#apod_vid_id").attr("src", result.url);
	} else {
		$("#apod_vid_id").css("display", "none"); 
		$("#apod_img_id").attr("src", result.url);
	}
	$("#reqObject").text(url);
	$("#returnObject").text(JSON.stringify(result, null, 4));  
	$("#apod_explaination").text(result.explanation);
	$("#apod_title").text(result.title);
	},
	// if something is wrong...
	error: function(error){
		console.log("way resulta")
	}
});