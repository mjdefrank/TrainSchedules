  		// Initialize Firebase
  		var config = {
		    apiKey: "AIzaSyDCJLt3BloP-1jf3MdxJNGZTOuRpB9SFGA",
		    authDomain: "homework-7-4291d.firebaseapp.com",
		    databaseURL: "https://homework-7-4291d.firebaseio.com",
		    projectId: "homework-7-4291d",
		    storageBucket: "",
		    messagingSenderId: "308635506975"
  		};
  		firebase.initializeApp(config);
	
var database = firebase.database();

$(".submitInfo").on('click', function() {
	var trainName = $('#trainName').val().trim();
	var trainDestination = $('#trainDestination').val().trim();
	var trainTime = $('#trainTime').val().trim(); //need to add momentJS
	var trainFrequency = $('#trainFrequency').val().trim();
	console.log(trainName, trainDestination, trainTime, trainFrequency);

	var newTrain = {
		name: trainName,
		destination: trainDestination,
		time: trainTime,
		trainFrequency: trainFrequency
	};

	database.ref().push(newTrain);

	alert('Train successfully added. Thanks!');

	$('#trainName').val("");
	$('#trainDestination').val("");
	$('#trainTime').val("");
	$('#trainFrequency').val("");

});