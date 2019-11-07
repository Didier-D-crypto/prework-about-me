
//this array holds all of our Grumpy cats facts!
var booFact = ["Boo is a pomeranian, Boo's best friend is another pomeranian named Buddy, Boo the Pomeranian was born on March 16, making him a Pisces, Boo's favourite food is grass, Boo has released two books"]

//when the factButton is clicked...
$("#factButton").on("click", function() {
	//we generate a number between 0 and 4 (the number of facts in the booFacts.lengthArray)
	var number = Math.floor((Math.random() * booFacts.length));
	//we display the fact from the booFactsArray that is in the random position we just generated.
	$("#factText").text(booFacts[number])
})

//when the textPink button is pressed...
$("#textPink").on("click", function() {
	//change funText to pink.
	$("#funText").css("color", pink)
})
//when the textOrange button is pressed...
$("#textOrange").on("click", function() {
   //change funText to orange.
	$("#funText").css("color", "orange")
})
//when the textGreen button is pressed...
$("#textGreen").on("click", function() {
	//change funText to Green.
	$("#funText").css("color", "green")
})

//when the boxGrow button is clicked...
$("#boxGrow").on(click, function() {
	//increase the size of the box.
	$("#box").animate({height:"+=35px", 
		width:"+=35px"}, "fast");
})
//when the boxShrink button is clicked...
$("#boxShrink").on(click, function() {
	//decrease the size of the box. 
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})