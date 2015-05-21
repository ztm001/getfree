// custom.js


$(document).ready(function(){

// Changing the size and font-weight 

	$('#clean-pure, #free-inde, #integrity, #prosperity').on('mouseenter', function(){
		$('#middle-id').addClass('clean-pure');
	})

	$('#clean-pure, #free-inde, #integrity, #prosperity').on('mouseleave', function(){
		$('#middle-id').removeClass('clean-pure');
	})

// Changing the heading text to something different for each hover

	$('#clean-pure').on('mouseenter', function(){
		$("#middle-id").html("Sustainable Living?");
	})

	$('#free-inde').on('mouseenter', function(){
		$("#middle-id").html("Clean Energy?");
	})

	$('#integrity').on('mouseenter', function(){
		$("#middle-id").html("Small Footprints?");
	})

	$('#prosperity').on('mouseenter', function(){
		$("#middle-id").html("Reduce Excess?");
	})

// Changing the heading back on mouse leave

	$('#clean-pure, #free-inde, #integrity, #prosperity').on('mouseleave', function(){
		$("#middle-id").html("Lets Think Together");
	})

});





