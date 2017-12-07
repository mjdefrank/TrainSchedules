// Initialize Firebase
	var config = 
		{
    		apiKey: "AIzaSyDCJLt3BloP-1jf3MdxJNGZTOuRpB9SFGA",
    		authDomain: "homework-7-4291d.firebaseapp.com",
		    databaseURL: "https://homework-7-4291d.firebaseio.com",
		    projectId: "homework-7-4291d",
		    storageBucket: "homework-7-4291d.appspot.com",
		    messagingSenderId: "308635506975"
  		};
  	firebase.initializeApp(config);
	//simplify database calls by creating variable
	var database = firebase.database();
	//create onclick function for submit button
	$(".submitInfo").on('click', function(event) {
		//prevent default blank submissions
		event.preventDefault();
		//set variables for each object property
		var trainName = $('#trainName').val().trim();
		var trainDestination = $('#trainDestination').val().trim();
		var trainTime = $('#trainTime').val().trim(); //need to add momentJS
		var trainFrequency = $('#trainFrequency').val().trim();
		
		var trainInfo = {			
			name: trainName,
			destination: trainDestination,
			time: trainTime,
			frequency: trainFrequency
			};
		// push newTrain into the firebase database
		database.ref().push(trainInfo);
		//alert user of successful amendment
		alert('Train successfully added. Thanks!');
		//reset field values to blank string
		$('#trainName').val("");
		$('#trainDestination').val("");
		$('#trainTime').val("");
		$('#trainFrequency').val("");
	});
	
	//creates a call to the database for info on the most recent child
	database.ref().on('child_added', function (snapshot, prevChildKey) {
		//assign var to snapshot.val() for efficiency
		var newTrain = snapshot.val();
		console.log(newTrain);

		var trainName = newTrain.name;
		var trainDestination = newTrain.destination;
		var trainFrequency = moment(newTrain.frequency).format('mm'); //-> in minutes
		var trainTime = newTrain.time;
		
		//set variable for now
		var now = moment();
		//prettyify first train time
		var firstTrain = moment.unix(newTrain.time).format('HH:mm');
		
		var minutesAway = 'placeholder'; //I'm not sure how to get this...a for loop maybe? to run through each increment of the trainFrequency?

//not appending to table body...I structured this off of the in class example. I'm not sure why it's not working.
		$('#trainSchedule > tbody').append("<tr><td>"+trainName+"</td><td>"+trainDestination+"</td><td>"+trainFrequency+"</td><td>"+trainTime+"</td><td>"+minutesAway+"</td></tr>");
	});
