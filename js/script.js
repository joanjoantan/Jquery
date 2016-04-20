jQuery(document).ready(function ($) {
   $('#content')
		.tabs()
		.addClass('ui-tabs-vertical ui-helper-clearfix');
		
	$('input#inputCircle').change(function() {
		var CirValue = $(this).val() ;
		if (CirValue > 0 && CirValue < 31){
			myCirValue = CirValue * 10 + "px";
			myCirBorder = CirValue * 10 / 2 + "px";
			$("#circle").css({
				"width": myCirValue,
				"height": myCirValue,
				"border-radius": myCirBorder
			})
		}else if( CirValue == ""){
			alert("Please enter a numeric value in the input");
		}else{
			alert("Please enter the value between 1 to 30");
		}
	});

	$('input#inputTriangle').change(function() {
		var TriValue = $(this).val() ;
		if (TriValue > 0 && TriValue < 31){
			myTriValue = TriValue * 10 + "px solid transparent";
			myTriBorder = TriValue * 20 + "px solid red";
			$("#triangle").css({
				"border-left": myTriValue,
				"border-right": myTriValue,
				"border-bottom": myTriBorder
			})
		}else if( TriValue == ""){
			alert("Please enter a numeric value in the input");
		}else{
			alert("Please enter the value between 1 to 30");
		}
	});

	$('input#inputSquare').change(function() {
		var SquValue = $(this).val() ;
		if (SquValue > 0 && SquValue < 31){
			mySquValue = SquValue * 10 ;
			$("#square").css({
				"width": mySquValue,
				"height": mySquValue
			})
		}else if( SquValue == ""){
			alert("Please enter a numeric value in the input");
		}else{
			alert("Please enter the value between 1 to 30");
		}
	});
});