$(document).ready(function(){
	console.log("materialize init file");

	// Parallax initialization ---------------------------------------
	$('.parallax').parallax();

	var instance = M.Parallax.getInstance(elem);

  /* jQuery Method Calls
    You can still use the old jQuery plugin method calls.
    But you won't be able to access instance properties.

    $('.parallax').parallax('methodName');
    $('.parallax').parallax('methodName', paramName);
  */


});